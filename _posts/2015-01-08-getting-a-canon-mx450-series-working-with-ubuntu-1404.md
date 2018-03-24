---
layout: post
title: Getting a Canon MX450 Series Working With Ubuntu 14.04
date: 2015-01-08 21:03:55 UTC-06:00
tags: linux ubuntu troubleshooting
---

Today I needed to scan something on my Canon MX450 series printer from my laptop running Ubuntu 14.04 LTS.  I had already setup the printer portion successfully with the built in network printer detection, but hadn't done the scanning portion.  I found out I needed to download a deb file and install something called scangearmp to get this to work.  The download button can be found [here](http://support-sg.canon-asia.com/contents/SG/EN/0100517701.html).  As of this post I've download version 2.10 which was last updated on 14-Feb-2013, Issue Number 0100517701.  Once downloaded issue the following commands:

    tar xzf scangearmp-mx450series-2.10-1-deb.tar.gz
    cd scangearmp-mx450series-2.10-1-deb/
    sudo ./install.sh

This will install the scangearmp binary to /usr/bin/scangearmp.

Now all you need to do is run:

    scangearmp

If you you don't see a scanner listed in the dropdown then you just need to push the "Update Scanner List" button and it should find your scanner.  After that you should see the same popup but now with your Canon MX450 scanner listed.

![SelectScanner]({{ site.url }}/images/selectscanner.png)

Hope this helps someone else.
