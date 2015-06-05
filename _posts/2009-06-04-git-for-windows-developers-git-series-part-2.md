---
layout: post
title: Git For Windows Developers – Git Series – Part 2
date: 2009/06/04 05:49:00
---


[Git For Windows Developers - Git Series - Part 1](/blogs/jason_meridth/archive/2009/06/01/git-for-windows-developers-git-series-part-1.aspx)

[Git For Windows Developers - Git Series - Part 2   
](/blogs/jason_meridth/archive/2009/06/04/git-for-windows-developers-git-series-part-2.aspx)

[Git For Windows Developers - Git Series - Part 3](/blogs/jason_meridth/archive/2009/06/07/git-for-windows-developers-git-series-part-3.aspx)

_**_UPDATE_**: I no longer use the “git pull –squash…” workflow.  I have a Part 4 post pending.  Please read the first part of this post for Github.com knowledge, but just skim the remainder.  Thanks._

Please make sure you’ve read the [first post](/blogs/jason_meridth/archive/2009/06/01/git-for-windows-developers-git-series-part-1.aspx) and have created your SSH private and public keys.  You should also have a very basic understanding of the git init, add, commit, and log commands.  We will dive deeper on each of those.  We also visit git checkout, pull (—squash), push, remote, diff, log, mv.  I’ve done my best at making each git command that is mentioned in text to be of bold weight.  Each image, if a command is involved, has that command in big text before it.

This post is going to go over my typical workflow for work.  I’ll get as detailed as I can for this process:

  1. git pull origin master 
  2. git checkout –b user_prompt 
  3. <code>
  4. git add <filename> (as necessary) 
  5. git commit –a –m “commit message” 
  6. repeat step 3-5 as many times as necessary 
  7. git checkout master 
  8. git pull –-squash . user_prompt 
  9. git commit –a –m “add name validation and tests” 
  10. git pull origin master 
  11. git push origin master 

For this example, we’re going to create a **remote** public git repository on [Github.com](http://www.github.com).  What is [Github.com](http://github.com)?  [Github.com](http://github.com) is the most popular Git repository hosting website on the Internets (misspelled on purpose) today, in my opinion.

First, I’m going to create my [github.com](http://github.com) account.  I go to <http://www.github.com> and click the “Pricing and Setup” link:

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_314FAC3D.png)

Next, I click the “Signup” link next to the “Free!” account (Once you get comfortable, upgrading is easy):

![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_129B5303.png)

Now I need to copy my public ssh key (id_rsa.pub) that I created from the first post into the Windows clipboard, so I can paste it to the web UI on this next step.  That means opening Notepad (Windows, type notepad and choose it from the results [Vista/Windows 7] or Start->Programs->Accessories->Notepad [2000/XP

## Comments

**[Jason Meridth](#492 "2011-04-25 22:21:00"):** Terry: I use "git rebase -i" to squash my commits from my local feature branch to my local master branch, and then push. a) I need to :) b) it isn't "invalid", it is just the one I was using at the time. :) I do squash Thank you, glad this series helped.

**[gitnoob](#425 "2009-06-04 06:57:30"):** I'll eagerly wait for the tortoisegit and extensions post, because honestly I can't find myself ever wanting to all this manual and overcomplicated work, remembering a million commands and arguments.

**[Erik](#426 "2009-06-04 07:54:39"):** Great post. You should really consider compiling this series to a small eBook PDF when you're done.. Cheers and thanks for the great writing.. Erik

**[Jason Meridth](#427 "2009-06-04 13:52:00"):** @gitnoob Understandable. If anything, it will give you a greater respect for tortoisegit and the work it's doing in the background. :)

**[Jason Meridth](#428 "2009-06-04 13:52:15"):** @Erik Not a bad idea. It all depends on how many posts I do. Thank you for the compliment.

**[mo](#429 "2009-06-04 14:54:25"):** This is an awesome series, Jason! I'm glad that you're doing it all from the shell. I find it more interesting then using gui's. Keep up the great work. Thanks!

**[Jason Meridth](#430 "2009-06-04 15:06:49"):** @mo Thanks bro. I'm starting with the command line because it's what I know. I've been trying out tortoisegit the last month or so and I'll blog about that soon too.

**[Matt D.](#431 "2009-06-04 16:16:39"):** Amazing work, bro.

**[Gabriel N. Schenker](#432 "2009-06-05 04:59:22"):** awesome work Jason. I start to love git! Maybe you should note that on the very first try to connect to github with: $ git push origin master the follwing warning shows up: The authenticity of host 'github.com (65.74.177.129)' can't be established. RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48. Are you sure you want to continue connecting (yes/no)? and if I just enter yes then I have the following confirmation Warning: Permanently added 'github.com,65.74.177.129' (RSA) to the list of known hosts. and only then will the command be executed...

**[Jasdeep Singh](#433 "2009-06-05 06:56:28"):** Great job Jason. GIT really shines as a distributed version control system.

**[Niss E. Far](#434 "2009-06-05 13:00:42"):** I agree with the poster about complexity. It's 2009. Using a command-line tool for source control is just too 1980's on Windows. This is, I'm sorry to say, just lame. Tortoise does git now by the way, so hopefully, these ugly CLI utils should soon be a thing of the past.

**[Jason Meridth](#435 "2009-06-05 13:50:30"):** @Matt D Thanks. @Gabriel I'm updating the post now @Jasdeep Thanks @Niss E. Far I understand that point of view. Calling my post lame because it doesn't suit the demographic though.....I don't understand. If you'd read my post and the comments from the last post, then you'd know that I'm fully aware that tortoisegit exists and plan to do a post on it.

**[Donn](#436 "2009-06-13 03:44:48"):** Thanks for these posts Jason, they helped me walk through the steps I needed to pull an open source project and contribute. Much appreciated. Super good info. Thanks again.

**[Dan DeLeo](#437 "2009-07-08 18:02:52"):** This is pretty cool. Not a windows guy myself, but it's great to get git out as far and wide as possible, considering how awesome it is. A quick note: I haven't tried it, but it apparently is possible to use github with SSH only and run it on port 443, even through proxies. One Jeff Tchang wrote a guide on his blog: http://returnbooleantrue.blogspot.com/2009/06/using-github-through-draconian-proxies.html So users with paranoid network/firewall admins can use github with some extra work.

**[Jason Meridth](#438 "2009-07-08 18:09:00"):** @Donn np, glad it helped @Dan Thank you for the info. Those pesky Firewall admins...:)

**[Stefan N&#228;we](#439 "2009-07-09 09:56:08"):** In section "git remotes" the side note says: "git@github.com/armmer/console_app.git doesn’t look like a HTTP URL or a ssh:// protocol. What protocol is that? Um….it’s the git protocol. :) It’s optimized for this purpose. Information here. The note to take away is that it uses port 9418 by default, so if you have a paranoid firewall admin….no luck." That's not 100% correct. (BTW. There's a typo in the URL. It should read 'git@github.com:armmer/console_app.git' ) The URL "git@github.com..." does a connection using the SSH protocol and tunnels its own GIT protocol through it (i.e. it uses port 22 by default). Using the 'raw' GIT protocol (for cloning,pulling, fetching only) requires a URL like this: git://hostname/path/to/repo,git (More on the GIT URLs to be found in 'git help fetch') Good article(s) anyway. Regards, Stefan

**[Jason Meridth](#440 "2009-07-09 14:23:15"):** @Stefan That is awesome. Thank you for clarifying the GIT/SSH protocol relationships. I'm updating the post to reference your comment. Thanks for catching the typo also.

**[Adam D.](#441 "2009-08-15 00:19:48"):** git push and git pull will work with no params if you set it up correctly: git config remote.origin.url= git config remote.origin.fetch +refs/heads/*:refs/remotes/origin/* git config branch.master.remote origin git config branch.master.merge refs/heads/master set up automatic tracking for any new branches you want to put up on the remote repo: git config --global push.default tracking

**[Sam Bloomquist](#442 "2009-08-24 20:34:10"):** Thanks for a great set of tutorials. Git has been the back of my mind as something I need to learn for a while, and these few blog posts got me up to speed with the basics in a very short amount of time. Great work.

**[Jason Meridth](#443 "2009-08-24 20:48:48"):** @Sam Glad they helped

**[Terry Aney](#491 "2011-04-25 21:15:00"):** "UPDATE: I no longer use the “git pull –squash…” workflow. I have a Part 4 post pending. Please read the first part of this post for Github.com knowledge, but just skim the remainder. Thanks." a) Is Part 4 still pending? b) Does this mean that your workflow just a bit below this update statement is invalid? I'm thinking I want to make a pattern for our environment that you always squash your commits on your local repo before they are put into our 'master repo' so this seemed to be what I was interested in. Great 3 part series...I'm late to the game but enjoyed them nonetheless.

**[Terry Aney](#493 "2011-04-26 15:21:00"):** For a git noob, mind expanding that a 'bit'. Just trying to get a policy in place of generally 'cleaning up local repo' before pushing. In my example I did... git checkout -b SquashTest edit... git commit -a -m "Squash Commit 1" edit.. git commit -a -m "Squash Commit 2" ...now what? I want to make these two commits one 'Squash Feature' commit. I tried git rebase -i, but it wants more options supplied...still getting over initial learning curve and if something on git-rebase man page was supposed to click, it didn't. Thanks in advance.

**[Terry Aney](#494 "2011-04-27 01:54:00"):** Found a good noob tutorial here http://www.silverwareconsulting.com/index.cfm/2010/6/6/Using-Git-Rebase-to-Squash-Commits

