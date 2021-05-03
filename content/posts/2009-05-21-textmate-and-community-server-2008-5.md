---
title: TextMate and Community Server 2008.5
date: 2009-05-21 08:32:38 -05:00
tags:
- textmate
- tools
---

This is my first blog post from TextMate on my Mac. I'm using the HTML formatting. I will try the markdown and textile versions later. The key to getting this working with Community Server was when you click "Bundles->Blogging->Setup Blogs" and the following template shows up:

```bash
# List of Blogs
#
# Enter a blog name followed by the endpoint URL
#
# Blog Name URL
```

you put the following underneath the commented header

[My Blog Name](http://username@www.mydomain.com/blogs/<api_key>/metablog.ashx#<api_key>)

The key part is #<api_key>. api_key in Community Server terms is the portion of your url after domain/blogs/ and before the page requested. Mine is jason_meridth. My full URL for TextMate blogging would be [http://myusername_notsharing@www.lostechies.com/blogs/jason_meridth/metablog.ashx#jason_meridth]

Hope this may help a fellow Mac brethren
