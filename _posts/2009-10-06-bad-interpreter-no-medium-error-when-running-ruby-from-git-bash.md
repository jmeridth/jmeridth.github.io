---
title: "'Bad Interpreter: No Medium' error when running Ruby from Git Bash"
date: 2009-10-06 14:50:00 -05:00
layout: post
tags:
- ruby
---

I opened my Windows VM last night for the first time in months to finally work on a .NET project from Github.  When I found out I needed the rspec gem installed (I'm normally a shoulda guy), I decided to see what gems I had installed first:

```bash
gem list
```

and got the following error:

```bash
$ gem list
sh.exe": /c/Ruby/bin/gem: D:/Users/Luis/projects/oss/oci/installer2-trunk/ruby/bin/ruby.exe: bad interpreter: no medium
```

Umm..... D:/Users/Luis? After some googling I found [this article on StackOverflow](http://stackoverflow.com/questions/835865/bad-interpreter-no-medium-error-when-running-ruby-from-git-bash) that directed me to this [blog](http://www.liquidfish.net/2009/04/ruby-and-git-bash-woes.htm).  It pretty much states that the shebang line (#!) at the top of my Ruby One-Click installer file had changed/been corrupted, I don't know.  I changed the line to point to my ruby exe (#!C:Rubybinruby.exe) and my gem commands started working again.
