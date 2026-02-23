---
url: /posts/getting-sound-working-on-my-toshiba-laptop-with-ubuntu-7-04-feisty-fawn
title: Getting sound working on my Toshiba laptop with Ubuntu 7.04 (Feisty Fawn)
date: 2007-05-12 23:53:00 -05:00
layout: post
tags:
- ubuntu
- linux
---

The [post](http://ubuntuforums.org/showthread.php?t=392350&highlight=toshiba) here on the forums helped me solve my problems.

How to do it:

open a terminal and type:

sudo vim /etc/modprobe.d/alsa-base

Go to the bottom of the file and paste in the following line:

options snd-hda-intel model=auto

or

options snd-hda-intel model=3stack

Exit anything that might be playing sound or has to do with sound.

Back in the terminal, type

sudo rmmod snd_hda_intel

Then

sudo modprobe snd_hda_intel

Now test sound again.

This post is more of a reminder for me when I decide to finally remove my Windows partition on my laptop and reinstall Feisty on the entire hard drive.  Don't want to have to hunt this down again.

Note: To all you Linux haters who want to use this as an example of why you won't switch to Linux....one word: Vista.  How many of your peripherals didn't work after you upgraded?  Nuff said.

Don't get me wrong...Microsoft programming pays my bills, but Linux programming and usage keeps my bank account happy :)

## Comments

**[agilejoe](#25 "2007-05-14 21:35:00"):** How about explaining what the command line is doing for the newbie’s out there? That is one of the problems that Linux users have. They assume everyone that uses Linux is a command line junkie and know what every command is. Documentation is a wonderful thing when it comes to usability of an OS. My two cents.

**[jmeridth](#26 "2007-05-15 00:32:09"):** Understandable: Comand explanation: Sudo = allows a permitted user to run a command as the superuser or another user specified in the sudoers file (located at /etc/sudoers on ubuntu) Rmmod – unloads the loadable module (snd_hda_intel) from the kernel (with restriction that they are not in use and not referred to by other modules) Modprobe – attempts to load the specified module into the kernel for usage. In this case my sound module (snd_hda_intel) What the changes above is tell the kernel specifically what type of sound card I have and unload, then reload the module. Hope this answers your questions.

**[agilejoe](#27 "2007-05-15 01:08:15"):** I would rather right click on my sound card in device manager and click on update driver. Granted I have to pray it works but visually I remember what I am doing. LOL

**[jmeridth](#28 "2007-05-15 09:06:47"):** Is this before or after your asked "Allow or Deny" 50 times? LOL

**[agilejoe](#29 "2007-05-15 15:25:32"):** LOL...If I am running Vista I have to sacrifice a small child and give Ballmer my 401K. After I do that I notice the annoying affirmation messages seem to subside.

**[Aristotel](#30 "2007-05-20 05:55:34"):** Hi, I am trying to get the sound to work on Ubuntu on my Toshiba laptop also. I am following your steps but it won't let me rmmod as it says snd_hda_intel is in use. How do I make it not be in use so that I can continue with the rest of the steps? Thanks

**[Aristotel](#31 "2007-05-20 06:43:30"):** Never mind, I got over that part :) Unfortunately the sound still doesn't work :(

**[Jason Meridth](#32 "2007-05-20 08:59:15"):** A friend of mine had to upgrade his [BIOS](http://www.csd.toshiba.com/cgi-bin/tais/su/su_sc_modItemList.jsp?moid=1484716&rpn=PSPA0U&ct=DL&BV_SessionID=@@@@1392189391.1179664651@@@@&BV_EngineID=cccfaddkmjgmmdicgfkceghdgngdgmn.0) and install the new alsa drivers like mentioned in this post ([ubuntuforums.org/showthread.php](http://ubuntuforums.org/showthread.php?t=349491))

Hope this helps.

**[Fallen_Demon](#33 "2007-06-10 06:33:50"):** Thanks for this tip, I wasn't exactly sure how to reload ALSA without rebooting, but after I did the sound works fine

**[Snowhog](#34 "2007-06-11 21:29:59"):** Hmm. It would be nice if those of you who say they got this resolved - got their Intel HDA drive to work - would post HOW they did it.

**[Jason Meridth](#35 "2007-06-12 08:16:06"):** "...would post HOW they got did it" What is the post above? I've been on the forums and this post doesn't work for everyone. I thought the command-line commands above in the post qualified as HOW.

**[Dalus](#36 "2007-10-04 20:50:41"):** yea hello..i myself have a toshiba laptop........linux works fine , currently using ubuntu fiesty just a few pet peeves i have nothing reallly big , but , just conveniencies i have gotten sed to with windows. yes so onto the question.....my media buttons (play pause etc) wont work with the media players. any ideas? and also the scrolling on the corner of my touchpad is disabled or something, any help would be great thanks

**[Jason Meridth](#37 "2007-10-04 20:59:01"):** @Dalus Linux works except for sound. It is specific to certain Intel sound cards in certain Toshiba laptops. Glad yours is not one of them. :) the media player buttons and touchpad stuff is specific to your laptop. It depends on which one you have: example ubuntuforum post: <http://ubuntuforums.org/showthread.php?p=3470007> I'll email you this information also and work with you to solve the issue. I'm just posting here to help anyone else. Thanks.

**[Izac Y](#38 "2007-10-10 03:56:27"):** i'm having the same problem that aristotle managed to solve above. i am able to get up to "sudo rmmod snd_hda_intel," and then it says that the module is in use. what could be causing this? i'm not using any programs that would require sound, and i've even tried shutting down all programs in general in order to ensure success. no such luck. please help!

**[Jason Meridth](#39 "2007-10-10 10:34:27"):** Izac, I will get a formal response to you ASAP.

**[Dallas V](#40 "2007-11-03 19:48:46"):** I had trouble getting sound working with the Intel 82801G HDA controller (rev 01) on my laptop (Compaq Presario C500). I tried adding the lines to /etc/modprobe.d/alsa-base but that did not work. I finally got it working by passing "pci=routeirq" to the kernel. Here is a link to the fix. Hope it helps: <http://islandlinux.org/howto/ubuntu-7-10-sound-issue-compaq-presario-c500-laptop-resolved>
