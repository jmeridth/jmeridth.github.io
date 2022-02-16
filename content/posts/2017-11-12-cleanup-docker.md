---
url: /posts/cleanup-docker
title: Cleanup Docker
date: 2017-11-12 21:15:00 -06:00
layout: post
tags:
- docker
---

I keep having friends who have experienced the `no space left on device` when trying to build images.

I have aliases for most of my container/image/volume cleanup:

```bash
alias dka='dkc;dki;dkv'
alias dkc='docker ps -aq | xargs docker rm -f'
alias dki='docker images -aq | xargs docker rmi -f'
alias dkv='docker volume ls -qf dangling=true | xargs docker volume rm'
```

I use `dka` all the time.

There is also the `docker system prune -a` command that works.

I've also had to unmount my local aufs volume on my ubuntu laptop via:

`sudo umount -l /var/lib/docker/aufs && sudo rm -rf /var/lib/docker/aufs`

and all things are cleaned up.  Hope this helps someone else.

Cheers.
