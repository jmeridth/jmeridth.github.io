---
title: Raspberry Pi Kubernetes Cluster - Part 4
date: '2018-12-28 10:35:23'
tags:
- kubernetes
- raspberrypi
---

[Raspberry Pi Kubenetes Cluster - Part 1](/posts/raspberry-pi-kubernetes-cluster-part-1)

[Raspberry Pi Kubenetes Cluster - Part 2](/posts/raspberry-pi-kubernetes-cluster-part-2)

[Raspberry Pi Kubenetes Cluster - Part 3](/posts/raspberry-pi-kubernetes-cluster-part-3)

[Raspberry Pi Kubenetes Cluster - Part 4](/posts/raspberry-pi-kubernetes-cluster-part-4)

Howdy again.

In this post I'm going to show you how to create a docker image to run on ARM architecture and also how to deploy it and view it.

To start please view my basic flask application called fl8 [here](https://github.com/meridth/fl8)

If you'd like to clone and use it:

```bash
git clone git@github.com:meridth/fl8.git && cd fl8
```

## ARM docker image

First we need to learn about QEMU

### What is QEMU and QEMU installation

QEMU (Quick EMUlator) is an Open-Source hosted hypervisor, i.e. an hypervisor running on a OS just as other computer programs, which performs hardware virtualization. QEMU emulates CPUs of several architectures, e.g. x86, PPC, ARM and SPARC. It allows the execution of non-native target executables emulating the native execution and, as we require in this case, the cross-building process.

### Base Docker image that includes QEMU

Please open the `Dockerfile.arm` and notice the first line: `FROM hypriot/rpi-alpine`.  This is a base image that includes the target qemu statically linked executable, *qemu-arm-static* in this case.  I chose `hypriot/rpi-alpine` because the alpine base images are much smaller than other base images.

### Register QEMU in the build agent

To add QEMU in the build agent there is a specific Docker Image performing what we need, so just run in your command line:

```bash
docker run --rm --privileged multiarch/qemu-user-static:register --reset
```

### Build image

```bash
docker build -f ./Dockerfile.arm -t meridth/rpi-fl8 .
```

And voila!  You now have an image that will run on Raspberry Pis.

## Deployment and Service

`/.run-rpi.sh` is my script where I run a Kubernetes deployment with 3 replicas and a Kubernetes service.  Please read `fl8-rpi-deployment.yml` and `fl8-rpi-service.yml`.  They are only different from the other deployment and service files by labels.  Labels are key/vaule pairs that can be used by selectors later.

The deployment will pull my image from `meridth/rpi-fl8` on dockerhub.  If you have uploaded your docker image somewhere you can change the deployment file to pull that image instead.

## Viewing application

```bash
kubectl get pods
```

Choose a pod to create the port forwarding ssh tunnel.

```bash
kubectl port-forward [pod-name] [app-port]:[app-port]
```

Example:  `kubectl port-forward rpi-fl8-5d84dd8ff6-d9tgz 5010:5010`

The final result when you go to `http://localhost:5010` in a browser.

![port forward result](/images/kubernetes_cluster/port_forward.png)

Hope this helps someone else.  Cheers.
