---
title: Testing Mail From the Command Line on Ubuntu
date: 2012-09-19 00:00:00 -05:00
tags:
- command line
- ubuntu
layout: post
---

Install mailutils

```bash
sudo apt-get install mailutils
```

Send some test piped into the mail command

```bash
echo "testing" | mail -s Test user@emailhost.com
```

Check the email address listed above
