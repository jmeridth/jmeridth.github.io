---
url: /posts/nant-list-all-targets-in-build-file
title: NAnt - list all targets in build file
date: 2007-11-07 15:06:56 -06:00
layout: post
tags:
- nant
---

For my recollection and anyone else who finds the need to list all projects for a build file:

**nant -projecthelp**

I keep forgetting this and want to centralize it for my knowledge.

Hope this helps someone else.

## Comments

**[Jimmy Bogard](#205 "2007-11-07 15:27:47"):** Also, it will separate your targets out to "Default Target", "Main Targets", and "Sub Targets". "Default Target" is obvious of course, but the other two are broken out by the "description" attribute. If a target has a description, it goes in the "Main Targets" list, otherwise, it goes in the "Sub Targets" list. I used to document all my targets with "description", but now I only do the "public" ones. XML comments are better suited for more detailed descriptions.
