---
url: /posts/git-achievements-on-windows-part-2
title: Git Achievements on Windows (Part 3)
date: 2012-03-21 00:00:00 -05:00
tags:
- git
- windows
layout: post
---

[Part 1][1]

I’m using Msysgit Bash CLI (up-to-date install instructions

I’ve forked the git-achievements github repository

notice it forks to a gh-pages branch, not a master branch

this allows github to fire jekyll off against your github account and generate your git-achievements page

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ git clone git@github.com:jmeridth/git-achievments.git
Cloning into git-achievements...
remote: Counting objects: 1168, done.
remote: Compressing objects: 100% (742/742), done.
Receiving objects: 91% (1063/1168)
Receiving objects: 100% (1168/1168), 155.28 KiB, done.
Resolving objects: 100% (801/801), done.
```

cloned repository locally into my C:code folder (resulting in /c/code/git-achievements by Git Bash CLI path terms)

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ vim ~/.bashrc
```

~/ (tilde %2B forward slash means home directory, where the .bashrc file needs to be)

```bash
export PATH="$PATH:/c/code/git-achievements"
alias git="git-achievements"
```

add the newly clone git-achievements directory to your PATH environment variable

alias the git command to call git-achievements

git-achievements calls the real git.exe, this just allows it to wrap it and intercept calls

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ source ~/.bashrc
```

source means to refresh/reapply

if you don’t do this, your new changes won’t take effect

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ echo $PATH
......:/c/code/git-achievements
```

this outputs your PATH environment variable content.

Notice the git-achievements folder at the end. :)

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ git config --global achievement.upload "true"
```

this allows uploads to your fork, on the gh-pages branch

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ git --version
git version 1.7.2.3.msysgit.0
```

to ensure you didn’t break git

```bash
jasonmeridth@JASON-LAPTOP /c/code
$ git achievements --help
Git Achievements

you currently have:     1 achievements

Options:
    -l --list   Show all achievements
    -p --publish Publish existing achievemetns and push to origin.
```

shows the git achievements help

generates your first achievement as a “Student” (I already had mine)

Hope you guys have as much fun as I did. Yeah, yeah, I’m a nerd. So what? ;)

[My Achievements][2]

  [1]: http://blog.jasonmeridth.com/git-achievements-on-windows
  [2]: http://blog.jasonmeridth.com/git-achievements
