---
title: Monorail on WebHost4Life
date: 2007-08-11 04:38:40 -05:00
layout: post
---

If anyone else is using hosting with [WebHost4Life](http://www.webhost4life.com), I've gotten a Monorail site up there pretty quick using the MonoRailHttpHandlerFactory in my web.config, as suggested by the [Castle Monorail installation documentation](http://www.castleproject.org/monorail/documentation/trunk/usersguide/installing.html#DeployingToSharedHost). _ Please note that the documentation has .ashx, it should be .aspx_. 

I've also put in a support ticket to see if [WebHost4Life](http://www.webhost4life.com) will add the .rails extensions to the known ASP.NET extensions.  I'll update this post if it goes through.

**_UPDATE:  [WebHost4Life](http://www.webhost4life.com) was kind enough, after 2 help tickets, to add the .rails extension to the known ASP.NET extensions.  It works now.  They tried to get me to add a mime type for my specific domain (jasonmeridth.com) and that did not work.  Mime type of text/h_****_tml and extension of .rails failed.  If they ask you to do that, it will not work._**

If you're hosting company is not kind enough to add the extension, then the following will help:

With using the MonoRailHttpHandlerFactory, you just replace the .rails extension with .aspx. (Look at documentation link above)

Example: <http://www.jasonmeridth.com/home/index.aspx>  instead of <http://www.jasonmeridth.com/home/index.rails>

I've been working on a small website for a local San Antonio mom&pop shop and decided to go with Monorail.  I'm not an expert by any means, just finally trying to grok this stuff.

## Comments

**[Glenn](#58 "2007-08-26 14:43:19"):** Freaky...I just put in the support request as well. Nice to know they'' do it.

**[Jason Meridth](#59 "2007-08-26 16:14:20"):** If they tell you that you need to upgrade, they are incorrect. That is why I had to submit a second ticket. Don't let them talk you into an upgrade.

**[Jacky](#60 "2008-10-14 04:54:30"):** Webhost4life is definately the best hosting company i use so far. Their price is cheap and their support is awesome. Webhost4life ROCKS! Keep up the good work guys =) I am referring customers to you for sure.

**[Jordan](#61 "2008-10-18 21:53:36"):** I've been with webhost4life for several years, those guys make me impressive and life easily. I always introduce my friends and my colleagues to host with them; This is my blogs "2trees.cn"; if you want to host your website with them, you may refer to the url:www.webhost4life.com/default.asp?refid=memberid to review their website. you can get a live chat with the guys.Hehe Jordan L.

**[Ryan](#62 "2008-10-29 18:02:30"):** I too have something to say about this company. Hope this is helpful. WebHost4Life is clearly the best Windows based Web host service I know of. But to say this actually surprised myself, because I have been trying to find a “better” host company and moved away from WebHost4Life in the past year and half. I looked for alternative providers not because of any bad service I see, but because the bad ratings I see from online forums abut Webhost4Life. Now after trying 4 other Windows hosting providers, I can confidently say that WebHost4Life stands out among competitions and I will be a happy customer for a long time to come. WebHost4Life has many advantages over the competitions, and what I specifically like is the flexibility they provide for the site mangers. For example, their Control Panel web site is more user-friendly and much faster than those of other providers I tried. (most other providers use Plesk what I just hate! Too slow!!) For SQL Server hosting, the Control Panel allows site mangers to backup and restore SQL Server databases in a DIY-way without having to submitting a support ticket. This is very convenient. Plus, their online support has always been prompt and helpful. I highly recommend WebHost4Life. The site I host with WebHost4life is Karooba.com. We have high hope for this site (we hope it is the next big thing to come) and have worked hard to find the best web hosting provider. I can confidently say that WebHost4Life is the one!

