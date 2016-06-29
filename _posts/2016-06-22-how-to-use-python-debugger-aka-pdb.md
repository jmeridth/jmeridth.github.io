---
layout: post
title: How To Use the Python Debugger aka pdb
date: 2016/06/22 15:10:10
tags: python
---

I have been using the Python Debugger aka pdb [docs for 2.7](https://docs.python.org/2/library/pdb.html)/[docs for 3.5](https://docs.python.org/3.5/library/pdb.html) a lot recently and wanted to share a cheat sheet I found and also the common commands I use.

The cheatsheet:

![pdb cheatsheet]({{site.url}}/assets/images/pdb_cheatsheet.png)

The easiest thing to do is put the following in your code somewhere:

        import pdb; pdb.set_trace()

Then when you run it, it will stop there and you can step through the code a line at a time.  The `l(ist)` command will show you 11 lines of code around the current line is the one I use the most.  `s(tep)`, `n(ext)`, `r(eturn)` are some other I use regularly.

Once the debugger is up, you can check the stacktrace `w(where)`, variable values `a(rgs)` or `[variable_name]` or many other things.  Please check the documentation or the cheatsheet image above.

A much more in-depth usage of pdb can be found [here](https://pymotw.com/2/pdb/)

[Cheatsheet image credit](https://raw.githubusercontent.com/nblock/pdb-cheatsheet/master/pdb-cheatsheet.png)
