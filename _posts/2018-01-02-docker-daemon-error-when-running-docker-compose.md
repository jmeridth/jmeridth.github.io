---
tags: ubuntu, vim
layout: post
title: Docker Daemon Error When Running Docker Compose
date: '2018/01/02 12:11:00'
---

TL;DR Make sure you don't have any old mounted volumes around if you see the error below.

I just got the following error when trying to run `docker-compose up -d`

```
ERROR: Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?

If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.
```

Please note I have a database using a mounted volume.  The issue was that the previous mount was still present.  Once I deleted that, `docker-compose up -d` would work jut fine.

If anyone knows a more elegant way to handle this, I'm open to it.

Cheers.

