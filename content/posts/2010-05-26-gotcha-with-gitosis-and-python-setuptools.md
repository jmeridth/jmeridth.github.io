---
title: Gotcha with Gitosis and python-setuptools
date: 2010-05-26 04:58:00 -05:00
tags:
- git
- gitosis
---

Today I decided to upgrade my slicehost slice from Intrepid Ibex to Lucid Lynx (Intrepid → Jaunty → Karmic → Lucid). Yeah, yeah, I’m a little behind. Anyways, It upgraded just fine. However when I was trying to push code to my gitosis instance (which I installed over a year ago), I got the following stack trace:

```bash
~/code/gitosis-admin(master) > git pull origin master
/usr/bin/gitosis-serve:5: UserWarning: Unbuild egg for setuptools [unknown version] (/usr/lib/python2.6)
  from pkg_resources import load_entry_point
Traceback (most recent call last):
  File "/usr/bin/gitosis-serve", line 5, in <module>
    from pkg_resources import load_entry_point
  File "/usr/lib/python2.6/dist-packages/pkg_resources.py", line 2655, in <module>
    working_set.require(__requires__)
  File "/usr/lib/python2.6/dist-packages/pkg_resources.py", line 648, in <module>
    needed = self.resolve(parse_requirements(requirements))
  File "/usr/lib/python2.6/dist-packages/pkg_resources.py", line 546, in <module>
    raise DistributionNotFound(req)
pkg_resources.DistributionNotFound: gitosis==0.2
fatal: The remote end hung up unexpectedly
```

This told me that I had been using python-setuptools for python 2.5. A little googling and praying that I wouldn’t have to roll back to the snapshot I took before I started the upgrade (Thank God!), I found the solution. I went onto the gitosis slice, cloned the gitosis repository:

`git clone git://eagain.net/gitosis`

and then ran the setup again:

```bash
~ > cd gitosis
~ gitosis/ > sudo python setup.py install
```

and it fixed the issue. Did I mention how much I love google. Hope this helps someone else.
