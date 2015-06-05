---
layout: post
title: When Git or SSH Protocols Blocked
date: 2014-08-26 08:47:42 UTC-05:00
category: git
---

Recently I had issues connecting to [Github][2] because of some firewall restrictions outside my control.  The firewall had outbound SSH (port 22) blocked.  My co-worker [Justin Hammond][1] found a git config option that lets you force all git commands to use `https://` (port 443) instead of `ssh://` (port 22).

```bash
git config --global url."https://".insteadOf git://
```

Worked like a charm.  Thanks Justin.  Hope this helps someone else.

NB: Don't use `--global` if you don't want this applied to all repositories.  Without it only sets for the current repository you're in.

NB: All ports but 80 and 443 were blocked.  I couldn't use 9418 (Git protocol) either

  [1]: https://github.com
  [2]: http://github.com/roaet
