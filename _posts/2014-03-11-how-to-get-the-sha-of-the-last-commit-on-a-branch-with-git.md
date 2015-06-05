---
layout: post
title: How to Get The SHA of The Last Commit on a Branch With Git
date: 2014/03/11 02:30:23
category: git
---

I've been asked this a few times and have had to do it lately a few times.

To get the SHA of the last commit from a specific branch, use [`git rev-parse`](http://git-scm.com/docs/git-rev-parse)

`git rev-parse origin/master` (remote branch)

or 

`git rev-parse master` (local branch)
