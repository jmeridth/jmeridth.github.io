---
layout: post
title: TMUX Cheat Sheet
date: 2013/03/06 00:00:00
tags: tools tmux 
---

Install TMUX

```bash
sudo apt-get install tmux
```

personal config file is at ~/.tmux.conf

change prefix to ctrl-a instead of default ctrl-b (easier on my hands)

```bash
unbind C-b
set -g prefix C-a
```

### Outside of session

  * **tmux list-sessions** List all sessions
  * **tmux list-keys** List all key bindings
  * **tmux list-commands** List all commands
  * **tmux source-file ~/.tmux.conf** Reload TMUX conf file
  * **tmux a -t session_name** Attach to named session

### Inside of session

  * **Ctrl-a, new -s session_name** Create new named session
  * **Ctrl-a, c** Create new window
  * **Ctrl-a, ,** Rename window
  * **Ctrl-a, w** List windows
  * **Ctrl-a, l** Move to previously selected window
  * **Ctrl-a, n** Move to next window
  * **Ctrl-a, p** Move to previous window
  * **Ctrl-a, d** Leave session
  * **Ctrl-a, s** List sessions - default, if not mapped elsewhere
  * **Ctrl-a, ?** List all keybindings
  * **Ctrl-a, %** Split into vertical panes
  * **Ctrl-a, ”** Split into horizontal panes
  * **Ctrl-a, {or}** Switch between panes
  * **Ctrl-a, KeyUp** Switch to pane above
  * **Ctrl-a, KeyDown** Switch to pane below
  * **Ctrl-a, KeyLeft** Switch to pane to the left
  * **Ctrl-a, KeyRight** Switch to pane to the right  
  * **Ctrl-a, space** Make each pane equal sizes
  * **Ctrl-a, s** Sync sessions - what you type shows in all [mapping](https://github.com/jmeridth/dotfiles/blob/master/.tmux.conf#L13)
