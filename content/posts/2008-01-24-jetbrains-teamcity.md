---
title: JetBrains TeamCity
date: 2008-01-24 20:14:36 -06:00
---

Being sick today has allowed me to catch up on my ASP.NET MVC knowledge and also move the remainder of my CC.NET projects to [JetBrains TeamCity](http://www.jetbrains.com/teamcity/).  Being sick is no fun though. *Cough Cough*

After reading Sean's [post](http://www.lostechies.com/blogs/sean_chambers/archive/2008/01/06/evaluating-teamcity-as-a-cc-net-replacement.aspx) on [TeamCity](http://www.jetbrains.com/teamcity/), my eyes have been opened.  Don't get me wrong, I have attachments to CC.NET because it's free and it works.  Setup is a pain sometimes, but not too bad.  On the flip, [TeamCity](http://www.jetbrains.com/teamcity/) has been amazing.  I migrated all of my CC.NET projects (8) to TeamCity in under 1 hour (of course, I'm using NAnt with my custom build files, so it was strictly web interface setup, but it worked.)

Like Sean mentions, I like the following:

* Window Tray Notifier of build statuses
* RSS feed notification of build statuses
* vs2008sln build runner
* web interface customization, no more XML hell
* more to come...

_**UPDATE: The administration section of the software suggests using MySQL for a production installation.  I followed the instructions online for installing MySQL and setting up the database and connectivity.  It worked without any problems.  I love good,detailed instructions.  Kudos to JetBrains.**_

Only "problem" I've had is that I like to have my builds use whatever version of NAnt they use -- in a lib folder in my trunk -- and that is the NAnt.exe file that is used and [TeamCity](http://www.jetbrains.com/teamcity/) wants an environment variable NAntHome to point to the NAnt path on the server (i.e., C:Program FilesNAnt, NOT C:Program FilesNAntbin -- it will handle finding the exe file, lesson learned)

I like what I see.  Thank you Sean.
