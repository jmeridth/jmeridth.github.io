.. title: Gitosis and Gitweb - Part 2 - Add Projects and Contributors
.. link: http://lostechies.com/jasonmeridth/2010/05/25/gitosis-and-gitweb-part-2-add-projects-and-contributors/
.. description: 
.. date: 2010/05/25 03:02:00
.. slug: gitosis-and-gitweb-part-2
.. type: text
.. tags: git, gitosis


[Gitosis and Gitweb – Part 1](/blogs/jason_meridth/archive/2010/05/24/gitosis-and-gitweb-part-1-setup.aspx)

So we are setup now thanks to Part 1.

## Gitosis repository contents

If we issue the “find .” command locally inside the gitosis-admin directory we will see the following:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.11.04-PM.png)

We have the .git folder, a gitosis.conf file, and a keydir with a pub key file.

## Add our first project

Our project name for this example is lostechies. If you view the gitosis-admin.conf file you will see the initial content like so:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.11.11-PM.png)

This is the result of the following command from the last part:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.11.20-PM.png)

That command puts the public ssh key into the keydirs directory and adds the associated username from the file to be the first member of the gisotis-admin project. Hence seeing user@local as the member. It matches the filename of the pub file in the keydir directory (user@local.pub). That’s how gitosis relates members listed in the conf file to the keys in the keydir directory, filename minus the pub extension.

Let’s edit this conf file to include our lostechies project:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.11.27-PM.png)

It looks exactly like the gitosis-admin one. Now we commit it just like we would normally when using Git. We can add, then commit or commit with the -am argument. This is possible since the gitosis-admin.conf file is already tracked by the repository.

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.06-PM.png)

and push it to the remote gitosis-admin repository:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.12-PM.png)

We need to create the lostechies repository locally, add an initial item (README in this case), and push it remotely. Gitosis won’t create the repository until something it pushed to it.

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.20-PM.png)

The lostechies repository now exists remotely. Currently my account is the only that has access. Let’s add another contributor.

## Add our first contributors

Say I want to allow my friend Joe to have commit (writable) access to my lostechies repository and I want my friend Ryan to only have readonly access. I tell them to send me their public ssh keys. I make sure the files are named joe.pub and ryan.pub. I then put them into my local gitosis-admin repository’s keydir directory and then I edit the gitosis.conf file to be:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.27-PM.png)

Notice that I had to create a whole new group (lostechies_ro) to setup Ryan’s readonly access. You can’t combine readonly and writable permissions in gitosis (wish we could – open source contribution there?).

Now I need to “git add” the new keys, and commit the changes to the conf file. Finally I push the changes.

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.36-PM.png)

Now Joe or Ryan can clone this repository:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.43-PM.png)

_**NOTE:**_ Again, if they receive the following error:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.50-PM.png)

The solution, involving the .ssh/config file is in the first post in this series.

That is how you create a repository and add users.

## DEBUG

If you are unable to connect you have the option of editing the gitosis.conf file with more message verbosity by adding “loglevel=DEBUG” at the top of the conf file:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.14.58-PM.png)

This will give you more information on the ouput when trying to push to the remote repository.

## Can’t push changes

As Scott Chacon states in his gitosis section of [Pro Git](http://progit.org/book/ch4-7.html):

> “If you’ve lost push access by pushing a messed-up configuration, you can manually fix the file on the server under /home/git/.gitosis.conf — the file from which Gitosis reads its info. A push to the project takes the gitosis.conf file you just pushed up and sticks it there. If you edit that file manually, it remains like that until the next successful push to the gitosis-admin project.”

The .gitosis.conf file in the git user’s home directory is a symlink to the actual conf file in the gitosis-admin repository:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-24-at-10.15.03-PM.png)

Next Part: Gitweb

## Comments

**[Gabriel N. Schenker](#478 "2010-05-25 12:51:54"):** your post come in handy; just at the right time! Very nicely done, thanks

**[colvertlyn](#479 "2010-07-24 22:06:27"):** permafrost expected action cover [million per absolute broadly](http://gravity.wikia.com) [url=http://www.skyandtelescope.com]emission small glacial observational[/url] http://www.nal.usda.gov

**[salfordwil](#480 "2010-07-24 22:06:47"):** volunteer physical llc

**[ashlynnega](#481 "2010-08-21 08:53:11"):** increased link [rise sectors windows past](http://www.unesco.org) [url=http://water.usgs.gov]videos comment president android[/url] http://www.newswire.ca

**[garrmankor](#482 "2010-08-21 08:53:28"):** economy regions hypothesis special

**[Mullins](#496 "2011-05-12 10:24:00"):** After creating the losttechies repository locally I needed to create the remote 'origin' by executing: $ git remote add origin git@MYSERVER.com:losttechies.git

