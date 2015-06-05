---
layout: post
title: Gitosis and Gitweb - Part 1 - Setup
date: 2010/05/25 02:42:00
category: git gitosis
---


I’ve had a number of people ask me where they should host their Git repositories. Of course, my default question back is, “Can the code be public or does it need to be private?”. Usually they say, “public”. Therefore, my repsonse is [Github.com](http://github.com). If they say, “private” I still say Github.  If they don't ["trust" Github](http://github.com/security), which they should - click the link, then my response is [Gitosis](http://eagain.net/gitweb/?p=gitosis.git;a=summary) and [Gitweb](http://git.wiki.kernel.org/index.php/Gitweb). This is by no means the only solution. I’m aware of other ones like Gitorious. I’ve never used Gitorious.

Back to Gitosis. My personal Gitosis server is a slice at [Slicehost.com](http://slicehost.com). You can use an Ubuntu server at home as long as you have remote access. I’ve personally only used Gitosis with an Ubuntu slice, so I don’t know if there are any quirks with other Linux distributions. After setting up a slice (after following the instructions [here](http://articles.slicehost.com/2008/11/28/ubuntu-intrepid-setup-page-1) and [here](http://articles.slicehost.com/2008/11/28/ubuntu-intrepid-setup-page-2)) I am ready to go.

Notice: This post is a combination of [scie.nti.st’s gitosis post](http://scie.nti.st/2007/11/14/hosting-git-repositories-the-easy-and-secure-way) and [Scott Chacon’s Pro Git gitosis section](http://progit.org/book/ch4-7.html). They are my de facto references. Maybe my own will be now. :)

“Enough talk. Let’s fight” ~Po, Kung Fu Panda

## Intall Git

After logging into your box, let’s install Git (if not already installed):

```bash
$ sudo apt-get install git-core
...
After this operation, 16.3MB of additional disk space will be used.
Do you want to continue [Y/n]?
```

Press enter or type ‘Y’ and press enter and git will be installed. Type the following to confirm:

```bash
~ > git --version
```

and you’ll see something like:

```bash
~ > git --version
git version 1.6.3.3
```

## Intall python-setuptools

Also install the python-setuptools because we’ll need them (gitosis is written in python):

```bash
$ apt-get install python-setuptools
...
After this operation, 1126kB of additonal disk space will be used.
Do you want to continue [Y/n]?
```

Press enter or type ‘Y’ and press enter and python-setuptools will be installed.

## Download Gitosis

We need to clone the gitosis source locally to install it:

```bash
$ mkdir src && cd src
~/src $ git clone git://eagain.net/gitosis.git
Initialized empty Git repository in /root/src/gitosis/.git/
remote: Counting objects: 614, done.
remote: Compressing objects: 100% (183/183), done.
remote: Total 614 (delta 434), reused 594 (delta 422)
Receiving objects: 100% (614/614), 93.82 KiB, done.
Resolving deltas: 100% (434/434), done.
```

## Install Gitosis

Now let’s install it:

```bash
~/src $ cd gitosis
~/src/gitosis $ python setup.py install
```

[Result of Installation](https://gist.github.com/jmeridth/352769)

Gitosis is now installed. Next steps are to create git user and handle a file permission on a git hook.

## Create Git User

```bash
sudo adduser \
    --system \
    --shell /bin/bash \
    --gecos 'git version control' \
    --group \
    --disabled-password \
    --home /home/git \
    git
```

You’ll see something like the following if it is successful

```bash
Adding system user 'git' (UID 103) ...
Adding new group 'git' (GID 105) ...
Adding new user 'git' (UID 103) with group 'git' ...
Creating home directory '/home/git' ...
```

## Use local, public ssh key

You need to initially use your public ssh key (id_rsa.pub). If you have one, it will be at $HOME/.ssh/id_rsa.pub and if you have never generated one, you can do so by running the following command (accept the default location and you don’t need to enter a passphrase when prompted):

```bash
ssh-keygen -t rsa
```

Now you need to upload it to the server/slice. I usually use the scp (secure copy command):

```bash
scp $HOME/.ssh/id_rsa.pub user@123.123.123.123:/tmp/
```

This will upload the local id_rsa.pub file to the /tmp/ folder on the server. Why there? So that the git user can use it. How is that possible? The folder has permissions of 777 (drwxrwxrwt) meaning everyone has read and write access to it.

### Sidenote: SSH Port

If you have your sshd daemon running on a different port other than 22 (which is the default, but I highly suggest changing), then you need to use scp like this:

```bash
scp -P 12345 $HOME/.ssh/id_rsa.pub user@123.123.123.123:/tmp/
```

I believe the “-P” option must be capitalized.

## Initialize gitosis-admin repository

On the server, issue the following command to set your public ssh key as the first authorized key of a new gitosis-admin repository:

```bash
sudo -H -u git gitosis-init < /tmp/id_rsa.pub
```

You will see something like the following:

```bash
~ $ sudo -H -u git gitosis-init < /tmp/id_rsa.pub
Initialized empty Git repository in /home/git/repositories/gitosis-admin.git/
Reinitialized existing Git repository in /home/git/repositories/gitosis-admin.git/
```

This means it was successful.

Take note: If you put your id_rsa.pub file in a different location you need to use that instead of /tmp/id_rsa.pub

## Change Permissions on post-update hook

You have to set the permissions on the post-update git hook of the gitosis-admin repository so that gitosis-admin can add new repository structures when they are added/removed to/from the gitosis.conf file.

```bash
sudo chmod 7555 /home/git/repositories/gitosis-admin.git/hooks/post-update
```

Note: _First round of this post, I didn’t make this change. When I added a new project, it failed because this hook didn’t have the right permissions._

## Clone gitosis-admin repository

Now we’re going to use Git to administrate this gitosis instance. I think that is pretty ingenius. Let’s clone the gitosis-admin repository locally:

```bash
~ > git clone git@YOUR_SERVER_HOSTNAME:gitosis-admin.git
Initialized empty Git repository in /Users/user/gitosis-admin/.git/
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (4/4), done.
Receiving objects: 100% (5/5), done.
Resolving deltas: 100% (1/1), done.
remote: Total 5 (delta 1), reused 5 (delta 1)
~ > cd gitosis-admin
```

We are now in the gitosis-admin repository folder locally

### Two most common errors

**FIRST ONE:**

```bash
~ > git clone git@YOUR_SERVER_HOSTNAME:gitosis-admin.git
Initialzed empty Git repository in /Users/user/gitosis-admin/.git/
ssh: connect to host YOUR_SERVER_HOSTNAME port 22: Connection refused
fatal: The remote end hung up unexpectedly
```

it is because you have used a port for SSH other than port 22 (the default). To fix this, you need to edit your .ssh/config file and add the following:

```bash
Host YOUR_SERVER_HOSTNAME
Port YOUR_PORT
```

Of course, you need to put in your server hostname and port number (i.e., mydomain.com and 12345)

**SECOND ONE:**

```bash
~ > git clone git@YOUR_SERVER_HOSTNAME:gitosis-admin.git
Initialzed empty Git repository in /Users/user/gitosis-admin/.git/
Permission denied (publickey).
fatal: The remote end hung up unexpectedly
```

This has usually hit me because I locked down my /etc/ssh/sshd_config file to only allow in certain users or groups. I have to change the AllowUsers line in my file from:

```bash
AllowUsers jmeridth
```

to

```bash
AllowUsers jmeridth git
```

Once I restart the ssh daemon:

```bash
~ > sudo /etc/init.d/ssh restart
```

Now the git user has access to reach my server/slice via ssh.

### The local gitosis-admin repository

You now have a local clone of the gitosis-admin repository. The contents are only a conf file and key directory:

```bash
~/gitosis-admin(master) > ls
total 8
-rw-r--r-- 1 user staff  1148 May 22 21:31 gitosis.conf
drwxr-xr-x 3 user staff  1028 May 22 21:31 keydir
```

Next Park: [Gitosis and Gitweb Part 2](/posts/gitosis-and-gitweb-part-2)
