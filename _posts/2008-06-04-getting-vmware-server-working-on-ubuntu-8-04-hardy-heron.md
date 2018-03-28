---
title: Getting VMWare server working on Ubuntu 8.04 (Hardy Heron)
date: 2008-06-04 01:08:00 -05:00
layout: post
---

I had some slow issues with Virtual Box, which I've heard have been fixed.  I'm heading back down the VMWare path and did some research first.

I found this [post](http://ubuntu-tutorials.com/2008/05/03/install-vmware-server-105-on-ubuntu-804-hardy/) and tried it out.  It worked great.  My VMs are moving at my required speed now.  The latest version of VMWare 1.06 still requires some bash shell work.  This post gets you setup good.  


I'm running Virtual Studio 2008, Re# 4.0 (latest nightly build), and a couple other apps. 

Using virtual machines have become the development de facto.  I'm finally getting back into the grove with ASP.NET MVC and some ExtJS stuff at work. (THANK GOD).  We've brought in the latest Rhino Mocks (3.5) and Castle Windsor.  Fun stuff ahead.

## Comments

**[schambers](#270 "2008-06-04 11:31:04"):** We recently purchased a new box at work to run 8 virtual machine instances in vmware. It was a beefy machine (3 ghz dual quad-core proc, 16gb of memory etc.) The problem came when we tried to hook up the virtual machines to our fiber channel SAN. apparently vmware freaks out if you dont have the proper product version to support fiber channel. Other than that, these instances are super fast. Vmware is does amazingly well with memory management. We have tried to bog down that box and are having a hard time thus far.

**[jlockwood](#271 "2008-06-05 19:10:06"):** Thanks Jason, I was planning on looking into the same thing within the next 2 weeks anyway. Thanks for saving me time!

