---
layout: post
title: Getting Going With Docker
date: 2016/03/22 00:00:00
tags: docker
---

Looks like this post is moot as of today 3/24/2016 due to [Docker for Mac and Docker for Windows](https://blog.docker.com/2016/03/docker-for-mac-windows-beta/) betas coming out

While interviewing for a new gig I was asked to use memcached and they had suggested standing up a docker instance.  I have been using docker pretty regularly now after learning much from my previous co-workers and practical usage. 

So, on OSX you can install the `docker-machine` and `docker` brew formulas with [homebrew][2]. (If you are not using [homebrew][2] and [cask][3] to manage your installations on OSX you are missing out).  I use VirtualBox as my VM hosting tool.

If you haven't installed (tapped) cask for application (non-CLI, GUI apps) installations, you should do it now:

```
brew tap caskroom/cask
```

Now install the items:

```
brew cask install virtualbox
brew install docker-machine docker
```

On Linux you don't need docker-machine as you can just use docker directly, but on OSX you need the set up a Linux host through a VM tool like Virtualbox.  You need to setup your docker-machine with the following command:

```
docker-machine create --driver virtualbox default
```

This creates the docker host on virtualbox and names it default.  So when you run `docker-machine ls` you will see something like the following:

```
› docker-machine ls
NAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER    ERRORS
default   *        virtualbox   Running   tcp://192.168.99.100:2376           v1.10.3
```

I created a Dockerfile to create the docker image with the following content:

```
FROM ubuntu:latest
MAINTAINER Jason Meridth <jmeridth@gmail.com>

RUN apt-get update && \
    apt-get install -y memcached && \
    apt-get clean

EXPOSE 11211

CMD ["-u", "root", "-m", "1000"]
USER daemon
ENTRYPOINT memcached
```

This Dockerfile will do the following:
- create a new image based on the latest Ubuntu docker image on [DockerHub][4].
- set the maintainer to myself
- update the instance
- install memcached
- cleanup the update/install
- expose port 11211 from the instance
- run the arguments against the entry point (memcached)
- set user to daemon
- set entry point to be memcached

After the docker host is create I then built the image with the following command:

```
docker build -t memcached_img .
```

`-t` lets you set a tag on the image so you can use that instead of the unique ID when creating the instance.

To see the new image you run the following:

```
docker images
```

and you'll see something like:

```
› docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
memcached_img       latest              ad3d86685ca8        57 minutes ago      211.4 MB
ubuntu              latest              97434d46f197        4 days ago          188 MB
```

Note: To delete the image you would use the `docker rmi memcached_img` command.

I then created the docker instace based on the new docker image with the following command:

```
docker run -name memcached_ins -d -p 45001:11211 memcached_img
```

You should receive the sha of your new container instance.  To see the instance information run `docker ps`.  The result is

```
› docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
18c82cd27a2d        memcached_img       "/bin/sh -c memcached"   5 seconds ago       Up 5 seconds        0.0.0.0:45001->11211/tcp   memcached_ins
```

As you can see this shows the mapping from the host port of 45001 to the container instance port of 11211 (defaul for memcached).

Note: You may need to add the `-a` argument to the `docker ps` command to see all container instances (including the ones not currently running).

[1]: http://www.rackspace.com
[2]: http://brew.sh
[3]: https://caskroom.github.io/
[4]: https://dockerhub.com
