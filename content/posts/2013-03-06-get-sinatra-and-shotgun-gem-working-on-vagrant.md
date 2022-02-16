---
url: /posts/get-sinatra-and-shotgun-gem-working-on-vagrant
title: Get Sinatra and Shotgun gem working on Vagrant
date: 2013-03-06 00:00:00 -06:00
tags:
- sinatra
- vagrant
layout: post
---

TL;DR

```bash
shotgun -o 0.0.0.0 config.ru
```

You have to tell [shotgun][1] to use 0.0.0.0, the “all IP addresses on this box” IP address listen on. The default is 127.0.0.1, which is the loopback IP address on the vagrant instance.

Hope this helps someone.

   [1]: https://github.com/rtomayko/shotgun/blob/master/bin/shotgun#L46
