---
title: Pair Programming with Screen
date: 2010-02-04 16:44:00 -06:00
layout: post
tags:
- screen
- tools
---

I’ve decided, once again, to make the jump back to VIM full-time. It will help my bash-fu become stronger and also ensure that I can pair program with any other dev. TextMate is awesome for personal development, but using [NERDTree](http://http//www.vim.org/scripts/script.php?script_id=1658) ([example](http://www.flickr.com/photos/30496122@N07/2862367534/sizes/o/)) and [vim.rails](http://rails.vim.tpope.net/) ([cheat sheet](http://cheat.errtheblog.com/s/rails_vim/)) by [@tpope](http://twitter.com/tpope) has made my VIM experience much more pleasant..

Checkout my vim files on [github](http://github.com/armmer/vim_files)

This post is for me to remember how to use [Gnu screen](http://www.gnu.org/software/screen/) to pair program. side note: [here](http://cheat.errtheblog.com/s/screen/) is the best cheat sheet on Gnu Screen.

startup screen:

```bash
screen -S sessionname
```

turn on multi-user

```bash
ctrl+a
:multiuser on
```

add permissions for the other user:

```bash
ctrl+a
:acladd user
```

instruct second user to connect with:

```bash
screen -x yourusername/sessionname
```
