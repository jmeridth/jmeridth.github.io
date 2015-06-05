---
layout: post
title: Personal VIM Cheatsheet
date: 2014/03/03 16:21:02
category: vim cli
---

Will be adding to this post as I learn/remember shortcuts

- `.` - repeat last command in normal mode
- `@:` then `@@` - repeat last command entered with `:` [source](http://vim.wikia.com/wiki/Repeat_last_colon_command)
- `#` - find all occurances of the word I'm currently on
- `dfc` - delete everything including the letter 'c'
- `dtc` - delete everything up to the letter 'c'
- shift+h - go to top of screen
- shift+m - go to middle of screen
- shift+l - go to bottom of screen
- ctrl+v [h|j|k|l]` - highlight indeividual items (great for highlighting column(s)
- `gUiw` - capitalize the current word
- `gUU` - capitalize current line
- `vU` - capitalize current character
- `guiw` - lowercase the current word
- `guu` - lowercase the current line
- `vu` - lowercase current character

keybindings I use all the time via mappgings in my [.vimrc](https://github.com/jmeridth/dotfiles/blob/master/.vimrc)

- `,v` - create vertical split
- `,h` - create horizontal split
- ctrl+j - go to split below/down
- ctrl+h - go to split on left
- ctrl+k - go to split above/up
- ctrl+l - go to split on right
