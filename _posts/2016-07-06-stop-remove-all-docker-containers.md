---
layout: post
title: Stop and Remove All Docker Containers
date: 2016/07/06 16:44:00
tags: docker
---

Command remove all docker containers:

`docker stop '$(docker ps -a -q)' && docker rm '$(docker ps -a -q)'`

`docker ps -a -q` lists all container IDs
