---
layout: post
title: Meta keys with iTerm and Weechat
date: 2015/07/14 10:12:00
tags: weechat irc cli
---

Found [this][1] tip today about how to ensure your iTerm console sends `+Esc` to weechat for the meta keys to work properly.

> To make alt key bindings behave well for Mac OS X iTerm2, go to Preferences->Profiles->Keys and click +Esc radio button for option keys.

I like to use meta+c to clear a buffer and meta+x to close a buffer.  meta for me is the `Alt` key.  [Here][2] is the keybindings in my `.weechat.conf`.

  [1]: https://github.com/davidxia/weechat/blob/9f18f8fbff9dcf424d4a6136d446f83631fbd021/README.md#L20
  [2]: https://github.com/jmeridth/myansible/commit/ffce0dcf38667e6f5ab7e18b6d7471a37b398b14
