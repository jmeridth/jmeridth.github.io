---
title: git instaweb
date: 2009-09-27 00:53:00 -05:00
layout: post
---

I was reading ["Pro Git" by Scott Chacon](http://progit.org/book/ch4-6.html) and was on the section about "git instaweb". This is where you can run gitweb, a cgi script that comes with git, locally or on a server. I have successfully gotten gitweb up for my personal git repos on my remote server. I use it all the time. I was curious if I could get it working locally, for friends who prefer a visual tool to see their git logs, commits, etc. I cd into a local repo (you have to cd into the .git folder of the app to get the desired view): 
    
    
    cd /code/app/.git
    

and run the instaweb command (note: I'm on a macbook pro that already has ruby installed, hence my choice of using webrick instead of the default lighttpd): 
    
    
    git instaweb -d webrick --start
    

I tried the command without the "--start" command and it kept trying to seek a browser. I tried "-b firefox", "-b Firefox", "-b /Application/Firefox.app/MacOS/firefox-bin", etc and they all failed. I found the "--start" suggestion on [StackOverflow.com](http://stackoverflow.com/questions/1258353/running-git-instaweb-on-boot) Once I ran this command, I could see the git log, commits, diffs, etc in gitweb for my local changes. What this will do is run the daemon on port 1234 of localhost. If you open your browser of choice and go to <http://localhost:1234> then you will see gitweb for the git repository you ran the command in. 

To stop the process, just exchange "--start" with "--stop" 
    
    
    git instaweb -d webrick --stop
    

Note: I personally use "git log --graph", gitk, gitx, or other tools for this, usually. Just thought it was a good addition to my git toolset.

## Comments

**[Joe Ocampo](#448 "2009-10-09 13:07:11"):** You can simply add this to your .gitconfig [instaweb] httpd=webrick port=4000 browser=open The 'open' command is for safari. OH and to stop instaweb all you have to do is use the following command: git instaweb --stop

**[Jason Meridth](#449 "2009-10-09 13:16:37"):** @Joe Thanks.

**[duplicate mp3 finder](#450 "2009-10-30 12:53:48"):** This is very good and informative site.

