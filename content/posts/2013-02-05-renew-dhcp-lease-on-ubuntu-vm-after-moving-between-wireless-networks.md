---
url: /posts/renew-dhcp-lease-on-ubuntu-vm-after-moving-between-wireless-networks
title: Renew DHCP Lease on Ubuntu VM After Moving Between Wireless Networks
date: 2013-02-05 00:00:00 -06:00
tags:
- ubuntu
- networking
- wireless
layout: post
---

TL;DR

```bash
sudo dhclient -r [eth0] &amp;&amp; sudo dhclient [eth0]
```

I add that command as an alias to my ~/.bashrc file

```bash
alias resetdhcp='sudo dhclient -r eth0 &amp;&amp; sudo dhclient eth0'
```

then resourced it so I could use it in the bash session I was in

```
source ~/.bashrc
```

I constantly have my Ubuntu VM (VirtualBox) running on my Windows laptop and dock/undock it between work and home. Obviously those are two different wireless networks. Well, I was unable to find a dhcp renewal command that would work until today (look above).

This command releases and renews your DHCP IP Address.

I’m very happy about this.

[dhclient man page][1]

When run by itself, your instance will seek out a new ip lease.

   [1]: http://linux.about.com/library/cmd/blcmdl8_dhclient.htm
