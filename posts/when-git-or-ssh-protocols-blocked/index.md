<!-- 
.. title: When Git or SSH Protocols Blocked
.. slug: when-git-or-ssh-protocols-blocked
.. date: 2014-08-26 08:47:42 UTC-05:00
.. tags: git
.. link: 
.. description: 
.. type: text
-->

Recently I had issues connecting to [Github][2] because of some firewall restrictions outside my control.  The firewall had outbound SSH (port 22) blocked.  My co-worker [Justin Hammond][1] found a git config option that lets you force all git commands to use `https://` (port 443) instead of `git://` (port 22).

```bash
git config --global url."https://".insteadOf git://
```

Worked like a charm.  Thanks Justin.  Hope this helps someone else.

NB: Don't use `--global` if you don't want this applied to all repositories.  Without it only sets for the current repository you're in.

  [1]: https://github.com
  [2]: http://github.com/roaet