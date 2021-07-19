---
title: Readline Error With RVM and Rails 3 on Ubuntu
date: 2010-11-25 00:00:00 -06:00
tags:
- rails
- rvm
layout: post
---

So I’m using Rails 3 with RVM these days. The last few times I created a new slice or restaged a laptop/desktop with Ubuntu I always seem to have an issue when I try to run the Rails console:

```bash
my_app/(master)$ rails console
/home/jmeridth/.rvm/rubies/ruby-1.9.2-p0/lib/ruby/1.9.1/irb/completion.rb:9:in `require': no such file to load -- readline (LoadError)
from /home/jmeridth/.rvm/rubies/ruby-1.9.2-p0/lib/ruby/1.9.1/irb/completion.rb:9:in `'
from /code/my_app/shared/bundle/ruby/1.9.1/gems/railties-3.0.1/lib/rails/commands/console.rb:3:in `require'
from /code/my_app/shared/bundle/ruby/1.9.1/gems/railties-3.0.1/lib/rails/commands/console.rb:3:in `'
from /code/my_app/shared/bundle/ruby/1.9.1/gems/railties-3.0.1/lib/rails/commands.rb:20:in `require'
from /code/my_app/shared/bundle/ruby/1.9.1/gems/railties-3.0.1/lib/rails/commands.rb:20:in `'
from script/rails:6:in `require'
from script/rails:6:in `'
```

I looked at the RVM site and saw how to install the readline package:

```bash
$ rvm package install readline
$ rvm remove 1.9.2
$ rvm install 1.9.2 --with-readline-dir=$rvm_path/usr
```

I did this and it still didn’t work. The advice I received from googling was to compile the readline extension by hand and see if any dependencies were missing:

```bash
$ sudo apt-get install libncurses5-dev libreadline5-dev
$ ruby ~/.rvm/src/ruby-1.9.2-p0/readline/ext/extconf.rb
checking for tgetnum() in -lncurses... no
checking for readline/readline.h... no
checking for readline/history.h... no
checking for readline() in -lreadline... no
...
```

This meant that I was missing the lncurses and libreadline libraries from apt-get.

```bash
$ sudo apt-get install libncurses5-dev libreadline5-dev
...they install...
```

Now when I run extconf.rb, everything is there:

```bash
$ ruby ~/.rvm/src/ruby-1.9.2-p0/readline/ext/extconf.rb
checking for tgetnum() in -lncurses... yes
checking for readline/readline.h.... yes
checking for readline/history.h... yes
checking for readline() in -lreadline... yes
...
```

A make file was generated, I run it, and then install:

```bash
$ cd ~/.rvm/src/ruby-1.9.2-p0/readline/ext/
$ make
...
$ sudo make install
...
```

Now the rails console works:

```bash
my_app$ rails console
Loading development environment (Rails 3.0.3)
ruby-1.9.2-p0 &gt;
```
