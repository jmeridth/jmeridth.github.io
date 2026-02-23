---
url: /posts/using-gsub-to-wrap-substring
title: Using gsub to wrap substring
date: 2009-09-10 19:56:47 -05:00
layout: post
tags:
- ruby
- rails
---

Over my lunch today I finally had an opportunity to use something I learned yesterday reading Dan Croak's ["gsub with a block"](http://robots.thoughtbot.com/post/183070874/gsub-with-a-block) post on [the Thoughtbot blog](http://robots.thoughtbot.com).

I use the twitter gem and just display my last status on my personal homepage at [JasonMeridth.com](http://jasonmeridth.com). I didn't want to hand out my username and password so all I do is encapsulate the twitter piece in a module called TwitterHelper and put it into my app/helpers/ folder in my Rails application:

```ruby
require 'twitter'
require 'pp'

module TwitterHelper
  def latest_twitter_status(user_id='armmer')
    begin
      status = Twitter.user(user_id).status['text']
      status ||= ''
      status = status.gsub(/http://(.+?)s/) do |url|
        " <a href='#{url}' target='_blank'>#{url}</a> "
      end
    rescue Exception => e
      logger.info("Twitter Helper Exception: " + e)
      status = ""
    end
  end
end
```

and then in my view I just call:

```ruby
latest_twitter_status
```

The important part of code to look at is:

```ruby
status = status.gsub(/(http://.*)/) do |url|
  " <a href='#{url}' target='_blank'>#{url}</a> "
end
```

This code will wrap any strings that start with http:// with an html href.
