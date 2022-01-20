---
title: Git Post-receive hook with integrity post call
date: 2009-07-17 05:01:00 -05:00
layout: post
---

Using the following code:

This git post-receive hook script queries the latest commit, gets the revision changes, and then passes that payload (via json) to a net/https POST call. I setup our [Integrity CI server](http://www.integrityapp.com/) with a self-signed certificate and HTTP basic authentication.

The Net::HTTP::Post.new instantiation group handles populating the basic authentication information and putting the payload into the form data of the request. The Net::HTTP.new group handles telling the request that it will be via SSL (443) and to not verify the SSL certificate (since I'm using a self-signed certificate; otherwise, I'd get a warning and kill my automation process)

The other important part is the "if pid = fork". The ruby [fork](http://www.ruby-doc.org/core/classes/Process.html#M003179) command allows code to happen in the background, in the case the POST call, and therefore make the call synchronous. Otherwise, when the developers commit their code to the repository, they will have to wait for the build to finish before their prompt will be returned to them. fork will return zero (0) if it fails to create the background process.

I'm still checking whether the zombie process warning in the rdoc (for the fork command) is a problem. I'll update this if it is.

The last line is notification for the user so they know what's going on. Always good to keep the user in the loop. :)

## Comments

**[not-impossible](#446 "2009-07-22 05:25:21"):** The code doesn't show up in the Google reader. Any idea why? do you use some funny code highlighting? Cheers

**[Jason Meridth](#447 "2009-07-22 16:05:56"):** @not-impossible Unfortunately RSS feeds won't allow nested code that lies in a script tag and that is what gist.github.com uses. I may have to go back to dp.syntaxhighlighter.
