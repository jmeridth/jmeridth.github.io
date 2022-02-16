---
url: /posts/no-more-password-prompts-when-issuing-sudo-commands
title: No More Password Prompts When Issuing Sudo Commands
date: 2013-02-21 00:00:00 -06:00
tags:
- ubuntu
layout: post
---

Edit the sudoers file:

```bash
sudo visudo
```

Add or edit the following line to be:

```bash
%sudo ALL=(ALL) NOPASSWD: ALL
```

This will prevent password prompts for everyone in the sudo group (%sudo) when issuing all commands (NOPASSWD: ALL)
