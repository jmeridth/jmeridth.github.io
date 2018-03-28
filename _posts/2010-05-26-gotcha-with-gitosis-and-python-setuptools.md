---
title: Gotcha with Gitosis and python-setuptools
date: 2010-05-26 04:58:00 -05:00
tags:
- git
- gitosis
layout: post
---

Today I decided to upgrade my slicehost slice from Intrepid Ibex to Lucid Lynx (Intrepid → Jaunty → Karmic → Lucid). Yeah, yeah, I’m a little behind. Anyways, It upgraded just fine. However when I was trying to push code to my gitosis instance (which I installed over a year ago), I got the following stack trace:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-27-at-12.06.50-AM.png)

This told me that I had been using python-setuptools for python 2.5. A little googling and praying that I wouldn’t have to roll back to the snapshot I took before I started the upgrade (Thank God!), I found the solution. I went onto the gitosis slice, cloned the gitosis repository:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-27-at-12.07.06-AM.png)

and then ran the setup again:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-27-at-12.09.48-AM.png)

and it fixed the issue. Did I mention how much I love google. Hope this helps someone else.

## Comments

**[kathleen s.](#484 "2010-08-22 22:11:46"):** HI--This is about your blog on removing the Hard Drive of a Dell Dimension 3000. I think its closed for comments now, but I wanted to thank you for posting how to do it or I would've been lost. I am a technotard. Thanks again.

