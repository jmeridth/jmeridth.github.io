<!-- 
.. title: Using PushBullet for Notifications in Android/Chrome
.. slug: using-pushbullet-for-notifications-in-androidchrome
.. date: 2015-02-19 09:31:22 UTC-06:00
.. tags: android,notifications
.. category: 
.. link: 
.. description: 
.. type: text
-->

So I recently got my weechat (IRC) notifications coming to my android via [Pushover](https://pushover.net/).  It was working great, but [Major](https://major.io/) told me about [Pushbullet](https://www.pushbullet.com) and it's integration with Chrome and everything else that I alredy use.  I finally set it up and noticed that the [pushover.pl plugin](https://weechat.org/scripts/source/pushover.pl.html) that I was already using in WeeChat works with Pushbullet also.  So minimal change to my already existing Weechat setup (just needed to set service = "pushbullet" and pb_apikey attributes on the Pushover.pl plugin and I was good to go.  The pushbullet Chrome extension is awesome.  Try it out if you're looking for a way to get notifications between your compute and your Android device.  I wanted it for when I marked myself as away on IRC I would get notifications on my browser and my phone.
