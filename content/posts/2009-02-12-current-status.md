---
url: /posts/current-status
title: Current Status
date: 2009-02-12 04:53:00 -06:00
layout: post
tags:
- ruby
- rails
- testing
- tdd
---

**_UPDATE:  I'm very eager to see where IronRuby and RSpec go for the .NET world.  Testing my C# Applications with RSpec would be awesome.  Check out the [MSDN magazine article](http://msdn.microsoft.com/en-us/magazine/dd434651.aspx) about this stuff if you haven't already._**

I'm working with a Ruby on Rails project now (RoR from now on) and absolutely loving it. I'm on nothing but Linux boxes, working with Ruby, and have been put in charge of strengthening our testing skills. I kind of laugh at this because I am having to learn Ruby, Rails, Nginx, Mongrels, etc and then figure out how to test RoR code.

I still touch up a C# API for another project at the company I work for; I'm not completely disconnected from the .NET world.

I went down the Test::Unit path first, due to the fact that it comes with Rails. I was quickly reminded why I went down the Behavior Driven Development path in C#. Test::Unit is a lot of doing Test Driven Development in NUnit (or other xUnit) fashion. You prefix your tests with "test_" and go from there. It works. I can't deny that in either the .NET world or the Rails world. I just prefer to focus on the behavior because it highlights that I will only make specifications or examples pass because they are serving a function my user has requested.

I then went down the, ever popular, RSpec path. A few more gems installed and another TextMate bundle to gain some RSpec macros. I liked it but it felt like too much. I can't explain it. I have friends who swear by RSpec and more power to them. Going down this route also exposed Zentest/autotest to me. For testing specs I'd use autospec from the same tool. Once I figured out how to sync Growl (I'm on a Macbook Pro), the notification tool on a Mac, with autospec, I was in heaven. So I'd run autospec, it would run all my specs and then spit up a notification with a green window for passing specs or red for failure with the count of failed tests. Autospec would then just wait for a file to change and then run the specs in the file and again notify me. It was like my own local CI notification.

I then found out about Shoulda. Shoulda is a gem/plugin that gives you the same context/should notation as RSpec but still utilizing the Test::Unit portion of Rails (again Test::Unit comes with Rails by default). I had some fun getting it working but with some help on the Google Group (<http://groups.google.com/group/shoula>), I was able to get it working pretty fast. And instead of running autospec, I'd run autotest again with a few changes to my ~/.autotest file to get my local notifications.

I will be posting more posts going into detail about all of these paragraphs and also about my continuing adventures in the Ruby on Rails and Linux world.

Things I will be posting about:

* Nginx
* Apache with Phusion Passenger
* Linux OS (commands, basic setup, security, etc)
* Ruby on Rails
* Ruby
* Python
* Django
* TextMate (code editor on Mac)
* CloudFiles (Rackspace Cloud storage)
* Hudson and CruiseControl.rb (Continuous Integration software that works with Ruby)

## Comments

**[Sean Scally](#389 "2009-02-12 14:29:25"):** I've been working with some of these same things in my free time ( I'm a fulltime c# guy at work ) and it's nice to see other people reaching some similar conclusions. test/unit seemed too guttural, rspec seemed too much, shoulda sits in that sweet spot in between. Are you doing any integration testing in Rails? I've been investigating using shoulda with webrat for outside-in integration first testing to drive out stories and then using TDD for controllers and models further in. There's a lot of tools out there in the ruby/rails world for this stuff but not a lot of examples or blogs.

**[Jason Meridth](#390 "2009-02-12 14:41:17"):** I've been doing the basic functional testing of my controllers, not using any other tools but shoulda and mocha (for mocking). I'll definitely check out webrat. Thanks for the heads-up. I'm doing Rails full-time so I'm hoping to educate while I learn. Best way to learn is to teach/share, right? :)

**[Tobin Harris](#391 "2009-02-12 20:09:03"):** I'm working with Rails right now too, and I'm loving it. (I'm also working with a few .NET projects at the same time, and loving those too). IMHO RoR has got code-sharing down to a T. I often feel like I'm assembling applications, not writing them. I look forward to trying Shoulda. And I look foward to what IronRuby will bring to .NET.

**[Gordon Hartley](#392 "2009-02-13 05:58:33"):** It'd also be nice to find out from you what you'd do differently when/if you go back to a primarily .Net environment - although your list of things to post about looks to be pretty long already!?

**[Tobin Harris](#393 "2009-02-13 16:54:17"):** @Gordon +1 to that. I know that after I first used Rails (4 years ago!) and did a .NET project, the things I did differently were (back in 2005): \- Used Castle ActiveRecord (great tool) \- Started using Prototype/Scriptaculous \- Use the Rails folder and file structure (stylesheets, javascripts etc) \- Hacked ASP.NET so most of my requests were GETs, and used POST only for changing things. \- Hacked ASP.NET for strucuture controller/action urls (/customer/edit/1 kind of thing) \- Generated database from the model I still love Rails today, and it still influences my development style heavily. It caused me to re-think many things. Will be interesting to hear what Jason at the end if it all.

**[Jason Meridth](#394 "2009-02-13 17:42:36"):** @Tobin I agree on the application building @Gordon I'm actually still working on the C# API I've mentioned. Like Tobin said, I adhere to a more ReSTful API now in my apps. I still use MonoRail for my applications and ONLY use ASP.NET WebForms to help people who refuse to try MVC. Unfortunately, there are so many things that you want to change when you go back to .NET and things like FubuMVC and the Castle Stack are making those moves, it still just isn't the same. Yeah my list is long, but I've already tackled most of it, just trying to find time to blog about it. And the Slicehost Articles already do most of what I'd post. I'm just trying to post about scar tissue stuff. I've always preferred Linux and OSS stuff to MS and .NET, but in San Antonio, .NET conquers and I wasn't qualified enough to get into the company I'm at now. I'll be posting soon and please keep me in check or ask questions so I can relate this to the .NET world. @Tobin Wow. 4 years ago? You're well ahead of the curve I'm on. Side note: Nice job ob NHIA. Good book.
