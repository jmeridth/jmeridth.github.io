---
url: /posts/gitosis-and-gitweb-part-2
title: Gitosis and Gitweb - Part 2 - Add Projects and Contributors
date: 2010-05-25 03:02:00 -05:00
tags:
- git
- gitosis
layout: post
---

[Gitosis and Gitweb – Part 1](/posts/gitosis-and-gitweb-part-1)

So we are setup now thanks to Part 1.

## Gitosis repository contents

If we issue the “find .” command locally inside the gitosis-admin directory we will see the following:

```bash
~/gitosis-admin(master) > find .
<a bunch of files from .git folder)
./gitosis.conf
./keydir
./keydir/user@local.pub
```

We have the .git folder, a gitosis.conf file, and a keydir with a pub key file.

## Add our first project

Our project name for this example is lostechies. If you view the gitosis-admin.conf file you will see the initial content like so:

```bash
~/gitosis-admin(master) > cat gitosis.conf
[gitosis]

[group gitosis-admin]
writable = gitosis-admin
members = user@local
```

This is the result of the following command from the last part:

```bash
sudo -H -u git gitosis-init < /tmp/id_rsa.pub
```

That command puts the public ssh key into the keydirs directory and adds the associated username from the file to be the first member of the gisotis-admin project. Hence seeing user@local as the member. It matches the filename of the pub file in the keydir directory (user@local.pub). That’s how gitosis relates members listed in the conf file to the keys in the keydir directory, filename minus the pub extension.

Let’s edit this conf file to include our lostechies project:

```bash
~/gitosis-admin(master) > cat gitosis.conf
[gitosis]

[group gitosis-admin]
writable = gitosis-admin
memebers = user@local

[group meridth]
writable = meridth
members = user@local
```

It looks exactly like the gitosis-admin one. Now we commit it just like we would normally when using Git. We can add, then commit or commit with the -am argument. This is possible since the gitosis-admin.conf file is already tracked by the repository.

```bash
~/gitosis-admin(master) > git commit -am "add meridth project"
[master 6b7a5da] add meridth project
1 file changed, 3 insertions(+), 0 deletions(-)
```

and push it to the remote gitosis-admin repository:

```bash
~/gitosis-admin(master) > git push
Counting objects: 5, done.
Delta compression using up to 2 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 385 bytes, done.
Total 3 (delta 0), reused 0 (delta 0)
To git@YOUR_SERVER_HOSTNAME:gitosis-admin.git
   23842e9..6b7a5da master -> master
```

We need to create the lostechies repository locally, add an initial item (README in this case), and push it remotely. Gitosis won’t create the repository until something it pushed to it.

```bash
START HERE
```

The lostechies repository now exists remotely. Currently my account is the only that has access. Let’s add another contributor.

## Add our first contributors

Say I want to allow my friend Joe to have commit (writable) access to my lostechies repository and I want my friend Ryan to only have readonly access. I tell them to send me their public ssh keys. I make sure the files are named joe.pub and ryan.pub. I then put them into my local gitosis-admin repository’s keydir directory and then I edit the gitosis.conf file to be:

```bash
~/gitosis-admin(master) > cp ~/joe.pub keydir/ && cp ~/ryan.pub keydir/
~/gitosis-admin(master) > vim gitosis.conf
[gitosis]

[group gitosis-admin]
writable = gitosis-admin
members = user@local

[group lostechies]
writable = lostechies
members = user@local joe

[group lostechies_ro]
readonly = lostechies
members = ryan
```

Notice that I had to create a whole new group (lostechies_ro) to setup Ryan’s readonly access. You can’t combine readonly and writable permissions in gitosis (wish we could – open source contribution there?).

Now I need to “git add” the new keys, and commit the changes to the conf file. Finally I push the changes.

```bash
~/gitosis-admin(master) > git add keydir/joe.pub keydir/ryan.pub
~/gitosis-admin(master) > git commit -am "add joe and ryan and give them access to lostechies repository"
[master 3fb193c] add joe and ryan and give them access to lostechies repository
 3 files changed, 6 insertions(+), 1 deletions(-)
 create mode 100644 keydir/joe.pub
 create mode 100644 keydir/ryan.pub
~/gitosis-admin(master) > git push
Counting objects: 7, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 470 bytes, done.
Total 4 (delta 1), reused 0 (delta 0)
To git@YOUR_SERVER_HOSTNAME: gitosis-admin.git
   20148cf..efb193c master -> master
```

Now Joe or Ryan can clone this repository:

```bash
git clone git@YOUR_SERVER_HOSTNAME:lostechies.git
```

_**NOTE:**_ Again, if they receive the following error:

```bash
~ > git clone git@YOUR_SERVER_HOSTNAME:gitosis-admin.git
Initialized empty Git repository in /Users/user/gitosis-admin/.git/
ssh: connect to host YOUR_SERVER_HOSTNAME port 22: Connection refused
fatal: The remote end hung up unexpectedly
```

The solution, involving the .ssh/config file is in the first post in this series.

That is how you create a repository and add users.

## DEBUG

If you are unable to connect you have the option of editing the gitosis.conf file with more message verbosity by adding “loglevel=DEBUG” at the top of the conf file:

```bash
~/gitosis-admin(master) > vim gitosis.conf
[gitosis]
loglevel=DEBUG
...
```

This will give you more information on the ouput when trying to push to the remote repository.

## Can’t push changes

As Scott Chacon states in his gitosis section of [Pro Git](http://progit.org/book/ch4-7.html):

> “If you’ve lost push access by pushing a messed-up configuration, you can manually fix the file on the server under /home/git/.gitosis.conf — the file from which Gitosis reads its info. A push to the project takes the gitosis.conf file you just pushed up and sticks it there. If you edit that file manually, it remains like that until the next successful push to the gitosis-admin project.”

The .gitosis.conf file in the git user’s home directory is a symlink to the actual conf file in the gitosis-admin repository:

```bash
lrwxrwxrwx 1 git  git  53 May 22 20:32 .gitosis.conf -> /home/git/repositories/gitosis-admin.git/gitosis.conf
```

Next Part: [Gitosis and Gitweb Part 3](/posts/gitosis-and-gitweb-part-3)

## Comments

**[Gabriel N. Schenker](#478 "2010-05-25 12:51:54"):** your post come in handy; just at the right time! Very nicely done, thanks

**[colvertlyn](#479 "2010-07-24 22:06:27"):** permafrost expected action cover [million per absolute broadly](http://gravity.wikia.com) [url=<http://www.skyandtelescope.com>]emission small glacial observational[/url] <http://www.nal.usda.gov>

**[salfordwil](#480 "2010-07-24 22:06:47"):** volunteer physical llc

**[ashlynnega](#481 "2010-08-21 08:53:11"):** increased link [rise sectors windows past](http://www.unesco.org) [url=<http://water.usgs.gov>]videos comment president android[/url] <http://www.newswire.ca>

**[garrmankor](#482 "2010-08-21 08:53:28"):** economy regions hypothesis special

**[Mullins](#496 "2011-05-12 10:24:00"):** After creating the losttechies repository locally I needed to create the remote 'origin' by executing: $ git remote add origin git@MYSERVER.com:losttechies.git
