---
layout: post
title: Using PushBullet for Notifications in Android/Chrome
date: 2015-02-19 09:31:22 UTC-06:00
category: android notifications
---

So I recently got my weechat (IRC) notifications coming to my android via [Pushover][1].  I just borrowed the following infomation from my friend Major's [blog post][5].  It was working great, but then [Major][2] told me about [Pushbullet][3] on [Twitter][6] and it's integration with Chrome and everything else that I alredy use.  I finally set it up and noticed that the [pushover.pl plugin][4] that I was already using in WeeChat works with Pushbullet also.  So minimal change to my already existing Weechat setup (just needed to set service = "pushbullet" and pb_apikey attributes on the Pushover.pl plugin and I was good to go.  The pushbullet Chrome extension is awesome.  Try it out if you're looking for a way to get notifications between your compute and your Android device.  I wanted it for when I marked myself as away on IRC I would get notifications on my browser and my phone.

How I set it up:

- Create your pushbullet account on https://www.pushbullet.com
- Get your access token from https://www.pushbullet.com/account
- Inside your weechat setup, install the pushover script:

```bash
/script install pushover.pl
```

- Configure the plugin

```bash
/set plugins.var.perl.pushover.enabled on
/set plugins.var.perl.pushover.only_if_away on
/set plugins.var.perl.pushover.service pushbullet
/set plugins.var.perl.pushover.pb_apikey [ACCESS TOKEN FROM ABOVE]
```

- Install the PushBullet apps for your [mobile devices and browsers][7]

Next time you `/away` yourself, you will receive IRC notifications where you're mentioned on your device/browser.  You can also sync your mobile notifications with your browswer so that you can see texts, phone calls, etc.  Any notification you would normally get on your mobile device you will get in the PushBullet browser app.  Yes, you can control which ones notify you via a muting feature.

Enjoy.

[1]: https://pushover.net
[2]: https://major.io
[3]: https://www.pushbullet.com
[4]: https://weechat.org/scripts/source/pushover.pl.html
[5]: https://major.io/2014/12/05/send-weechat-notifications-via-pushover/
[6]: https://twitter.com/jmeridth/status/556843348993253377
[7]: https://www.pushbullet.com/apps
