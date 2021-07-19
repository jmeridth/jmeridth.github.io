---
title: Creating an older rails project with multiple (newer) versions installed
date: 2008-11-25 20:27:55 -06:00
layout: post
---

I have been studying rspec the last week or two and have been using Rail 2.1.2 to do my exploring.  I was finally ready to jump into some legacy code and couldn't even create a spec folder on the directory tree because the version of rails was older: 
    
    
      1: user$ ruby script/generate rspec
    
    
    
      2: Cannot find gem for Rails ~>1.2.3.0:
    
    
    
      3:     Install the missing gem with 'gem install -v=1.2.3 rails', or
    
    
    
      4:     change environment.rb to define RAILS_GEM_VERSION with your desired version. 

After looking at the rails file in /usr/bin, I noticed the regex was looking for something that matched the following regex string: 
    
    
      1: /^_(.*)_$/

If my recollection holds, that means I'm looking for any character set that begins and ends with underscores (i.e., _1.x.x). 

So I tried the following: 
    
    
      1: rails _1.2.3_ <projectname>

and it succeeded. 

Hope this helps someone else. Continuing my Ruby journey. 

I'm also looking at Fluent NHibernate now, so it's going to be a few couple weeks.

## Comments

**[bubba](#306 "2009-01-16 19:51:36"):** hey, that helped me. thanks!

