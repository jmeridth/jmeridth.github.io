---
title: Copying Text With Mouse In TMUX
date: 2015-01-26 08:46:04 -06:00
tags:
- tmux
layout: post
---

TL;DR
Hold down shift key and select text with left mouse button.  This will copy to clipboard.  Then hold down the shift key again and click the middle button on your mouse.  Voila!

Long version:
After finally moving over to Ubuntu as my native operating system, I've been using the default Terminal application for development.  I run my weechat IRC session on a remote node in TMUX so I can detach/reattach at will and stay connected.  I'm using ZNC as my bounce also in case the tmux session or weechat crashes.  This means it stays connected and will replay anything I missed while disconnected.  Anyway, I have had issues with copy/paste in the Terminal app, especially when my development sessions are in TMUX.  I've been using Ctrl+Shift and selecting text and it has been working, but has been adding a newline on the end when I use Ctrl+Shift+V (paste).  Hodling down the shift key was the trick.  Hold down the shift key and select text with left mouse button.  This will copy to clipboard.  Then hold down the shift key again and click the middle button on your mouse.  This will paste the text WITHOUT a newline.

[Source](https://awhan.wordpress.com/2012/04/18/tmux-copy-paste-with-mouse/)
