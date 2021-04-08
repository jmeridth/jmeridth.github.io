---
title: Raspberry Pi Kubernetes Cluster - Part 3
layout: post
tags:
- kubernetes
- raspberry pi
date: '2018-12-24 15:59:23'
---

[Raspberry Pi Kubenetes Cluster - Part 1]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-1)

[Raspberry Pi Kubenetes Cluster - Part 2]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-2)

[Raspberry Pi Kubenetes Cluster - Part 3]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-3)

[Raspberry Pi Kubenetes Cluster - Part 4]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-4)

Well, it took me long enough to follow up on my previous posts.  There are reasons.

1. The day job has been fun and busy
2. Family life has been fun and busy
3. I kept hitting annoying errors when trying to get my cluster up and running

The first two reasons are the usual reasons a person doesn't blog. :)

The last one is what prevented me from blogging sooner.  I had mutliple issues when trying to use [rak8s](https://rak8s.io) to setup my cluster.  I'm a big fan of [Ansible](https://ansible.com) and I do not like running scripts over and over.  I did read [K8S on Raspbian Lite](https://gist.github.com/alexellis/fdbc90de7691a1b9edb545c17da2d975) from top to bottom and realized automation would make this much better.

<!--more-->

### The issues I experienced:

#### apt-get update would not work

I started with the vanilla Raspbian lite image to run on my nodes and had MANY MANY issues with running `apt-get update` and `apt-get upgrade`.  The mirrors would disconnect often and just stall.  This doesn't help my attempted usage of rak8s which does both on the `cluster.yml` run (which I'll talk about later).

#### rak8s changes needed to run HypriotOS and kubernetes 1.13.1

Clone the repo locally and I'll walk you through what I changed to get [rak8s](https://rak8s.io) working for me and HypriotOS.

Change the following files:

- `ansible.cfg`
	- change user from `pi` to `pirate`
- `roles/kubeadm/tasks/main.yml`
	- add `ignore_errors: True` to `Disable Swap` task
	- I have an open PR for this [here](https://github.com/rak8s/rak8s/pull/46)
- `group_vars/all.yml`
	- Change `kubernetes_package_version` to `"1.13.1-00"`
	- Change `kubernetes_version` to `"v1.13.1"`

After you make those changes you can run `ansible-playbook cluster.yml` as the rak8s documentation suggests.  Please note this is after you edit `inventory` and copy `ssh` keys to raspberry pis.

#### Flannel networking issue once nodes are up

After I get all of the nodes up I noticed the master node was marked ast `NotReady` and when I ran `kubectl describe node raks8000` I saw the following error:

> KubeletNotReady              runtime network not ready: NetworkReady=false reason:NetworkPluginNotReady message:docker: network plugin is not ready: cni config uninitialized

This error is known in kubernetes > 1.12 and flannel v0.10.0.  It is mentioned in [this issue](https://github.com/coreos/flannel/issues/1044).  The fix is specifically mentioned [here](https://github.com/coreos/flannel/issues/1044#issuecomment-427247749).  It is to run the following command

```bash
kubectl -n kube-system apply -f
https://raw.githubusercontent.com/coreos/flannel/bc79dd1505b0c8681ece4de4c0d86c5cd2643275/Documentation/kube-flannel.yml
```

After readin the issue it seems the fix will be in the next version of flannel and will be backported to v0.10.0.

# A running cluster
![Running Cluster]({{ site.url }}/images/kubernetes_cluster/running_cluster.png)
