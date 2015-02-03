<!-- 
.. title: Not a fan of Ubuntu Unity, rrying out Cinnamon desktop environment
.. slug: not-a-fan-of-ubuntu-unity-rrying-out-cinnamon-desktop-environment
.. date: 2015-02-02 22:11:16 UTC-06:00
.. tags: linux
.. category: 
.. link: 
.. description: 
.. type: text
-->

Since I _finally_ switched to Linux as my native OS (Ubuntu 14.04 LTS specifically) I have been having a blast.  My only complaint has been Unity.  It is not user friendly.  It makes my 8GB RAM laptop go slow.  I even researched disabling it.  Seems that is quite the feat in Ubuntu these days.  I'm a minimalist when it comes to my computers.  I remember Gnome and have always been a fan.  However, due to an article I read the other day, I decided to read up on [Linux Mint](http://linuxmint.com) and remembered a co-worker was using it as his primary OS.  I have also been playing with Fedora more lately due to its support for containers.  I feel that is the future on application deployments.  However, since Mint is based on Debian and Ubuntu, it is more of a comfort thing for me.  My co-workers suggestion was to try out [Cinnamon](http://cinnamon.linuxmint.com0).  As an Ubuntu package for cinnamon is [no longer maintained](http://askubuntu.com/questions/94201/how-do-i-install-the-cinnamon-desktop), I found a PPA that is still being maintained of the Cinnamon _stable_ branch (yes, I am aware the Cinnamon maintainer has a PPA for nightly builds, but I'm not quite that brave).  I installed it with:

    sudo add-apt-repository ppa:lestcape/cinnamon
    sudo apt-get install cinnamon

Once installed you need to logout and choose Cinnamon from the login session screen, like so:

![Cinnamon](http://b038a8f209e36fc36fba-a9b634eed6b534d774260bd8467c190d.r61.cf1.rackcdn.com/Cinnamon-login.jpg)

After that you will see a much more responsive UI.  And for you Windows users, it will feel very familiar, as the taskbar and icons are in the usual locations.

NOTE: To those that actually read this, I did try [gnome session fallback](http://packages.ubuntu.com/trusty/gnome-session-fallback) and had many issues with it.  I am also aware that there is an official [Ubuntu Gnome](http://ubuntugnome.org/) variant of Ubuntu now also.  Hadn't tried it.
