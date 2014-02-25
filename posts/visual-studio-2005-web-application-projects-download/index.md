.. title: Visual Studio 2005 Web Application Projects download
.. link: http://lostechies.com/jasonmeridth/2007/04/10/visual-studio-2005-web-application-projects-download/
.. description: 
.. date: 2007/04/10 10:22:00
.. slug: visual-studio-2005-web-application-projects-download
.. type: text


**UPDATE: This feature is included in the [Visual Studio 2005 Service Pack 1](http://msdn2.microsoft.com/en-us/vstudio/bb265237.aspx)** 

The team I'm currently on is trying very hard to upgrade our current application from using .NET 1.1 and Visual Studio 2003.  We've been held back due to time because of the hinderance of Visual Studio 2005 Web projects not allowing class files outsite of the App_Code folder.  Last night while conversing with [Jeffrey Palermo](http://codebetter.com/blogs/jeffrey.palermo/default.aspx) of the [Austin .NET Users Group (ADNUG)](http://adnug.org/) and [CodeBetter.com](http://www.codebetter.com), he enlightend me to a download/patch Microsoft released to ease this very migration problem.  The patch allows a web project to have class files outsite the App_Code folder and makes the transition painless. 

 

[Here is the download](http://msdn2.microsoft.com/en-us/asp.net/aa336618.aspx).

From the website - "_Web Application Projects provide a companion web project model that can be used as an alternative to the built-in Web Site Project in Visual Studio 2005. This new model is ideal for web site developers who are converting a Visual Studio .Net 2003 web project to Visual Studio 2005. (Released May 8, 2006)_"

 

"Released May 8, 2006"...Gives you signs of the lack of our google skills. :)

Hopefully we'll be upgrading shortly.  
(Don't get me wrong, all/most of the developers on LosTechies are 2.0/3.0 saavy)

Generics here we come!!!

## Comments

**[kraki5525](#7 "2007-04-10 12:41:35"):** FYI, Web Application Project addin has been rolled into Visual Studio 2005 Service Pack 1. You have to uninstall Web Application Project addin prior to running the service pack. The installation of the service pack is a painfully long process, and you don't want to have to do it twice.

**[Jim Bonnie](#8 "2007-04-10 14:18:22"):** This is also part of SP1 for VS2005, so you may want to go all the way in one step.

**[Karthik](#9 "2007-04-10 16:07:50"):** I believe the Web Application project comes with Visual Studio 2005 SP1 as well. We use this on all our Web Projects in ASP.NET 2.0. The Web Site project format leaves a lot to be desired. The only advantage that I see with it is Edit and Continue...

**[jmeridth](#10 "2007-04-10 17:59:36"):** I have avoided the SP1 install since I've heard about the horrid amount of time it takes. Thanks for the info guys. I'll get it done this weekend on my personal boxes. We'll check it out at work.

**[jssingh](#11 "2007-04-10 19:38:04"):** Jason I remember now, this was exactly what I saw at Tech Ed 2006 in Boston. I had wanted to try it then, however never got a chance to do it. I had mentioned about this to Phil also. I am glad we have come back to it, coz it seems like it has a lot of potential.

**[Go4webapps](#495 "2011-05-09 11:44:00"):** thanks for sharing this post..... [ adobe reader 10 ](http://go4webapps.com/)

