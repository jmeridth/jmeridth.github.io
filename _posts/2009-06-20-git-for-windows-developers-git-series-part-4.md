---
title: Git For Windows Developers – Git Series – Part 4
date: 2009-06-20 04:15:00 -05:00
tags:
- git
layout: post
".. post_type": text
---

## ROUGH DRAFT - NOT READY FOR RELEASE OR REVIEW  

This post is on TortoiseGit.  For those that may be unaware, there is a very popular tool called TortoiseSVN that integrates with the Windows Explorer and allows a Windows User to graphically manage a Subversion repository.  Well, some developers decided to port that tool over to TortoiseGit.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_63A7C954.png)

**Note: **I personally think that it’s funny that Google Code seems to be the place this code is hosted.  Why?  Google Code only supports Subversion and Mercurial, currently.  I would assume a tool that is used for Git repository management would be stored in a Git repository.  Maybe it’s just me.  That’s why when I go to the “Source” tab on the interface above, I see that the TortoiseGit code is actually hosted at <http://repo.or.cz/w/TortoiseGit.git>.  When I click the link you will see a gitweb interface to the repository.  <http://repo.or.cz> is a public Git hosting website, kind of like http://[github.com](http://github.com).

I click on the “Downloads” tab and choose the the latest MSI file for your platform (32-bit or 64-bit).  If you don’t know, just choose the 32-bit.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_2E342891.png) 

The download begins.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_61927C9E.png)

I double-click the MSI and go through the wizard.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_62F93021.png)

I “Accept” the terms.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_0D6A82A1.png)

I make sure to choose OpenSSH for your SSH Client.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_7909DE77.png)

I choose where to install the application.  C:Program FilesTortoiseGit is the default.  I’m good with that.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_33876EFD.png)

“Ready to Install”

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_7041883E.png)

The install begins.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_7F7A81BC.png)

I click “Finish”.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_670CFF10.png)

I’m done.  Oh wait.  The next screen helps me remember why I love Windows.  A reboot is necessary so that TortoiseGit can integrate with the Windows Explorer.![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_5CDDF554.png)

Click Yes.  Be right back.

*Jeopardy Music Midi*  (j/k)

Okay, I’m back. I open Windows Explorer by clicking Windows+E on my keyboard.  I go to my code folder, C:code and notice that all my Git repository folders now have a green checkmark on them.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_507262DC.png)

I right-click the console_app, the repository we’ve been using in the past two posts.

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_2457F69C.png)

and then on the “TortoiseGit” sub-menu:

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_47AA0CA3.png)

 

Wow.  That is a lot of options.  We’re going to walk the list one by one.  I want to start with the “Settings” choice first:

SETTINGS

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_01BDFAE5.png)

When I choose “Settings” I see the window above pop-up.  I’m going to walk each of these items and explain them.

## **GENERAL**

 

# **BACK TO THE WINDOWS EXPLORER SUB-MENU**

## **PULL**

When I choose the “Pull” option from the TortoiseGit sub-menu, I get the following:
