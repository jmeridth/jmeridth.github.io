---
url: /posts/refspec-matches-more-than-one
title: Refspec matches more than one
date: 2010-02-27 19:31:00 -06:00
layout: post
tags:
- git
---

I was trying to push to a canonical repository this morning and got the following error:

```bash
$ git push origin master
error: src refspec master matches more than one.
error: failed to push some refs to 'ssh://user@host/srv/git/repo'
```

This happened because I had accidentally created a master tag locally:

```bash
$ git tag
master
tag1
tag2
tag3
tag4
```

Once I deleted the tag locally:

```bash
tag -d master
```

I was able to push again.
