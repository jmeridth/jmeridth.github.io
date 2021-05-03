---
title: Seeing which Git branch I'm on via my console prompt (__git_ps1)
date: 2010-05-23 02:55:00 -05:00
tags:
- git
---

I like knowing which Git branch I’m currently in. I use the git-ps1 function feature that comes with git-core. If you clone or download the git source:

```bash
git://git.kernel.org/pub/scm/git/git.git
```

There is a file in the contrib/completion folder called git-prompt.sh:

```bash
~/code/git/contrib/completion(master) > ls
total 96
-rwxr-xr-x  1 user  staff    44K Apr 14 15:26 git-prompt.sh
```

I copy this file to my $HOME folder as .git-prompt.sh and then reference it and the ps1 propt feature in my .bashrc file

```bash
source ~/.git-prompt.sh
export PS1='w$(__git_ps1 "(%s)") > '
```

And now whenever I cd into a folder that is a Git repository I see something like the following prompt:

```bash
~/gitosis-admin(master) >
```

Notice the (master) notation. That is telling me I’m on the master branch. It’s just easier than issuing a “git branch” command everytime I want to know.

I know there are many other configurations out there, but I like to use the simplest thing that works.

## Comments

**[Daniel H&#246;lbling](#475 "2010-05-23 20:07:27"):** I use something similar for my powershell prompt: [http://www.tigraine.at/2010/05/16/displaying-git-branch-in-your-powershell-prompt/] greetings Daniel

**[derick.bailey](#476 "2010-05-24 13:51:43"):** @Daniel - you should check out Posh-Git. it's a very complete powershell git integration. [http://github.com/dahlbyk/posh-git]

**[Jason Meridth](#477 "2010-05-24 13:57:56"):** @Daniel Nice. @Derick Thanks for the info. I'd heard about it, but hadn't looked yet.

**[3KWA](#506 "2011-07-05 01:32:00"):** missing in front of w
