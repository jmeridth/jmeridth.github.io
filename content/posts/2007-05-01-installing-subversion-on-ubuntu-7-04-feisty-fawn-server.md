---
url: /posts/installing-subversion-on-ubuntu-7-04-feisty-fawn-server
title: Installing Subversion on Ubuntu 7.04 (Feisty Fawn) Server
date: 2007-05-01 23:53:00 -05:00
layout: post
---

This article covers installing subversion with the apache module so that it can be easily accessed from other systems on a public network.  The next post will show how to set this up with svn+ssh, which is considered more secure.
To install subversion, open a terminal and run the following command:

sudo apt-get install subversion libapache2-svn

We're going to create the subversion repository in /svn, although you should choose a location that has a good amount of space.

sudo svnadmin create /home/svn

Next we'll need to edit the configuration file for the subversion webdav module. You can use a different editor if you'd like.

sudo vim /etc/apache2/mods-enabled/dav_svn.conf

The Location element in the configuration file dictates the root directory where subversion will be accessible from, for instance: <http://www.server.com/svn>

<Location /home/svn>

The DAV line needs to be uncommented to enable the dav module

# Uncomment this to enable the repository
DAV svn

The SVNPath line should be set to the same place your created the repository with the svnadmin command.

# Set this to the path to your repository
SVNPath /home/svn

The next section will let you turn on authentication. This is just basic authentication, so don't consider it extremely secure. The password file will be located where the AuthUserFile setting sets it to

# Uncomment the following 3 lines to enable Basic Authentication
AuthType Basic
AuthName "Subversion Repository"
AuthUserFile /etc/apache2/dav_svn.passwd

To create a user on the repository use, the following command:

sudo htpasswd2 -cm /etc/apache2/dav_svn.passwd <username>

**UPDATE: If using newer version of apache-utils, use the following (Thanks Ian - comment below)**

sudo htpasswd -cm /etc/apache2/dav_svn.passwd <username>

Note that you should only use the -c option the FIRST time that you create a user. After that you will only want to use the -m option, which specifies MD5 encryption of the password, but doesn't recreate the file.

Restart apache by running the following command:

sudo /etc/init.d/apache2 restart

Now if you go in your browser to <http://www.server.com/svn>, you should see that the repository is enabled for anonymous read access, but commit access will require a username.
![](http://www.edreaminghome.com/view_image.php?file_id=317&size=400)

If you want to force all users to authenticate even for read access, add the following line right below the AuthUserFile line from above. Restart apache after changing this line.

**_Require valid-user_**

Now if you refresh your browser, you'll be prompted for your credentials.
Welcome to the stability of Linux.
Welcome to the best source control system out there.

## Comments

**[maarten](#12 "2007-05-08 09:21:42"):** Thanks for the information! An extra hint: don't forget to uncomment the closing tag  at the end of the file /etc/apache2/mods-enabled/dav_svn.conf that corresponds to the opening tag

**[Nexact](#13 "2007-05-11 20:49:31"):** Great Howto.

**[poroimes](#14 "2007-05-15 12:55:11"):** And if you want to access your repository from <http://www.server.com/svn>, change "" => ""

**[poromies](#15 "2007-05-15 13:21:45"):** I noticed one more thing... If you want your repository to be authenticated remember to uncomment following lines from /etc/apache2/mods-enabled/dav_svn.conf too  Require valid-user

**[jmeridth](#16 "2007-05-15 13:31:14"):** Thanks for the input everyone. I don't claim to be an expert. All input is welcome.

**[Shahryar Ghazi](#17 "2007-06-27 17:05:09"):** is accessing the repository through dav secure??

**[Ian](#18 "2007-08-19 14:57:40"):** Just to clarify - the line sudo htpasswd2 -cm /etc/apache2/dav_svn.passwd  should be sudo htpasswd -cm /etc/apache2/dav_svn.passwd  in newer versions of apache2-utils

**[UWeyeguy](#19 "2007-09-17 14:35:05"):** All I get is: Revision 0: / Powered by Subversion version 1.4.3 (r23084).

**[Russ](#20 "2007-09-21 02:05:08"):** Me too. All I'm getting is Revision 0: / Powered by Subversion version 1.4.3 (r23084).

**[Jason Meridth](#21 "2007-09-21 10:23:27"):** Hopefully you were prompted for security (username/password). If not, please check your security setup again. Usually when you see that it means your subversion install was complete. Now start using the subversion command line operations to interact with your repsitory. Look here for more operations information: <http://svnbook.red-bean.com/en/1.1/ch09.html> The excellent resource out there: <http://svnbook.red-bean.com/>

**[Sean Chambers](#22 "2007-09-21 14:10:49"):** Here's another link that has some more information on setting up Trac for project management on Ubuntu and some other stuff. <http://ariejan.net/2006/12/01/how-to-setup-a-ubuntu-development-server-part-1/> Good post Jason! I actually am running subversion at work on a VMWare Ubuntu server. At home I have a stand alone box that is running it with a self-signed SSL certificate because I can access it over the web

**[Sean Chambers](#23 "2007-09-21 15:08:26"):** Whoops! Wrong link. the one about Trac is part two: <http://ariejan.net/2006/12/02/how-to-setup-a-ubuntu-development-server-part-2/>

**[JDS](#24 "2008-02-07 17:59:46"):** If all you get is "Revision 0: /" then the thing, including Apache/WEBDAV SVN part, is working. However, there is nothing in your repository yet! A VERY IMPORTANT STEP: Immediately after creating a repository, import data into the repo. Follow the steps in the RedBean book, mentioned in other comments.
