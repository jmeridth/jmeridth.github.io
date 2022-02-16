---
url: /posts/monorail-hotswap
title: MonoRail HotSwap
date: 2007-09-23 19:27:16 -05:00
layout: post
---

Ayende (pronounced A-yend  (no eh at the end) - verified in this [post](http://ayende.com/Blog/archive/2007/09/23/MonoRail.HotSwap-in-Action.aspx) after hearing Colin pronounce it) posted on an idea he has - [MonoRail HotSwap](http://ayende.com/Blog/archive/2007/09/22/Introducing-MonoRail.HotSwap.aspx) and [Colin Ramsay](http://colinramsay.co.uk/) did a [screencast of MonoRail HotSwap](http://colinramsay.co.uk/2007/09/23/hotswap-for-monorail-in-action/).  I know that the AppDomain having to reset because a code change occurred can be annoying sometimes, but it hasn't bothered me to the point where I would need this feature.  However, it is still very cool how the Windsor container is swapping out the old code for the new but doesn't change the dll in the bin directory, therefore the AppDomain doesn't need to refresh.  Check out the screencast.

SideNote: It's been ages since I've used the Opera browser.  Kind of cool how the refresh button and stop button are the same.  Depends on what the browser is currently doing.  Anyone see any strengths in Opera?  At least more than Firefox?

## Comments

**[Colin Ramsay](#104 "2007-09-23 20:02:17"):** Hi Jason, The HotSwap thing appeals to me because it will allow me to quickly act upon ideas without being stopped by a limitation in ASP.NET. By beating the appdomain refresh I can keep up the code flowing! About Opera, I was a Firefox user for years, but I decided to give Opera a go again about two months ago and when I realised I was able to configure the toolbars in the same way I could with my FF install (all in a single line), I was hooked by the browsing speed and the SpeedDial feature. I still use FF for Firebug though.

**[Jason Meridth](#105 "2007-09-23 21:38:55"):** Very cool Colin. Being limited by your environment is not fun. Great screencast. Thank you.

**[Matthew](#106 "2007-09-28 12:06:08"):** Opera is IMHO the best browser out there. Mouse gestures built in, the garbage (re-open closed tabs quickly), browsing speed and compatibility with 99% of websites gives me all I need. The speeddial also is utterly nice. I'm so much more productive than with Firefox. Really, plugins are nice in FF, but never as good as a fast, simple solution that Opera is. The only thing that really sucks in Opera is the Email client. But I prefer Gmail over offline clients anyways. Nice blog BTW Jason, you got me started with Monorails ! I was looking for an alternative at my dot-net only job :)

**[Jason Meridth](#107 "2007-09-28 13:29:28"):** @Matthew Thanks for the Opera information. I started using it, but there are some gmail firefox plugins that I use regularly. I'm researching plugins to Opera. Great news about MonoRail. Glad I could help.
