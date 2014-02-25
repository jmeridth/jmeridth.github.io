.. title: Set VIM as Default Editor
.. link: http://blog.jasonmeridth.com/2013/03/06/set-vim-as-default-editor.html
.. description: 
.. date: 2013/03/06 00:00:00
.. slug: set-vim-as-default-editor
.. type: text
.. tags: tools, vim, ubuntu

```bash
sudo update-alternatives –config editor

OUTPUT:
There are 4 choices for the alternative editor (providing /usr/bin/editor).

  Selection    Path                Priority   Status
------------------------------------------------------------
* 0            /bin/nano            40        auto mode
  1            /bin/ed             -100       manual mode
  2            /bin/nano            40        manual mode
  3            /usr/bin/vim.basic   30        manual mode
  4            /usr/bin/vim.tiny    10        manual mode

Press enter to keep the current choice[*], or type selection number: 3
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/editor (editor) in manual mode
```
