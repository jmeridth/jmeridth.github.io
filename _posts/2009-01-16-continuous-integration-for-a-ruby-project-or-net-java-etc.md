---
title: Personal CI history and Hudson CI as service on Ubuntu/Debian
date: 2009-01-16 04:08:00 -06:00
layout: post
---

_UPDATE: CruiseControl.rb does have Git support from[ git://github.com/benburkert/cruisecontrolrb.git.](//github.com/benburkert/cruisecontrolrb.git) Thank you Jeremy for the heads' up (comment below)_

CI == [Continous Integration](http://martinfowler.com/articles/continuousIntegration.html)

I personally enjoy watching a team hear the Mortal Kombat voice yell "Fatality" when a build fails and see them all go to the web dashboard, be it CruiseControl.NET or TeamCity, and watch one of them say out loud what the problem was and claim the task of fixing it or checking with the developer who did the last check-in and give them a chance to fix it.  Sorry, I'm reminiscing about my development team at Wachovia (formerly World Savings).

Today I'm working on a Ruby on Rails team and learning some new stuff.  I was on a Python project before that for 3 months.  I didn't contribute much but I learned a great deal.  The two other developers I worked with wrote version one of an application that represented the same ideas that the application(s) a company my employer ending up purchasing had developed.  Their language of choice was Ruby on the Rails stack, hence my move to that forray.

One of my colleagues, Joe Ocampo, drank the Ruby "koolaid" almost a year ago and has suggsting it for a while.  Joe is also the person who suggested [Hudson](https://hudson.dev.java.net/) as a continous integration tool.  I've been satisfied with CruiseControl.NET and TeamCity for the tasks I had at the time (mainly .NET applications). 

I moved from CruiseControl.NET to TeamCity almost a year ago because I got tired of all the XML config files.  Once installed, TeamCity management was all web UI and, yes being lazy, I enjoyed that user experience much better.  The new team made the decision to move to Git from Subversion.  Jetbrains has stated that a Git SCM plugin for TeamCity is coming in a future version (soon).  Unfortunately, I need a good CI tool now.  I looked at CruiseControl.rb (which looks very cool for Subversion project), but it did not have Git support yet either.

After Steve Harmen also [mentioned Hudson again](http://twitter.com/stevenharman/status/1116787833), I decided to try it out.  Via my tweets ([1](http://twitter.com/armmer/status/1118561229), [2](http://twitter.com/armmer/status/1118568558), [3](http://twitter.com/armmer/status/1118595541), [4](http://twitter.com/armmer/status/1118596087)), you can see that I had Hudson downloaded with plug-ins and running in under 30 minutes.  Wow.  I installed it on my existing Windows TeamCity CI box for convienance.  Learned lesson via gotcha (next).

The gotcha I experienced after my initial "new toy" phase:  
1\. Using the Git plugin on windows right now, doesn't work.  The 0.5 version adds a forward slash in from of the C:PATH_TO_CLONE_REPO path when trying to clone a repository.  The 0.6 development branch has the fix for this but I could not find a nightly build or downloadable area.  I then moved to a Linux slice on my slicehost account and installed Hudson.  Again, in under 30 minutes.

On the new Linux slice I was able to add the Git, Rake, Ruby, Ruby Metrics plugins and have no issues.  Of course the catch with Linux there is no link on the Web UI to setup a service you could start and stop like "sudo /etc/init.d/hudson stop|start".  [This link](http://weblogs.java.net/blog/johnsmart/archive/2008/10/installing_huds.html) does an excellent job on how to setup that service (ON UBUNTU/DEBIAN KEEP READING BEFORE CLICKING LINK).  On a debian/ubuntu install the only difference is that you'll want to remove the following lines from the /etc/init.d/hudson file:

# Source function library . /etc/rc.d/init.d/functions # Get config. . /etc/sysconfig/network 

I'm still researching how to do this on a Debian/Ubuntu install (probably really easy, I just haven't looked). Once I find it, I'll update this post.

Instead of running the last command:

chkconfig --add hudson 

which is Redhat specific, you need to run the following to ensure that your script is put into the default runlevels and you know that the script will start on bootup:

update-rc.d hudson default 

Hope this helps someone out there.  This is also for me in case I need to setup another Hudson service on a Linux box. 

Thanks to [John Ferguson](http://weblogs.java.net/blog/johnsmart/) for doing most of the hard work and writing the blog entry for RedHat.

I'll keep you guys posted on how I get my projects running and going.  So far I have one running great, but it's only running a few specs.

## Comments

**[Jeremy Lightsmith](#385 "2009-01-16 07:51:09"):** Cruise Control.rb DOES have support for git. It's not been released yet, but if you use the development head from github, it's quite stable and close to release.

