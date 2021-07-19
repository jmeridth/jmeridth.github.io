---
title: Ubuntu Feisty Fawn and the Broadcom wireless card on a Compaq Presario C500
  Laptop
date: 2007-05-29 21:06:00 -05:00
layout: post
---

You'd start to think that I'm no longer a developer, and more of a architecture IT person now with all of the latest Linux installation posts I've had lately.  These are do to the new tricks/fixes I'm having to learn to get Ubuntu Feisty Fawn to not be so feisty.  It's still better than Vista (for AgileJoe, knowing his comments are coming)

This past weekend I had a friend ask me to come over and help with a wireless printer server.  (Side Note:  D-Link Wireless printer servers claim to be using DHCP but they lie.  They are using static IPs.  You have to set your network IP scheme to match, get access to the print server, then set it's IP scheme to match your original IP scheme, then set your scheme back.  The reason I had to set his back was because SBC/AT&T won't allow his internal IP scheme be anything but 192.168.1.x - Don't ask me.) I digress.

Anyways his Compaq Presario C500 laptop had Vista on it and it could see his printer but still couldn't print.  Same 'ol, same 'ol with there not being any Vista printer drivers ready. After an hour of looking for drivers I suggested Linux.  He had never heard of it.  I asked him if he trusted me and did he use any software that was specific to Windows.  He said yes to the first question and no to the second.

I took his laptop home and loaded Ubuntu 7.04 (Feisty Fawn).  No problems.  I copied off his photos from his My Docs folder to my USB key drive and then plugged it in and put back in his /home/<username>/photos folder after loading Ubuntu. I could not get the wireless card to work.  It detected the interface and I verified that it was in the /etc/network/interfaces file.  The wireless blue key on the main board of the laptop would not light up no matter was I tried.

I plugged in my CAT5 cable and updated the OS with the latest patches and also loaded Automatix 2.0.  Got RealPlayer and a few other software programs loaded he mentioned that he liked.

Now to the core of this post.

I tried the following fixes and they DID NOT work for me:

1\. [Ubuntu Forums Thread 405990](http://ubuntuforums.org/showthread.php?t=405990)  
2\. [Ubuntu Forums Thread 185874](http://ubuntuforums.org/showthread.php?t=185174)  


I tried the following post (all commands literally) and it WORKED great:

[Ubuntu Forums Thread 297092](http://ubuntuforums.org/showthread.php?t=297092)

Thanks to [Bmartin](http://ubuntuforums.org/member.php?u=217506) on the Ubuntu Forums for his help.

## Comments

**[jon](#46 "2007-08-04 13:22:51"):** the one that worked for you shows a dell driver for the c500 compaq notebook. the first link that you show did work for me on compaq

**[Khalil](#47 "2008-04-08 01:39:20"):** I have installed Ubuntu 7.10 (Gutsy) and am trying to run the NDISwrapper to get the wireless to work, but I am stuck on Step 3.

