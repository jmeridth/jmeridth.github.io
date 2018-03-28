---
title: Git reset, checkout & "bare double dash", and revert
date: 2010-03-23 21:29:00 -05:00
tags:
- git
layout: post
---

**UPDATE**: Please make sure to read Alexander's comments on `git rebase --interactive`

**UPDATE**: If you need to unstage a file prior to your first commit:

```bash
$ git rm --cached filename
```

Thanks to [Sean Chambers](http://schambers.lostechies.com) for tweeting about [this](http://twitter.com/schambers/status/11005630400)

Some of the common questions I get are about how to reset or revert changes in Git. There are two typical scenarios you have to deal with. One is if you haven’t committed the code yet. The other is if you _have_ committed the code.

# **Before** you have committed the code

Well, if you want to unstage a file you simply do the following:

## git reset

Say you staged a change (“git add”) and you realize you either don’t want the file tracked or the change staged. `git reset` is the command that will do this:

```bash
$ git reset HEAD filename
```

One of the suggestions I’ve [read about](http://jaimeiniesta.github.io/learn.github.com/p/undoing.html) and have given is to create an alias called unstage:

```bash
$ git config --global alias.unstage 'reset HEAD'
```

So now instead of:

```bash
$ git reset HEAD README
```

you can do:

```bash
$ git unstage README
```

I personally just stick to `git reset HEAD filename`. “Why?” you ask. It’s so that if I have to use git on another system that doesn’t have my aliases, I know the commands.

## git checkout

Another common question is “How do I undo an unstaged/uncommitted change? I just want to roll my file back…”. `git checkout — filename` handles this:

```bash
$ git checkout -- README
```

This will roll the README file back to the last committed version in the working directory. Another question after I answer this is, “Why do you have to put the two dashes there?” The two dashes are canonically called the “bare double dashes”. The reason they are there is because it ensures that the checkout command know that we are trying to roll back a file and not change branches. Remember that the typical usage of the checkout command is to change branches. If you had a branch called README, this command:

```bash
$ git checkout README
```

would checkout the README branch and not rollback the current README file in the working directory.

## **After** you have committed the code

If you committed code that you realized you shouldn’t have, you have two options:

## git revert

`git revert` will create a new commit which undoes a specifc commit that you pass to it. The usual use is to undo the last commit:

```bash
$ git revert HEAD
```

If you need to undo a commit that happened before the last commit you can pass it a [treeish](http://book.git-scm.com/4_git_treeishes.html) argument or a specific SHA1 of the commit you want to undo:

Revert the next-to-last commit:

```bash
$ git revert HEAD^
```

Revert a specific commit by SHA:

```bash
$ git revert f8c7dd34
```

Just be aware that if you pass a reference to a commit other than the last one, if there are any merge conflicts created by undoing the change, you will have to deal with those at the time of your new commit (the revert one).

## git commit —amend

`git commit —amend` is another command that allows you to change your last commit. Say I forgot to stage a file for the commit and I need to edit the commit message:

```bash
$ git commit -m 'initial commit'
$ git add awesome_file
$ git commit --amend
```

My visual editor of choice will open with the prior commit message allowing me to edit it, I change the message, save it and exit. The previous commit is overridden by adding the content of my awesome_file and now has my new commit message. Personally, I’ve only had to use this a couple times because I’m usually editing tracked files and by doing `git commit -am “message”` I rarely forget to stage my files. The times I’ve had to use `git commit —amend` is when I forget to add/stage a new/untracked file.

## Comments

**[derick.bailey](#456 "2010-03-23 21:41:06"):** dude, you're a life saver. i was just wondering about reverts earlier today while doing a lunch-n-learn session on git. fortunately, the topic never came up. :) next time, i guess... i've done the reset thing a bajillion times, but never looked up the right way to revert something that was committed. and the --amend is awesome, too. so much nicer than having a bunch of "oops, i forgot xyz" commits like i do with subversion.

**[Adam Ford](#457 "2010-03-23 21:58:11"):** git commit --amend is also useful when you made a typo or forgot something in the commit message, as it allows you to edit that as well!

**[Jason Meridth](#458 "2010-03-23 22:02:57"):** @derick glad it helped. @Adam I mention that at the bottom of the post, but re-iteration never hurts. Thanks.

**[Alexander Gro&#223;](#459 "2010-03-24 01:12:13"):** As long as you didn't push your changes to a remote you can also undo commits with interactive rebasing. The end result is as if you never did that commit (as opposed o revert, wich adds a "negative" commit). > git log --oneline -3 123456 foo 567890 bar abcdef baz # Say you want to undo the "bar" commit > git rebase --interactive abcdef # Your editor opens, allowing you to specify which commits to delete or even edit! pick 123456 foo pick 567890 bar pick abcdef baz # Delete the line containing "bar" and save your changes. Exit the editor. # Rebasing... > git log ef3478 foo abcdef baz Done!

**[Alexander Gro&#223;](#460 "2010-03-24 01:20:27"):** I might add that interactive rebasing can also be done to history that has been pushed (published) to a remote, though its not good or recommended practice. Be aware that you will have to force the next push. Also, it might break history for people who have already pulled your changes. The git manpages contain documentation on how to recover from an upstream rebase. http://www.kernel.org/pub/software/scm/git/docs/git-rebase.html

**[Jason Meridth](#461 "2010-03-24 02:09:35"):** @Alexander Yep. That's another way to do it. You've actually saved me the time of writing a post for that. I'm going to update this post and make sure people read your comments. Thank you.

**[derick.bailey](#462 "2010-03-24 02:38:35"):** so how do i revert a merge? i just merged BranchA into Master and realized that I didn't want to do that... when i run "git revert HEAD^" on master, I get this message: "fatal: commit (hash#) is a merge but no -m option was given." then when i try the -m option i get "error: switch 'm' expects a numerical value" ... for "parent number" ... umm.... what?

**[Jason Meridth](#463 "2010-03-24 03:44:42"):** @derick http://www.kernel.org/pub/software/scm/git/docs/howto/revert-a-faulty-merge.txt summarizes this situation. Wicked stuff. I'll be researching this problem in more depth

**[Jason Meridth](#464 "2010-03-24 04:11:55"):** @derick @qrush responded to your tweet and his solution is easier: Just create a new branch from the commit on master, prior to the merge, delete master and rename the new branch to master. this will work if you haven't deleted the topic you merged into master.

**[derick.bailey](#465 "2010-03-25 01:53:30"):** @qrush got me squared away: git reset --hard HEAD^ I've used reset --hard to clean out my current working set and get back to last commit... just didn't think about it in this case. i was so fixated on "revert" (from my svn experience) that I couldn't see past the git revert command.

**[Jason Meridth](#466 "2010-03-25 02:17:04"):** @derick Excellent. I'm going to update the post to make sure people read your comments so that the knowledge is shared. Thank you for following up on this.

