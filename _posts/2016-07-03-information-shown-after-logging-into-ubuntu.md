---
title: Information Shown After Logging Into Ubuntu
date: 2016-07-03 08:58:00 -05:00
tags:
- ubuntu
layout: post
---

Afer you log into an ubuntu instance you'll usually see something like this:

{% highlight bash %}
Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-88-generic x86_64)

 * Documentation:  https://help.ubuntu.com/

  System information as of Fri Jul  1 21:17:15 UTC 2016

  System load:  0.0               Processes:           100
  Usage of /:   20.1% of 7.74GB   Users logged in:     0
  Memory usage: 28%               IP address for eth0: 172.30.0.115
  Swap usage:   0%

  Graph this data and manage this system at:
    https://landscape.canonical.com/

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

7 packages can be updated.
7 updates are security updates.


Last login: Fri Jul  1 21:17:15 2016 from 1.2.3.4
{% endhighlight %}

I have logged into many ubuntu servers in my time and today I finally looked up how the information that displays gets generated and displayed.  I've used `/etc/motd` aka `message of the day` many times before but I noticed tha file doesn't exist in a vanilla Ubuntu install.  There are two main commands that are populating the information shown at login.

For system information:

`landscape-sysinfo`

example output:

{% highlight bash %}
->$ landscape-sysinfo
  System load:  0.0               Processes:           99
  Usage of /:   20.1% of 7.74GB   Users logged in:     1
  Memory usage: 28%               IP address for eth0: 10.10.10.10
  Swap usage:   0%

  Graph this data and manage this system at:
    https://landscape.canonical.com/
{% endhighlight %}

For packages status:

`/usr/lib/update-notifier/update-motd-updates-available`

example output:

{% highlight bash %}
->$ /usr/lib/update-notifier/update-motd-updates-available

7 packages can be updated.
7 updates are security updates.
{% endhighlight %}
