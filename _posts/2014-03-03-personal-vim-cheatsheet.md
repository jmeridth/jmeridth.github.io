---
layout: post
title: Personal VIM Cheatsheet
original: 2014/03/03 16:21:02
date: 2016/04/19 15:36:00
tags: vim cli
---

_Originally posted on 03-03-2014 and continually updated_

Will be adding to this post as I learn/remember shortcuts

- `.` - repeat last command in normal mode
- `@:` then `@@` - repeat last command entered with `:` [source](http://vim.wikia.com/wiki/Repeat_last_colon_command)
- `#` - find all occurances of the word I'm currently on
- `dfc` - delete everything including the letter 'c'
- `dtc` - delete everything up to the letter 'c'
- `:e!` - reload current file (typically after doing a git pull)
- `:b#` - go back to previous buffer 
- shift+h - go to top of screen
- shift+m - go to middle of screen
- shift+l - go to bottom of screen
- ctrl+v `[h|j|k|l]` - highlight individual items (great for highlighting column(s)
- `gUiw` - capitalize the current word
- `gUU` - capitalize current line
- `vU` - capitalize current character
- `guiw` - lowercase the current word
- `guu` - lowercase the current line
- `vu` - lowercase current character
- `[num]j` - go down num lines from current line
- `[num]k` - go up num lines from current line
- ctrl+O - jump back to previous (older) location in file [info](http://vim.wikia.com/wiki/Jumping_to_previously_visited_locations)
- ctrl+I - jump forward to next (newer) location in file [info](http://vim.wikia.com/wiki/Jumping_to_previously_visited_locations)

keybindings I use all the time via mappgings in my [.vimrc](https://github.com/jmeridth/dotfiles/blob/master/vimrc)

- `,v` - create vertical split
- `,h` - create horizontal split
- `,=` - reset split to equal sizes after parent window resizes
- ctrl+j - go to split below/down
- ctrl+h - go to split on left
- ctrl+k - go to split above/up
- ctrl+l - go to split on right

With the [jedi-vim plugin](https://github.com/davidhalter/jedi-vim) installed for Python:

- `,g` - go to source - [you can designate how source file opens (vertical or horizontal)](https://github.com/davidhalter/jedi-vim#settings)
- `,n` - list usages
- `K` - show documentation
