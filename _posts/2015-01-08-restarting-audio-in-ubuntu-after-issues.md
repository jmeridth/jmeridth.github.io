---
layout: post
title: Restarting Audio in Ubuntu After Issues
date: 2015-01-08 11:12:14 UTC-06:00
category: linux ubuntu
---

The following command restarted audio for me in Ubuntu after my microphone on my headphones stopped working.

    pulseaudio -k && sudo alsa force-reload

Credit to: [http://askubuntu.com/a/230893](http://askubuntu.com/a/230893)
