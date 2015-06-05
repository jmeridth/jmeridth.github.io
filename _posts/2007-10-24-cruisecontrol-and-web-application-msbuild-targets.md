---
layout: post
title: CruiseControl and Web Application MSBuild Targets
date: 2007/10/24 14:59:01
---


I was one of the developers that installed the [Web Application Projects MSI](http://msdn2.microsoft.com/en-us/asp.net/Aa336618.aspx) before Visual Studio Service Pack 1 was available.  After the service pack came out, I didn't uninstall the MSI and just installed the SP.  We all know and heard the horror stories on how long it took to install SP 1.

Well, today I was finally getting my CI server going for my personal MonoRail project and came across this error:  
  
C:devJasonMeridthDotComtrunkJasonMeridthJasonMeridth.csproj(144,11): error MSB4019: The imported project "C:Program FilesMSBuildMicrosoftVisualStudiov8.0WebApplicationsMicrosoft.WebApplication.targets" was not found. Confirm that the path in the <Import> declaration is correct, and that the file exists on disk.

After reading [this](http://weblogs.asp.net/mnissen/archive/2006/06/19/Building-Web-Application-Projects-with-CCNET.aspx#comments) blog entry by [mnissen](http://weblogs.asp.net/mnissen/default.aspx), I moved the targets file to my solution and fixed the csproj file.  I can't believe that it would get installed into a local Program Files directory, but that is just me.

I realize this is a "hack" for now.  I will be uninstalling Service Pack 1 and uninstalling the MSI, then re-installing the Service Pack, but this works for now.

Just wanted to share in case anyone else with this problem needs it.

Side Note:  I'll be blogging about code soon.  Evan is making us all look like slackers. :)