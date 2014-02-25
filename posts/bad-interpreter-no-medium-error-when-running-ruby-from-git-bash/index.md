.. title: “Bad Interpreter: No Medium” error when running Ruby from Git Bash
.. link: http://lostechies.com/jasonmeridth/2009/10/06/bad-interpreter-no-medium-error-when-running-ruby-from-git-bash/
.. description: 
.. date: 2009/10/06 14:50:00
.. slug: bad-interpreter-no-medium-error-when-running-ruby-from-git-bash
.. type: text


I opened my Windows VM last night for the first time in months to finally work on a .NET project from Github.  When I found out I needed the rspec gem installed (I'm normally a shoulda guy), I decided to see what gems I had installed first:
    
    
    gem list

and got the following error:
    
    
    $ gem list  
    sh.exe": /c/Ruby/bin/gem: D:/Users/Luis/projects/oss/oci/installer2-trunk/ruby/bin/ruby.exe: bad interpreter: no medium

Umm..... D:/Users/Luis? After some googling I found [this article on StackOverflow](http://stackoverflow.com/questions/835865/bad-interpreter-no-medium-error-when-running-ruby-from-git-bash) that directed me to this [blog](http://www.liquidfish.net/2009/04/ruby-and-git-bash-woes.htm).  It pretty much states that the shebang line (#!) at the top of my Ruby One-Click installer file had changed/been corrupted, I don't know.  I changed the line to point to my ruby exe (#!C:Rubybinruby.exe) and my gem commands started working again.

## Comments

**[derick.bailey](#451 "2009-10-07 16:57:09"):** dude, i can't tell you how many times this error has frustrated the crap out of me! thanks for the post and providing a link to the solution. -derick

**[Jason Meridth](#452 "2009-10-07 17:13:38"):** @Derick Glad it helped. I was baffled that some random guys path was on my system. :)

