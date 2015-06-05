---
layout: post
title: Update: TeamCity
date: 2008/02/18 16:09:56
---


As you saw from my [last TeamCity post](http://www.lostechies.com/blogs/jason_meridth/archive/2008/01/24/jetbrains-teamcity.aspx), I was a little frustrated about the fact that I had to create an environment variable to use the NAnt runner.  A colleague, [Dru Sellers](http://geekswithblogs.net/dsellers/Default.aspx), contacted me and mentioned the Command Line Build Runner.  He understood that I don't like my build process to be dependent on anything on the server, so I should be able to deploy my source to any server (minus the website being setup in IIS - automating that process is a post for another day).

So, from the screen shot below you can see that Command Line is an option in the Build Runner drop down, just as NAnt was.  The Command executable is the path to the NAnt exe that I have in my tools folder that I have in my repository.  The Command parameters is the name of the build file.  This is not necessary because NAnt will find the build file in the current directory, but I like to be explicit. (/f:<buildfilename> or -buildfile:<buildfilename> are the same, if you are using the latter).

![image](blogs/jason_meridth/WindowsLiveWriter/c84155d26dd2_9957/image_thumb.png)

I had to bug Dru further when making this change because I couldn't get it to work.  He was patient and kind enough to help me realize that my setup in step 2 (Version control settings), were not correct.  I didn't have the correct path to my repository trunk folder. 

After having my "Homer" moment (aka brain fart):

![image](blogs/jason_meridth/WindowsLiveWriter/c84155d26dd2_9957/image_thumb_1.png)

I thanked Dru and looked forward to being more productive this weekend.  Thank you for your patience Dru.  Hope this is able to help another build coordinator (aka all developers who have side jobs) out there.

## Comments

**[Alexander Gro&#223;](#220 "2008-03-06 14:39:54"):** I also used the Command Line runner for the last couple of months because I didn't want to rely on some NAnt version being deployed on the TeamCity build agent. I've upgraded to TC 3.1 today and found that switching to the NAnt runner with the "NAnt home" property set to %system.teamcity.build.workingDir%\tools\NAnt also works and uses the NAnt version under source control. (NAnt is checked into my SVN repository under trunk/tools/NAnt/nant.exe)

