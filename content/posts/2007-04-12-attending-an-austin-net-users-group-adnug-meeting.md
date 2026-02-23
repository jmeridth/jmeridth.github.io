---
url: /posts/attending-an-austin-net-users-group-adnug-meeting
title: Attending an Austin .NET Users Group (ADNUG) meeting
date: 2007-04-12 20:43:21 -05:00
layout: post
tags:
- community
- dotnet
- tdd
- resharper
- subversion
---

This past Monday I attended the ADNUG meeting in the Microsoft Technology center building in Austin, TX.  I went with 4 team members from LosTechies.com.

[Scott Belleware](http://codebetter.com/blogs/scott.bellware/default.aspx), gave a presentation over Domain Driven Design.  He started out with the abstract level, describing an Entity, Specification, Service, Aggregate, and Repository.  When he went to show code examples it became more of a TDD->BDD with ReSharper presentation.  Still very enlightening.  The team I'm currently on has over 5000+ unit tests on a domain model that feeds 6+ systems.  Scott explained things like how to well-form Unit test names and at what point do you refactor duplicate code in your test fixtures without eliminating the readability of the specification that your unit tests are trying to dictate to the current developer.  [Check out this post by one of my colleagues, Jasdeep Singh](http://www.lostechies.com/blogs/jasdeep_singh/archive/2007/04/10/self-documenting-unit-tests.aspx).

After the meeting the small group I went to Austin with and Scott Bellware went to Rudy's BBQ for grub and a few beers.  I ended up at a table with [Jeffrey Palermo](http://codebetter.com/blogs/jeffrey.palermo/default.aspx) and a few of the other guys ended up at a table with Scott.

Jeffrey was very approachable and a well-versed developer and I learned a few things just in the hour talking with him.  He was just wrapping up an 8 month stint with Vital Insight and was getting ready to move on to another 4 month project in Austin.  He had coded 80,000 lines of code, 7,500 FitNesse tests, and 1,700 unit tests.  Very cool.  I told him about our woes with upgrading to 2.0/3.0 and he enlightened me to the strides Microsoft made for the development community to make that transition easier.  ([Check out my prior blog entry](http://www.lostechies.com/blogs/jason_meridth/archive/2007/04/10/visual-studio-2005-web-application-projects-download.aspx)) I also mentioned side projects and utilizing Google's Code hosting capabilities and he told me about [SvnRepository.com](http://www.svnrepository.com).  For ~$7/month you can have unlimited developers interacting with unlimited repositories all hosted by SvnRepository.com.

Jeffrey also mentioned his usage of the [StoryTeller](http://storyteller.tigris.org) software package created by [Jeremy Miller](http://codebetter.com/blogs/jeremy.miller/default.aspx), one of his CodeBetter colleagues.

Here are Jeremy's posts about it:

[Announcing "StoryTeller" - A new .Net tool for FIT test management](http://codebetter.com/blogs/jeremy.miller/archive/2006/10/17/Announcing-_2200_StoryTeller_2200_---A-new-.Net-tool-for-FIT-test-management.aspx)

[Introduction to using the StoryTeller Alpha #1](http://codebetter.com/blogs/jeremy.miller/archive/2006/12/17/Introduction-to-using-the-StoryTeller-Alpha-_2300_1.aspx)

From the StoryTeller website:

> StoryTeller is a new tool for efficient creation and management of automated testing of .Net code with the NFit/FitNesse engine. StoryTeller is specifically created to support an Acceptance Test Driven Development strategy. All existing .Net FitNesse and NFit tests will run under StoryTeller. Features will include editing, tagging, and integration with source control, CruiseControl.Net, NAnt and/or MSBuild, and support for application versioning.
>
>
>
>

Overall, I had an amazing time and can't wait for us to finally get the San Antonio .NET Users Group off the ground.  We are very close.  Until then, I plan to attend the ADNUG meetings monthly.  Next month is the [code camp](http://www.adnug.org/codecamp2007.aspx).  If you are in the Texas area and can make the drive to Austin, I highly recommend it.  It's FREE. :)
