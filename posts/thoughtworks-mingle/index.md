.. title: ThoughtWorks Mingle
.. link: http://lostechies.com/jasonmeridth/2007/11/01/thoughtworks-mingle/
.. description: 
.. date: 2007/11/01 18:40:00
.. slug: thoughtworks-mingle
.. type: text


I got excited about ThoughtWorks releasing [Mingle 1.1](http://www.lostechies.com/controlpanel/blogs/Saifuddin%20Goderya).  The software license states that it is free for the first 5 users.

I have used older version of ThoughtProcess and their new one looks sweet, but expensive.

Today however, I installed MySql (no worries) and then Mingle and as soon as the service started my server went to a hault.

 This is what I saw when I opend the task manager:

 ![ThoughtWorks Mingle](/blogs/jason_meridth/mingle_performance.GIF)  


I looked at the processes and it was the Mingle service that did it.

This might have been a bad installation on my part, but I followed their instructions to the "T".  I am still researching.

Anyone else seeing this kind of problem with Mingle?

## Comments

**[mbratton](#170 "2007-11-01 19:53:13"):** The best programs use all your CPU (this is how you know they are working their hardest)

**[schambers](#171 "2007-11-01 20:07:37"):** unfortunately I am seeing the same thing on my ubuntu server installation of mingle. it also eventually eats up all 1.5gb of memory. When I inquired on the thoughtworks forum awhile ago my thread asking about the cpu usage was deleted. I posted another thread asking about the memory and got the response, "Mingle requires 2gb of memory to run" I was taken back by this as i was the ONLY user in there at the time. Apparently it isn't a fluke either, I saw alot of other threads on their forum stating the same results. I may get blasted for this, but this seems to be ruby stretched to its limit. I dont have enough experience with RoR to make this a firm statement though. I wish it was better than this because it is an awesome management application to use. I am thinking about going back to Acunote or RallyDev. I can't afford putting up a whole server just to handle this one application. oh well

**[Jason Meridth](#172 "2007-11-01 20:22:15"):** Wow. 2GB for memory. You are correct Sean. http://studios.thoughtworks.com/mingle/1.1/help/Content/installing_mingle/system_requirements.htm Helps if I RTFM.

**[Steve Burman](#173 "2007-11-01 20:51:06"):** We have seen the memory issues here as well. We run Mingle (currently 1.0) on our main server which has 8GB of RAM. Admittedly it runs a few virtual machines but MingleServer.exe is constantly having its memory usage blow out. We are forced to periodically restart it because eventually even the most basic operations within Mingle take an intolerable amount of time to execute. We only tolerate it because Mingle is so damn nifty for project management.

**[Joe Ocampo](#174 "2007-11-01 22:26:10"):** Wow, has Microsoft affected us that bad that we think it is OK to have to reboot everyday!

**[Sean Chambers](#175 "2007-11-01 23:23:28"):** I am running mingle on an ubuntu virtual server with a dedicated 1.5gb of memory. Like you state Steve, I am forced to perodically restart the MingleServer process every now and then. I reallly hope thoughtworks addresses these issues as I would really hate to stop using it because of something silly like system requirements. I think more than anything it really disturbed me that they deleted my thread where I was posting these issues for others to see. It wasn't negative in any way, it just stated what I experienced with my resources so that they can document the problems and hopefully address the issues. I can understand not wanting negative press for a new product but this was back when it was still in beta so of course every knew there would be problems. I just came to the conclusion that they didn't want my feedback so I don't plan on providing anymore in the future.

**[Sergio Pereira](#176 "2007-11-02 10:58:28"):** Got the same problem on a mac with 2GB RAM during the beta period. It became unusable so I couldn't even decide if I liked Mingle or not.

**[Ben Scheirman](#177 "2007-11-02 17:03:03"):** You could go into Hanselmode (TM) and pull out WinDbg.exe and see what system calls it's spending its time in. That could be useful info for the Mingle team.

**[Jason Meridth](#178 "2007-11-02 17:45:42"):** @Ben: Excellent suggestion. Don't whine, present a possible solution to problem. Got it. :)

**[Adam Monago](#179 "2007-11-05 10:00:13"):** I have noticed that a number of folks on this thread had only tried a pre-release version of Mingle. I would encourage anyone who had evaluated during the early access release to give 1.1 a try and I think you will be pleasantly surprised. The CPU usage Jason mentions above is normal in the first few minutes after the installation as the system generates history and search indices for the existing templates that are shipped with the product. After a couple of minutes it actually goes down significantly. Memory usage is actually very stable with the 1.1 release, and although it does require a healthy amount of memory, that usage is quite consistent throughout. There is a correlation between the number of JRuby instances and memory usage. If you are comfortable experimenting with different memory configurations, there are some guidelines for tweaking the amount of memory allocated for Java, as well as the number of JRuby instances that can be created by Mingle in the config/web.xml file. Lastly, apologies to Sean if there has been any misunderstanding; I can see one post that he made to the forum for which there was a response. You're welcome to come back and participate at any time.

**[Bil Simser](#180 "2007-11-06 12:52:27"):** I'm experience pain and suffering with Mingle. We started with v1 and updated to 1.1. Server is slow and pegged out, MySQL is falling down, website is horrendously slow once you get more than 20 stories in a project. In short, I consider Mingle a disaster and we're looking for alternatives starting today. Planning on blogging my plight with details to come.

**[Arthur Tam](#181 "2007-11-27 19:27:33"):** I'm experiencing the same problem where within minutes of starting up Mingle half a gig of RAM will have already been used. I'm running Mingle on a virtual server with 1 GB RAM and it is really frustrating when Mingle eats up all the RAM and the virtual server starts to behave strangely. I ended up creating several cron jobs to restart the Mingle process during times it's less likely to be used. It doesn't solve my problem but it lowers the amount of times I need to manually restart my virtual server.

**[Sean Chambers](#182 "2007-11-28 00:21:48"):** I will come back and kick this horse again =) I had an interesting conversation with an Apple engineer today at lunch about RoR and I brought up Mingle. I was mainly talking about how it was a really neat project management tool and had a super cool interface but it was a HUGE hog. We both agreed that interpeted languages will only go so far. Look at Twitter for instance. Once your traffic and/or application base gets to a certain size, where is your upgrade path? You have none. throw more memory at the problem. I think Mingle is an very good example of RoR pushed to the limits. Anyways I shouldn't complain anymore. I have moved my mingle server to a dedicated box with 3gb of memory and it seems to perform much better.

**[Yan](#183 "2007-12-11 00:50:02"):** Mingle's crappy performance has nothing to do with RoR. It does not take 2 cpus and a gig of ram to change the status on a bug. The product design is just so great but I can't believe they actually let themselves get away with releasing a simple database app that requires 2 gig of ram. It's EMBARASSING thoughtworks! Embarassing, nothing less! And to add insult to injury, they obfuscate the code with their java compiling so that the community can't help fix these problems. Honestly I think mingle actually _gets it_ in terms of story and bug tracking (contextual views with drag and drop), but releasing it with such nasty performance and then trying to charge money for it? Everyone please actively post to your blog about this - thoughtworks needs to be called out. Either fix it or release it as plain RoR so we can run it on mongrel. I'm willing to bet most of the performance issues are actually coming from the jruby and java container. No RoR app takes this long to start up!

**[Sidu](#184 "2007-12-11 15:39:24"):** Start up time has always been an issue when you have to fire up a new JVM, but there is something called NailGun which can help and which is now part of JRuby (if I'm not mistaken). Also, a base MRI/Rails/Mongrel instance (with no additional code) eats 60MB of memory anyway. A quick look at Mingle's web.xml indicates that Mingle ships with with 8 JRuby runtimes/Rails instances, so it's not surprising it hogs memory. The next release of Mingle will ship with JRuby 1.1 (the latest Mingle, 1.1, uses JRuby 1.0) which should definitely improve performance.

**[Chris Hefley](#185 "2008-02-22 14:54:32"):** Just adding my voice to the outcry, hoping Thoughtworks will take notice. I absolutely love Mingle, and I want to use the hell out of it, but the performance issues are crippling. When I first start it up, it's consuming about 81MB of RAM, no big deal, but after a few minutes of usage it gets up close to 500MB, and it never drops back down. I installed it on my Build Server, and now I have to reboot it regularly, primarily because of Mingle's memory problems.

**[smortensen](#186 "2008-04-17 07:36:44"):** Yup. Mingle bites on memory and CPU. Even the full-blooded latest release just cranks your cpu and chews 500MB of ram. I'm the only guy trialling it on the virtual server and i've only a single project with bugg3r all action on it (ie only me!)... It's a ruddy joke. 500MB, PLUS my DB, PLUS the webPortal. Get a grip people. Supersize my coke for free, sure, but leave my memory at standard would ya?

**[schambers](#187 "2008-04-17 10:48:43"):** After just reviewing the latest version myself it indeed seems like they STILL have performance problems. With myself using it and noone else, it takes a full 5 seconds to open most pages. This is on a box with 2 gb of memory and a dual core 2.6ghz cpu with nothing else running on the box. crazy!!

**[Jason Meridth](#188 "2008-04-17 11:02:27"):** @Everyone Yep. I stood up a brand new Windows 2003 VM, nothing else on it except MS updates, and the new release of Mingle was still a CPU hog. This reminds me why I unsubscribed from the Thoughtworks RSS feed (it's a Mingle marketing machine). I pray they get it right, it looks great with the few pages I've interacted with and what I've been reading. But to require that much memory/CPU power is unacceptable.

**[tfriesen](#189 "2008-08-15 17:19:25"):** I also just installed Mingle as a test onto my Win XP workstation. I cannot believe the amount of resources this thing takes up. Come on ... really ... Mingle cannot be so complex that it needs this much! Tim

