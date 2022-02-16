---
url: /posts/firefox-hudson-build-monitor-add-on
title: Firefox Hudson Build Monitor add-on
date: 2009-03-05 02:19:00 -06:00
layout: post
---

MOZILLA: READ THIS!

To Mozilla,
You should upgrad ethe Hudson Build Monitor Plugin so that users don't have to create add-on accounts just to download. Cliffano's customer support and product are top of the line.

Explanation:
I have started using Hudson as my Continous Integraton server at work and still setting it up for custom interaction with Git. I have used CruiseControl.NET and TeamCity extensively in the past and both have tray tools. Well, I found [HudsonTracker](http://hudsontracker.sourceforge.net/index.html), but it wouldn't work for me because I'm using Basic HTTP Auth with my Hudson instance.

I then found the [Firefox Hudson Build Monitor plugin](https://addons.mozilla.org/en-US/firefox/addon/7522), written by Cliffano Subagio ([firefox developer account](https://addons.mozilla.org/en-US/firefox/user/1635724) and [blog](http://blog.qoqoa.com/)), but again, same problem. I decided to issue a ticket with the Firefox plugin.

Within a short time (couple of days), Cliffano responded with a new version to test the HTTP Authentication against.

I uninstalled the old version just to make sure of no conflict and then I right-clicked the xpi file and said to open with Firefox. It installed without issue and showed the butler in the firefox status bar:
![](http://3.bp.blogspot.com/_JmjHpHPB6hg/Sa8xHmBvNiI/AAAAAAAAAVo/QFVU2GlXFQY/s400/Picture+1.png)

You can right-click him and get the preferences menu:
![](http://1.bp.blogspot.com/_JmjHpHPB6hg/Sa8xYNYfkLI/AAAAAAAAAVw/gGM5FF9cVc4/s400/Picture+2.png)

There are 5 tabs:
1.Feeds - where you put your RSS feed URL to your hudson dashboard
![](http://3.bp.blogspot.com/_JmjHpHPB6hg/Sa80ldoctAI/AAAAAAAAAWo/fQcS3zyux5c/s400/Picture+3a.png)

2\. Display - designate some UI elements (# of builds, what to show on status bar when collapsed, color indicators [Hudson uses blue for successful builds for some reason. Can choose green here for us Red/Green guys/gals], etc)
![](http://4.bp.blogspot.com/_JmjHpHPB6hg/Sa8yfDnGlTI/AAAAAAAAAWA/xEVhtl_-Hx8/s400/Picture+4.png)

3\. Notification - designate how you will be notified of certain events
![](http://2.bp.blogspot.com/_JmjHpHPB6hg/Sa8y12XpL5I/AAAAAAAAAWI/j8_JAQcRsAc/s400/Picture+5.png)

4\. Network - username and password for HTTP Authentication
![](http://2.bp.blogspot.com/_JmjHpHPB6hg/Sa8y8ZCnBVI/AAAAAAAAAWQ/LelGDXM1YL4/s400/Picture+6.png)

5\. Misc - designate how to open page (new tab, new firefox window) and enable debugging
![](http://4.bp.blogspot.com/_JmjHpHPB6hg/Sa8y_Z_xVbI/AAAAAAAAAWY/rDWngSl9y5U/s400/Picture+7.png)

NOTE: Whenever I added my RSS feed from my Hudson dashboard to the tool (I'm using Firefox on a Mac) the URL would not stay. Cliffano had a solution for this:
1\. Go to your Hudson dashboard

2\. Right click your RSS feed of choice (I prefer "for all" which is https://hudson.mydomain.com/rssAll):
![](http://2.bp.blogspot.com/_JmjHpHPB6hg/Sa8zrDEwJKI/AAAAAAAAAWg/O7a_KGnm0Hk/s400/Picture+8.png)

3\. Choose "Add Link To Hudson Build Monitor"
![](http://3.bp.blogspot.com/_JmjHpHPB6hg/Sa805kAncpI/AAAAAAAAAWw/QTkVBsYGdJM/s400/Picture+10.png)

4\. Name the URL:
![](http://2.bp.blogspot.com/_JmjHpHPB6hg/Sa8141ClQGI/AAAAAAAAAW4/1EfpczqZQ5g/s400/Picture+11a.png)

And VOILA! it stayed in my preferences. Most users won't have to go this route, but instead of typing out the url and just a name, it is easier.

Thank you Cliffano. Hopefully Mozilla will upgrade the plugin and stop requiring people to create accounts to download it.

Cliffano has stated that a 1.0 version will be coming soon. Enjoy!
