---
title: Raspberry Pi Kubernetes Cluster - Part 1
date: 2018-04-07 09:01:00 -05:00
tags:
- kubernetes
- raspberry pi
layout: post
---

[Raspberry Pi Kubenetes Cluster - Part 1]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-1)

[Raspberry Pi Kubenetes Cluster - Part 2]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-2)

[Raspberry Pi Kubenetes Cluster - Part 3]({{ site.url }}/posts/raspberry-pi-kubernetes-cluster-part-3)

Howdy

This is going to be the first post about my setup of a Raspberry Pi Kubernetes Cluster.  I saw a post by [Hart Hoover](https://harthoover.com/kubernetes-1.9-on-a-raspberry-pi-cluster/) and it finally motivated me to purchase his "grocery list" and do this finally.  I've been using [Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/) for local Kubernetes testing but it doesn't give you multi-host testing abilities.  I've also been wanting to get deeper into my Raspberry Pi knowledge.  Lots of learning and winning.

<!--more-->
The items I bought were:

- Six [Raspberry Pi 3 Model B+ Motherboards](https://smile.amazon.com/dp/B07BFH96M3)
- Six [SanDisk Ultra 32GB microSDHC UHS-I Card with Adapter, Grey/Red, Standard Packaging (SDSQUNC-032G-GN6MA)](https://smile.amazon.com/gp/product/B010Q57T02/)
- One [Sabrent 6-Pack 22AWG Premium 3ft Micro USB Cables High Speed USB 2.0 A Male to Micro B Sync and Charge Cables Black CB-UM63](https://smile.amazon.com/gp/product/B011KLFERG/ref=oh_aui_detailpage_o02_s01?ie=UTF8&psc=1)
- One [AmazonBasics 6-Port USB Wall Charger (60-Watt) - Black](https://smile.amazon.com/gp/product/B01L0KN8OS/ref=oh_aui_detailpage_o02_s01?ie=UTF8&psc=1)
- One [GeauxRobot Raspberry Pi 3 Model B 6-layer Dog Bone Stack Clear Case Box Enclosure also for Pi 2B B+ A+ B A](https://smile.amazon.com/gp/product/B01D9130QC/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)
- One [Black Box 8-Port Switch](http://amzn.to/2gNzLzi)

Here is the tweet when it all arrived:

<div class="jekyll-twitter-plugin"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I blame <a href="https://twitter.com/hhoover?ref_src=twsrc%5Etfw">@hhoover</a> ;). I will be building my <a href="https://twitter.com/kubernetesio?ref_src=twsrc%5Etfw">@kubernetesio</a> cluster once the 6pi case shows up next Wednesday. The extra pi is to upgrade my <a href="https://twitter.com/RetroPieProject?ref_src=twsrc%5Etfw">@RetroPieProject</a>. Touch screen is an addition I want to try. Side project here I come. <a href="https://t.co/EebIKbsCeH">pic.twitter.com/EebIKbsCeH</a></p>&mdash; Jason Meridth (@jmeridth) <a href="https://twitter.com/jmeridth/status/980075584725422080?ref_src=twsrc%5Etfw">March 31, 2018</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

I spent this morning finally putting it together.

Here is me getting started on the "dogbone case" to hold all of the Raspberry Pis:

![The layout]({{ site.url }}/images/kubernetes_cluster/case_2.jpg)

The bottom and one layer above:

![The bottom and one layer above]({{ site.url }}/images/kubernetes_cluster/case_3.jpg)

And the rest:

![3 Layers]({{ site.url }}/images/kubernetes_cluster/case_4.jpg)

![4 Layers]({{ site.url }}/images/kubernetes_cluster/case_11.jpg)

![5 Layers]({{ site.url }}/images/kubernetes_cluster/case_12.jpg)

![6 Layers and Finished]({{ site.url }}/images/kubernetes_cluster/case_13.jpg)

Different angles completed:

![Finished Angle 2]({{ site.url }}/images/kubernetes_cluster/case_14.jpg)

![Finished Angle 3]({{ site.url }}/images/kubernetes_cluster/case_15.jpg)

And connect the power:

![Power]({{ site.url }}/images/kubernetes_cluster/case_16.jpg)

Next post will be on getting the 6 sandisk cards ready and putting them in and watching the Raspberry Pis boot up and get a green light.  Stay tuned.

Cheers.
