---
url: /posts/adding-a-git-post-receive-hook-to-fire-off-hudson-ci-server
title: Adding a git post-receive hook to fire off Hudson CI server
date: 2009-03-24 18:07:00 -05:00
layout: post
tags:
- git
- hudson
- ci
- ruby
---

UPDATE: guard clause throws LocalJumpError. Changed to simple if block Context: I needed our hudson CI builds to auto-fire when a developer pushes their code changes to our canonical/upstream git repositories. In your .git/hooks/post-receive file place the file code (FULL CODE):

```ruby
#!/usr/bin/env ruby
#
while (input = STDIN.read) != ''
   rev_old, rev_new, ref = input.split(" ")
   if ref == "refs/heads/master"

       url="http://yourhudsondomain.com/job/job_name_here/build?delay=0sec"

       puts "Run Hudson build for job_name_here application"
       `wget #{url} > /dev/null 2>&1`
   end
end
```

EXPLAINING EACH LINE: I avoid writing bash scripts in default bash if I can. This is for a Ruby on Rails app, so I decided to write it in Ruby.

```ruby
#!/usr/bin/env ruby
```

The while loop checks to make sure there are values in STDIN (by default they are rev_old, rev_new, and ref).

```ruby
#
while (input = STDIN.read) != ''
end
```

I put an if statement block:

```ruby
if ref == "refs/heads/master"
end
```

to make sure I only fire the build if it is the master branch. Set the URL for the app you want to build:

```ruby
url="http://yourhudsondomain.com/job/job_name_here/build?delay=0sec"
```

Add a little text to notify the user what is going on (always a good idea):

```ruby
puts "Run Hudson build for job_name_here application"
```

And finally all the url with wget and feeding any response to [the black hole that is /dev/null](http://www.xaprb.com/blog/2006/06/06/what-does-devnull-21-mean/)

:

```ruby
`wget #{url} > /dev/null 2>&1`
```

IMPORTANT: Don't forget to run:

```bash
chmod a+x .git/hooks/post-receive
```

so that the file can be run Some Gotchas: 1\. If you are going to a url that has http basic authentication like my actual script does, you can pass the username and password like you normally would in an HTTP call:

```ruby
url="http://username:password@yourhudsondomain.com/job/job_name_here/build?delay=0sec"
```

2\. If you are doing an https call with a self-signed certificate, wget will complain. You can add the [\--no-check-certificate](http://www.gnu.org/software/wget/manual/html_node/HTTPS-_0028SSL_002fTLS_0029-Options.html) argument to wget to bypass certificate validation against local certificate caches:

```ruby
`wget --no-check-certificate #{url} > /dev/null 2>&1`
```
