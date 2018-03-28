---
title: Get Repository Root Path
date: 2016-07-04 20:52:00 -05:00
tags:
- git
layout: post
---

I needed to find a way to get the path to the root of my Git repository.  I found the answer in the following command:

`git rev-parse --show-toplevel`

Example:

{% highlight bash %}
->$ git rev-parse --show-toplevel
/Users/jmeridth/dev/jmeridth.github.io
{% endhighlight %}
