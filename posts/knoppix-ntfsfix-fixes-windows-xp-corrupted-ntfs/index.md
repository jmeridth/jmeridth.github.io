.. title: Knoppix ntfsfix fixes Windows XP corrupted NTFS
.. link: http://lostechies.com/jasonmeridth/2007/05/29/knoppix-ntfsfix-fixes-windows-xp-corrupted-ntfs/
.. description: 
.. date: 2007/05/29 20:33:00
.. slug: knoppix-ntfsfix-fixes-windows-xp-corrupted-ntfs
.. type: text


Interested information from another Linux board:

_"Anyways, a couple of days ago I had a major hard drive crash that corrupted  
all my NTFS volumes. XP refused to boot, no safe mode, the recovery console  
wouldn't start, nothing. I was able to boot with the CD and navigate to my  
FAT32 volume (whoever said NTFS was more reliable than FAT32 was smokin'  
something). But unfortunately GHOST would hang at the start up screen.  
Apparently GHOST was just as unhappy with my corrupted NTFS vols as XP!  
So, I whipped out my Knoppix LiveCD (which happily mounted all the "corrupt"  
NTFS volumes. Sometimes I wonder why I still use Windows...) and did a  
ntfsfix on all the drive volumes (except the FAT32 obviously). Miraculously,  
that did the trick. XP booted up, performed all the chkdsk for each NTFS vol  
and everything looks normal."_

## Comments

**[William](#42 "2007-08-16 14:47:12"):** Yeah. Same happened to me.

**[Gaz Murphy](#43 "2008-01-14 16:22:12"):** Well Guys, I'll be running ntfsfix on a laptop in the morning, I hope it works for me as well. Got some user data to retrieve...

**[Mike](#44 "2008-05-02 23:40:11"):** Well ... ntfsfix worked for me, too. I thought it was a bad disk. Win2K said it couldn't find the boot volume. I booted with the knoppix cd to see whether the machine was fried. Came up fine, so I decided to mount the windoze partition. Couldn't, but suggested running ntfsfix. Then, I could mount it. So, I rebooted into Win2K. It ran a check and booted fine. I'm still amazed!

**[T](#45 "2008-08-02 13:48:55"):** linux saved my a$$ on more than one occasions :p It works ! and no catch :D

