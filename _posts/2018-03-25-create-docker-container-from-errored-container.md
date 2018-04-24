---
title: Create Docker Container from Errored Container
date: 2018-03-25 22:31:00 -05:00
tags:
- docker
layout: post
---

When I'm trying to "dockerize" an applciation I usually have to work through some wonkiness.

To diagnose a container that has errored out, I, obviously, look at the logs via `docker logs -f [container_name]`.  That is sometimes helpful.  It will, at minimum tell me where I need to focus on the new container I'm going to create.

<!--more-->
![diagnose]({{ site.url }}/images/diagnose.jpg)

Pre-requisites to being able to build a diagnosis container:

* You need to use `CMD`, *not* `ENTRYPOINT` in the Dockerfile
  * with `CMD` you'll be able to start a shell, with `ENTRYPOINT` your diagnosis container will just keep trying to run that

To create a diagnosis container, do the following:

* Check your failed container ID by `docker ps -a`
* Create docker image form the container with `docker commit`
  * example: `docker commit -m "diagnosis" [failed container id]`
* Check the newly create docker image ID by `docker images`
* `docker run -it [new container image id] sh`
  * this takes you into a container immediately after the error occurred.

Hope this helps someone else.

Cheers.
