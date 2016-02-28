---
layout: post
title: Weechat keyboard shortcuts
date: 2014/03/14 23:52:39
tags: weechat irc cli
---

I've switched from using irssi to [Weechat](http://weechat.org) since I rejoined the ranks as a [Racker](http://www.rackspace.com).

[Here](https://github.com/jmeridth/dotfiles/blob/master/weechat.conf) is my current weechat.conf file

Some of the ones I use often:

- ctrl+h - window left
- ctrl+j - window down
- ctrl+k - window up
- ctrl+l - window right
- ctrl+z - window zoom (make current small window full screen)
- ctrl+n - next buffer
- ctrl+p - previous buffer
- ctrl+y - clipboard paste
- ctrl+r - search
- ctrl+j - stop search


normal commands not included with my weechat.conf that I use:

- /window resize <number> - resizes window to that percentage
- /buffer clear - clears the buffer, i use this often with the [highlight monitor plugin](http://weechat.org/scripts/source/highmon.pl.html/)
- /buffer merge <other buffer number> - merges two buffers into one (use ctrl+x to switch between them)
- /buffer unmerge - unmerge the buffer you're currently on out to its own

