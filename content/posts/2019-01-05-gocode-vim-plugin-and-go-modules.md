---
title: Gocode Vim Plugin and Go Modules
date: '2019-01-05 11:09:26'
tags:
- go
- vim
---

**Update**: My friend [Eli Uriegas](https://twitter.com/_seemethere) let me know that you don't need `gocode` anymore since `vim-go` has autocompletion.  I tested it out and he is correct. [Here](https://twitter.com/_seemethere/status/1081626050717728770) is his tweet with a link to his dotfiles on how he sets up his `.vimrc` to use `vim-go`

*Original Post:*

I recently purchased [Let's Go](https://lets-go.alexedwards.net/) from Alex Edwards.  I wanted an end-to-end Golang website tutorial.  It has been great.  Lots learned.

Unfortunately, he is using Go's modules and the version of the gocode Vim plugin I was using did not support Go modules.

### Solution

Use [this fork](https://github.com/stamblerre/gocode) of the gocode Vim plugin and you'll get support for Go modules.

I use [Vim Plug](https://github.com/junegunn/vim-plug) for my Vim plugins.  Huge fan of Vundle but I like the post-actions feature of Plug.  I just had to change one line of my vimrc and re-run updates.

```diff
diff --git a/vimrc b/vimrc
index 3e8edf1..8395705 100644
--- a/vimrc
+++ b/vimrc
@@ -73,7 +73,7 @@ endif
           let editor_name='nvim'
           Plug 'zchee/deoplete-go', { 'do': 'make'}
         endif
-        Plug 'nsf/gocode', { 'rtp': 'vim', 'do': '~/.config/nvim/plugged/gocode/vim/symlink.sh' }
+        Plug 'stamblerre/gocode', { 'rtp': 'vim', 'do': '~/.vim/plugged/gocode/vim/symlink.sh' }
         Plug 'godoctor/godoctor.vim', {'for': 'go'} " Gocode refactoring tool
     " }
```

That is the line I had to change then run `:PlugUpdate!` and the new plugin was installed.

I figured all of this out due to [this comment](https://github.com/zchee/deoplete-go/issues/134#issuecomment-435436305) by [Tommaso Sardelli](https://github.com/cippaciong) on Github.  Thank you Tommaso.
