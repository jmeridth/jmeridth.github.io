---
title: git clone --mirror vs git clone --bare
date: 2012-03-30 00:00:00 -05:00
tags:
- git
layout: post
---

I setup [GitWeb][1] at work recently. It is very fast and extremely useful. I noticed that the repositories the web view was looking at didn’t show acategory or other branches. Only the master branch. I had used

```
git clone --bare git@host:repository.git
```

to get the code. This ensures that no working directory is created. Pretty much only the contents of the .git directory. In order to get the .git directory but also acategory, non-master branches, etc, I learned to use:

```bash
git clone --mirror git@host:repository.git
```
By definition from the man page of [git clone][2]:

```bash
--mirror
    Set up a mirror of the source repository. This implies --bare. Compared to --bare,
    --mirror not only maps local branches of the source to local branches of the target,
    it maps all refs (including remote-tracking branches, notes etc.) and sets up a
    refspec configuration such that all these refs are overwritten by a git remote
    update in the target repository.
```

After I used `--mirror` instead of `--bare`, the other branches acategory showed up. Winning.

   [1]: http://progit.org/book/ch4-6.html
   [2]: http://schacon.github.com/git/git-clone.html
