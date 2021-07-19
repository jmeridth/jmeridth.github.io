---
title: Using Latest Version of Git on Ubuntu
date: 2012-07-11 00:00:00 -05:00
tags:
- git
- ubuntu
layout: post
---

Whenever you do

```bash
sudo apt-get install git-core
```

on Ubuntu you will only get git version 1.7.5.x. I needed 1.7.6%2B.

To do this you have to run the following commands:

```bash
sudo apt-get install software-properties-common python-software-properties
sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git-core
```

This should give you git version 1.7.11 (as of today)  
