---
title: Git and Seeting What Commits Are Not In Another Branch
date: 2012-05-22 00:00:00 -05:00
tags:
- git
layout: post
---

A common question I get from co-workers is, “How do I see if I already merged my changes into my master branch?”. My usual suggestion was to use git diff`but I've started telling them to look at`git cherry` (NOT git-cherry-pick).

From [the new Git documentation][1], git-cherry finds commits not merged upstream.

I use it like this while on the master branch to see what commits are in master that are not on the feature-branch-name branch:

```bash
$ git cherry -v master feature-branch-name
```

The -v option prints out the commit SHAs and messages. If I am already on the feature-branch-name branch, I can type the following to get the same effect:

```bash
$ git cherry -v master
```

The results typically looks something like:

```bash
%2B a4d0f79fccbbc12a53e8f0e5c2a4ef960ad69ba2 commit 1 message
%2B 7e71afd1faf36f17a0ff506e63cd2ca51496dad3 commit 2 message
%2B 5e815ece05d8813354e60ca1affb8cdb8c5d78fc commit 3 message
%2B 956f4cec5684544066a0d261ff8ac80aff7a57ea commit 4 message
%2B 6c6cdb4342ed935f8fbd38f48f51dec469dd1823 commit 5 message
%2B c3481fd0d6279f5bd45c455b915e0b4b1c0d8909 commit 6 message
```

That means those commits are on feature-branch-name branch but not in master

   [1]: http://git-scm.com/docs/git-cherry
  
