---
title: Docker Daemon Error When Running Docker Compose
date: 2018-01-02 12:11:00 -06:00
tags:
- ubuntu
- vim
---

![docker why](/images/why-docker-why-i-just-want-to-deploy.jpg)

TL;DR Make sure you don't have any old mounted volumes around if you see the error below.

I just got the following error when trying to run `docker-compose up -d`

```bash
ERROR: Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?

If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.
```

Please note I have a database using a mounted volume.  The issue was that the previous mount was still present.  Once I deleted that, `docker-compose up -d` would work jut fine.

If anyone knows a more elegant way to handle this, I'm open to it.

Cheers.
