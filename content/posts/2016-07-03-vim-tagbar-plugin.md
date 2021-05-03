---
title: Vim Tagbar Plugin
date: 2016-07-03 09:16:00 -05:00
tags:
- vim
---

I found the [tagbar](https://github.com/majutsushi/tagbar) Vim plugin last night and finally tried it out this morning.  I like it.  I mapped `,tb` to showing it [in my .vimrc](https://github.com/jmeridth/dotfiles/blob/master/vimrc).

One of the requirements is [Exuberant Ctags](http://ctags.sourceforge.net/).  Since I'm on OSX I installed it with [Homebrew](https://brew.sh):

`brew install ctags`

In a Python file it will group/fold all of your imports, classes, methods, etc in one view.  It is very nice and when you press enter on one of them it takes you to that item in the current buffer.

Here are the screenshots from the github repo screenshots (C++ files):

![screenshot 1](https://camo.githubusercontent.com/fc85311154723793776aed28488befdfaab36c42/68747470733a2f2f692e696d6775722e636f6d2f5366394c7332722e706e67)

![screenshot 2](https://camo.githubusercontent.com/f5065c1dda4cbd6df6eed89c4086e31fc1774b2e/68747470733a2f2f692e696d6775722e636f6d2f6e3462705076332e706e67)

I'm really liking it so far.
