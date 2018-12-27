---
title: Raspberry Pi Kubernetes Cluster - Part 2
date: '2018-05-02 21:13:07'
tags:
- kubernetes
- raspberry pi
layout: post
---

**Edit**:  After fighting with Raspbian Lite, I decided to use HypriotOS as the base image on my Raspberry Pis.  Here are the [downloads](https://blog.hypriot.com/downloads/).  I used version 1.9.0 that included Docker 18.04.0-ce, kernel 4.14.34.  You can still use Etcher below to put the image on the SD Cards

[Raspberry Pi Kubenetes Cluster - Part 1]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-1)

[Raspberry Pi Kubenetes Cluster - Part 2]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-2)

[Raspberry Pi Kubenetes Cluster - Part 3]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-3)

Howdy again.

Alright, my 8 port switch showed up so I was able to connect my raspberry 3B+ boards to my home network.  I plugged it in with 6 1ft CAT5 cables I had in my catch-all box that all of us nerds have.  I'd highly suggest flexible CAT 6 cables instead if you can get them, like [here](https://www.amazon.com/Cat-Ethernet-Cable-Black-Connectors/dp/B01IQWGKQ6).   I ordered them and they showed up before I finished this post, so I am using the CAT6 cables.

<!--more-->

The IP addresses they will receive initialy from my home router via DHCP can be determined with nmap.  Lets imagine my subnet is 192.168.1.0/24.

Once I got them on the network I did the following:

{% gist 64e7b08729ffe779f77a7bda0221c6e9 %}

### Install Raspbian OS On SD Cards

You can get the Raspberry Pi Stretch Lite OS from [here](https://www.raspberrypi.org/downloads/raspbian/).

![Raspberry Pi Stretch Lite]({{ site.url }}/images/kubernetes_cluster/raspberry_pi_stretch_lite.png)

Then use the [Etcher](https://etcher.io/) tool to install it to each of the 6 SD cards.

![Etcher]({{ site.url }}/images/kubernetes_cluster/etcher.gif)

#### IMPORTANT

Before putting the cards into the Raspberry Pis you need to add a `ssh` folder to the root of the SD cards.  This will allow you to ssh to each Raspberry Pi with default credentials (username: `pi` and password `raspberry`).  Example: `ssh pi@raspberry_pi_ip` where `raspberry_pi_ip` is obtained from the nmap command above.

Next post will be setting up kubernetes.  Thank you for reading.

Cheers.
