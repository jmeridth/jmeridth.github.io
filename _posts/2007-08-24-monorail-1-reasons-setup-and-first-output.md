---
layout: post
title: Monorail #1 : Reasons, Setup and First Output
date: 2007/08/24 08:01:00
---


_**UPDATE: I am using the Castle MonoRail project trunk code, NOT RC2  **_

**REASONS:**

I've had a few friends ask me what is MonoRail and how do I set it up?  I decided to go from the ground up here.  There is nothing here that you can't get from the [Castle website documentation](http://www.castleproject.org/monorail/documentation/trunk/usersguide/installing.html).  I just want to grok this stuff and like Mr. Torvalds says, "[Talk is cheap, show me the code](http://lkml.org/lkml/2000/8/25/132)".  I also want to learn how to unit test in this environment.  I've heard the great things about Ruby on Rails (RoR from now on), but want to make that migration slowly.

Please don't laugh if this is too beginning for you.  I will eventually get to some advanced topics like:

![image](jasonmeridth/files/2011/03Monorail1_C9C5/image_thumb_6.png)

and much more after the scar tissue starts to gather (one mentioned below).Please be patient with me and if you are using MonoRail in production, please make sure I stay on the correct path ([JoeyDotNet](http://www.lostechies.com/blogs/joeydotnet/default.aspx), [Scott Bellware](http://codebetter.com/blogs/scott.bellware/default.aspx) and the [Dovetail team](http://blogs.dovetailsoftware.com/blogs/default.aspx?GroupID=3), and [Billy McCafferty](http://devlicious.com/blogs/billy_mccafferty/default.aspx) are a few that I know of).

Now we begin.

**SETUP:**

My current main folder structure in my source control ([Subversion](http://subversion.tigris.org/)) is like so:

![image](jasonmeridth/files/2011/03Monorail1_C9C5/image_thumb_2.png)

I also use [Ankh](http://ankhsvn.tigris.org/) for my Subversion plug-in in Visual Studio 2005 (hence the green checkmarks in the image above and future images.)

I keep all my dependent libraries in the lib folder (yes, Jason, we're not morons...I know)

Once the default structure is setup, you need to setup your folders so that MonoRail will work properly:

![image](jasonmeridth/files/2011/03Monorail1_C9C5/image_thumb_4.png)

Notice the folder structure:

Project Root  
+Content  
\-----css  
\-----images  
+Controllers  
+Models  
+ViewComponents (future post)  
+Views  
\-----components  
\-----(matching controller named folders containing vm files)  
\-----layouts (next post)  
\-----rescues (next post)

This is all provided on the [Castle website documentation](http://www.castleproject.org/monorail/documentation/trunk/usersguide/installing.html).

I am currently using shared hosting ([WebHost4Life](http://www.webhost4life.com)) and it has served it's purpose.  I recently [posted](http://www.lostechies.com/blogs/jason_meridth/archive/2007/08/11/monorail-on-webhost4life.aspx) about how they added the .rails extension to the server so that I can feel more legitimate about using rails than having to use a different extension, explained [here](http://www.castleproject.org/monorail/documentation/trunk/usersguide/installing.html#DeployingToSharedHost) and in [my previous post](http://www.lostechies.com/blogs/jason_meridth/archive/2007/08/11/monorail-on-webhost4life.aspx).  The installation instructions on the [Castle website documentation](http://www.castleproject.org/monorail/documentation/trunk/usersguide/installing.html) are very user friendly.  I personally took the **[sample solution**](http://www.castleproject.org/download/monorail/v1rc2/MonoRail.GettingStartedSampleVS2005.zip) and started from there.  It worked great.  Just build it locally and upload your web project to your web host.  I personally check into a subversion repository and use [CruiseControl.NET](http://confluence.public.thoughtworks.org/display/CCNET/Welcome+to+CruiseControl.NET) for my automated continuous integration and during that process my [NAnt](http://nant.sourceforge.net/) script handles deployment.

**I'M NOT A DESIGNER:**

No matter how hard I try to design sites, I can't make them appealing to the human eye.  I LOVE [Open Source Web Designs](http://www.oswd.org).  It has over 2000 designs and gives me a place to start.  The site I'm using, [JasonMeridth.com](http://www.jasonmeridth.com), for this example is create by [Node Thirty Three](http://www.nodethirtythree.com/) (I firmly believe in giving the designers their dues) and know it will do it's job.

**NOTES TO PAY ATTENTION TO:**

If, sorry, **_when_** you setup your Test projects make sure to reference the correct assemblies needed for unit testing with MonoRail.  They are Castle.MonoRail.Framework, Castle.MonoRail.TestSupport, and my unit testing framework of choice is NUnit, so I reference nunit.Framework.  Also don't forget to reference the project you are unit testing.  In this case it is my JasonMeridth project.

I'm still trying out the abstract base test class that the Castle group has created, AbstractMRTestCase. 

**_TIP:_** Currently I've learned that if you do the following (This is only a serious rough draft, please no comments on test names or formatting):
    
       1: using System;
       2: using Castle.MonoRail.TestSupport;
       3: using JasonMeridth.Controllers;
       4: using NUnit.Framework;
       5:  
       6: namespace JasonMeridth.Tests.Controllers
       7: {
       8:     [TestFixture

## Comments

**[Joey Beninghove](#71 "2007-08-29 10:14:44"):** Good stuff. This should definitely help more folks to start using MonoRail. I'm currently on my 3rd "professional" MonoRail project and I can't ever imagine having to go back to "classic" Web Forms. Also, regarding unit testing, you'll definitely want to check out the BaseControllerTest class (assuming you're working from the trunk, which I *do* recommend). BaseControllerTest is a much better way to drive out your controllers via TDD and I've used it successfully on my last 2 projects. Funny you mention RoR, because I'm actually in the process of learning Ruby (and Rails) on the side and I've just been blown away by it. I love the simplicity of MonoRail, but it truly is held down by being tied to the static languages of .NET. From what I've seen so far, that beauty in simplicity in RoR is 10-fold of what we can get with MonoRail on .NET. Anyways, btw, thx for the tip/link to Open Source Web Design. Hadn't seen them before. Looks like a great place for us creatively-challenged folks to get the design ideas bumping around in our heads.

**[Jason Meridth](#72 "2007-08-29 14:54:27"):** Awesome!! Thanks Joey, I will check that BaseControllerTest class. I'm using the trunk. :) I will head down the RoR path soon, but baby steps for me. I look forward to any RoR posts from you in the future (hint, hint) :) OSWD is awesome. Glad I could get that out there.

**[Sean Chambers](#73 "2007-08-30 09:00:22"):** I have to agree with Joey here. I have done about three projects with Windosor/MonoRail as well and I couldn't imagine going back to WebForms. Someone would have to drag me kicking and screaming =)

**[Jason Meridth](#74 "2007-08-30 21:46:21"):** I'm starting to feel the same way with just the little I've done so far. I may be tapping into your knowledge later Sean. Thanks for the info.

**[Joe](#75 "2007-09-01 12:57:47"):** Hey man, looks like a good post. You beat me to the punch, I've been working on a Monorail introduction myself. As for unit testing, that is actually no longer the recommended way to test. Check out this page http://using.castleproject.org/display/MR/TDDingControllers that shows the new recommendations for TDD with MR. The old way (inheriting from AbstractMRTestCase) is meant to be used internally. Keep up the great posts! Joe

**[Jason Meridth](#76 "2007-09-05 22:37:33"):** @Joe Thank you for that link. I appreciate the support. Post about MonoRail anyway bro, another perspective is always good.

