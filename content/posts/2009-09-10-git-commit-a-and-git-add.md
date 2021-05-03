---
title: "'git commit -a' and 'git add'"
date: 2009-09-10 17:07:00 -05:00
---

I've heard or read too many git blog posts/pod casts state that if you create a new file in your local Git repo and you want to shorten the steps on getting it added to the local repository, all you have to do is:

```bash
git commit -am "my commit message"
```

This is _not_ true. If the file has never been added to the repo prior, then you still have to:

```bash
git add <file_name>
```

Why?

The "git commit -a" command is a shortcut to a two-step process. After you modify a file that is already known by the repo, you still have to tell the repo, "Hey! I want to add this to the staged files and eventually commit it to you." That is done by issuing the "git add" command. "git commit -a" is staging the file and committing it in one step.

If you create a new file, edit it, and issue the "git commit -a" command, you will see something like:

```bash
~ > mkdir test
~ > cd test
~/test > git initInitialized empty Git repository in /Users/jasonmeridth/test/.git/
~/test(master) > touch test
~/test(master) > git commit -am "initial commit"
# On branch master
#
# Initial commit
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       test
nothing added to commit but untracked files present (use "git add" to track)
```

The "nothing added to commit but untracked files present" is the key comment. Git even suggests using "git add" to track the file. See, it's user friendly. Just be aware.
