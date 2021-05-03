---
title: Ubuntu 8.04, VirtualBox, and USB support
date: 2008-04-27 15:42:00 -05:00
---

_**UPDATE**: Make sure your user account is a member of the vboxusers account.  VirtualBox will not start and the error will tell you this, but just want to be explicit.  You will have to logout and log back in._  

I recently upgraded my Ubuntu to the latest version, as mentioned in a previous post.  I'm very excited about it, due to greater support for hardware items that I've had to fight battles with (one of the many reasons people won't make the switch to Linux).  I upgraded to Hardy Heron and then upgraded VirtualBox when prompted.  It was a fatal hardware recognition mistake.  As soon as I booted back up after a restart, I didn't have sound, wireless, etc.

After just not being in the mood of going down the road of trying to get the hardware re-recognized, I reloaded and di my research on the virtualbox upgrade.  It seems to be a known issue on the ubuntuforms.

I looked through the forums and got educated on a few things about the ose (open source edition) versions of VirtualBox.

1. no usb support (I will update if I'm proved wrong).
1. the new ose kernel modules hose toshiba satellite hardware detection (at least on my laptop).

To get the gutsy non-ose version of Virtual Box, add this repository to /etc/apt/sources.list:  

```bash
deb http://www.virtualbox.org/debian gutsy non-free
```
  
then in a terminal:

```bash
apt-get update  
apt-get install virtualbox   
```

if you get a host key issue, the do the following:

go get the public key.. go to this website and it'll have the key there just right click anywhere in the page and go to save page as then save it to your home directory preferably.  
  
[http://www.virtualbox.org/debian/innotek.asc]
  
Now to add that key run...  

```bash
apt-key add innotek.asc  
apt-get update  
apt-get install virtualbox
```

This will give you the gutsy version that I've worked with and have had no problems with.  The bonus is that you get USB support.

I will get back to code posts next.  Just want to share the knowledge with other Linux users.

## Comments

**[JLangbridge](#238 "2008-04-28 13:06:51"):** Works great! I still had a slight problem afterwards, I needed to add myself to the usbfs group, etc, but that is easily done. Many thanks!

**[Dan Delaney](#239 "2008-04-30 20:09:56"):** Odd. I did this. It installed fine. It runs. But then when I bring up the settings for my virtual machine I get this: Could not load the Host USB Proxy Service (VERR_FILE_NOT_FOUND)

**[Jason Meridth](#240 "2008-04-30 21:50:52"):** @Dan Look here: [http://paulsiu.wordpress.com/2007/11/20/tips-on-running-innotek-virtualbox/] It looks like you just need to edit the /etc/init.d/mountdevsubfs.sh file by uncommenting the commented lines. You also have to grant some permissions shown in the post. I didn't have this issue, but it seems to be related to the same thing that JLangbridge had. Thanks.

**[taurusx5](#241 "2008-05-01 18:13:17"):** Presently, i have virtualbox installed on my ubuntu 7.10. however, i want to uprade to 8.04. will upgrading to 8.04 adversely affect my virtualbox? will upgrading also affect my opera broswer already installed also?

**[Jason Meridth](#242 "2008-05-02 03:41:43"):** @taurusx5 when prompted to upgrade your virtualbox install during upgrade, say NO. I don't know about Opera. I'm a Firefox guy. I'm enjoying the Firefox 3 Beta 5 install that is default with 8.04. If you do decide to upgrade, please let me know about Opera.

**[taurusx5](#243 "2008-05-10 14:19:08"):** jason, thanks for the comment. however, one thing i didn't tell you is that i have the closed source edition of virtualbox. i therefore have 3 questions for you: 1) will upgrading to 8.04 affect my closed source edition of virtualbox in any way? 2) will upgrading to 8.04 affect USB support in virtualbox? 3) will upgrading to 8.04 affect the user group?

**[taurusx5](#244 "2008-05-11 16:17:45"):** Jason, one more question that I forgot to ask was, will upgrading to 8.04 affect guest additions in virtualbox cse. And please disregard question #3 of my previous post. Thanks.

**[Jason Meridth](#245 "2008-05-11 17:44:54"):** @taurusx5 You ask excellent questions. My current answer is "I don't know". I am researching now. Keep'em coming.

**[taurusx5](#246 "2008-05-15 21:23:41"):** hi, jason. hope that you can soon answer my questions regarding my virtualbox cse. i'm really desperate about upgrading to the latest 8.04, but of course, my concern for virtualbox stability after upgrade takes precedence. hope you understand... thanks!

**[Jason Meridth](#247 "2008-05-19 20:58:06"):** @taurusx5 i followed gusman21's response to your post on ubuntuforms [http://ubuntuforums.org/showthread.php?p=4971770] and it worked for me. Hope this helps. Sorry for the delay, I've been under the weather.

**[taurusx5](#248 "2008-05-22 00:28:48"):** Jason, thanks for the info... I will be upgrading to 8.04 soon and I will modify code for USB access thereafter. Thanks man!

**[ryba](#249 "2008-06-27 20:44:12"):** jesli ktos bedzie mial problem z virtualboxem i postawieniem na nim windowsa to chetnie pomoge, moj gg 8009121,a jesli chodzi o sam system to w moim przypadku byl to najlepszy wybor jakiego dokonalem,ubuntu posiada wszystko co jest potrzebne a jesli nie dziala to po VB mozna otworzyc badz w WINE,bardzopolacam kazdemu kto ma dosc ciaglych problemow z windowsem i szukania seriali do programow hehe,ubunto oferuje to samo i w pelni legalnie.

**[Jason Meridth](#250 "2008-06-27 21:04:39"):** @ryba I apologize. I'm not able to translate. Through quick research, this seems to be Hungarian? If you can translate to English, I'll respond to any questions or concerns. I do see WINE and VB mentioned. I've use WINE to run games on my Linux boxes.

**[taurusx5](#251 "2008-07-09 03:07:02"):** Hi, Jason! It's been a while! Hope you remember me as the guy who was skeptical about upgrading to ubuntu 8.04 in relation to virtualbox - I still got cold feet so I'm staying with 7.10.... Anyway, I got a question for you... I downloaded a folder icon with a .png extension and I want to make that my default folder icon throughout my ubuntu 7.10. What must I do for that? Also, I want to do the same thing to tar files - I want to change the icon for tar.bz2 and tar.gz files throughtout my system. What must I do?

**[Jason Meridth](#252 "2008-07-09 05:24:42"):** @taurusx5 welcome back. check this out: [https://answers.launchpad.net/ubuntu/+question/38588] It worked for me. Hadn't thought about doing this, but definitely good to know. Hope it helps. If it doesn't work, please let me know.

**[taurusx5](#253 "2008-07-10 00:06:19"):** Jason, actually, the post you provided was started by me. Ha ha... That's ok. One of the repliers on it had recommended that I open up nautilus and then substitute the icon in usr/share/icons. But, he cautions that the icon must be the same size as the icon I'm substituting. I see many folders in there and in particular, there are folders denoted with 22x22, 24x24, 32x32, etc. Which would be the right one? I don't want to mess up my system if something should go wrong. Thanks, Jason!

**[Jason Meridth](#254 "2008-07-10 02:20:40"):** LOL. Now that's funny. I'll play with it a bit, I'm willing to crash mine :) I like to learn, everything important is on my Gutsy Server. Wife is 8 1/2 months pregnant, so give me a little bit of time on this one, please.

**[taurusx5](#255 "2008-07-11 21:46:21"):** Hey, Jason. Actually, I went ahead and installed an icon theme. This was getting frustrating for me. And, sorry about giving you a headache over my little icon issue. However, I got a question regarding this. How can I change icons for files like, doc, mp3, zip, mov, openoffice files, etc. I just don't want to simply change an individual icon on my desktop. I want to make changes globally. Must must I do? And thanks so much so far for all your needed help!

**[Jason Meridth](#256 "2008-07-17 12:19:39"):** @taurusx5 I'm sorry for the delay. I started my new job this week and my wife is about to have our baby. I'll try to get you an answer ASAP. Thanks for understanding.

**[phoenix101](#257 "2008-07-20 12:36:14"):** sir i have tried the step "apt-get update" unfortunately i got the message W: Failed to fetch [http://www.virtualbox.org/debian/dists/gutsy/non-free/binary-i386/Packages.gz] 403 Forbidden E: Some index files failed to download, they have been ignored, or old ones used instead. could you help me on this i kind of new to ubuntu and linux

**[Jason Meridth](#258 "2008-07-20 17:56:35"):** @phoenix101 first thing you need to try is prefix the apt-get command with the sudo command sudo apt-get update this allows you to temporarily run the apt-get command with root permissions. let me know if you get the same error

**[taurusx5](#259 "2008-07-23 13:12:56"):** Hi, Jason! Hope you and the wife are doing well. I got a question. My Ubuntu 7.10 has been running slow lately. I've deleted stuff in my trash but it's still running slow. Are there any management tools I can download to make Ubuntu run more efficiently and faster? Sort of like, XP's defragmentor? Also, I checked my CPU usage and found that the plugin for Opera is running 80% of my CPU usage. Any ideas?

**[taurusx5](#260 "2008-07-29 22:14:58"):** Hi Jason! Oh WOW, Jason... I really need your help now!!! I know you and the misses are expecting a child soon so I don't mean to disrupt that, but when you have time, please help me with this problem! OK, I was having a problem booting up my computer. I'd get an error stating: "The computer clock appears to be wrong. The session might encounter issues if the computer clock is not properly configured. Please consider adjusting it. Curredate is 01/01/1988." It was then suggested that I replace the CMOS battery with a new one, chich I did. I then entered 'date' and 'hwclock' in terminal to see if the system is in sync. Obviously, they're not according to the output below. x@xx:date Tue Jul 29 19:45:34 EDT 2008 x@xx:~$ hwclock Thu 31 Dec 1987 07:46:26 PM EST -0.606672 seconds This is driving me crazy! Jason, I know you're busy with your family, but I wish you could help me with this one. I'm lost!!!! Thanks, Jason!

**[Jason Meridth](#261 "2008-07-29 22:38:07"):** Have you set the hardware time in the BIOS? Usually pressing delete or F2 at boot of the PC. Stupid question, I know. I'll look into this later. I apologize, we had our baby boy on Friday. [http://www.bishopmeridth.com]

**[taurusx5](#262 "2008-07-30 07:05:02"):** Jason, your tip saved me!!! Thanks a million, bro! You saved my ass.... And, congrats on the new baby! Take care!!!

**[taurusx5](#263 "2008-08-04 21:33:27"):** Hey, Jason, what's up? I got a small problem I hope you can help me with. I recently upgraded to 8.04 and I can't install an icon theme that I actually installed under 7.10. Many users have complained about this also. Do you know of a way to install this and similar icon themes on 8.04? Thanks.

**[taurusx5](#264 "2008-09-03 20:46:23"):** Hi, Jason. Quick question for you... How do I turn services off in sysv-rc-conf so that the services don't boot up? I see the runlevels but I don't know whether or not I should uncheck all the runlevels. Please let me know. Thanks.

**[Jason Meridth](#265 "2008-09-04 01:27:37"):** @taurusx5 it looks like marcobra answered your question on the Ubuntu Launchpad site [https://answers.launchpad.net/ubuntu/+source/sysv-rc-conf/+question/43912] I have no experience with this and will be reading/trying it out. Sorry I couldn't help.

**[taurusx5](#266 "2008-09-08 09:57:50"):** Jason, thanks for the reply. I got a small issue I hope you can help me with. My ubuntu 8.04 is slow. Whenever I open up docs or pdfs in openoffice writer or pdf reader, respectively, the scrolling is very slow. It was suggested by some that it has to do with reconfiguring my xserver since I'm using generic drivers. Reconfiguring drivers specific to my video card would fix it. My question is, how do I reconfigure my xserver properly without putting my system at risk? Should I download these drivers? If so, which ones? Thanks, dude! .

**[XWIN](#267 "2008-09-19 14:29:54"):** Jason, I'm running WinXP as a host, and 8.04 as a guest (Vbox 2.0.2). I'm unable to get the guest 8.04 USB to work. I set both checkmarks on the VirtualBox settings GUI, for the 8.04 VM. I've tried several other methods from blogs, but no success. Most people appear to run Ubuntu as the host, so I am having trouble finding the information for my host/guest configuration. Typically people blog, do this to fix USB, but which one is host/guest? Regards, Ray

**[Jason Meridth](#268 "2008-09-19 14:40:53"):** @XWIN in my case Ubuntu is my host and windows in my guest
