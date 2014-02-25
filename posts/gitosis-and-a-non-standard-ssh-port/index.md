.. title: Gitosis and a non-standard SSH port
.. link: http://lostechies.com/jasonmeridth/2009/02/13/gitosis-and-a-non-standard-ssh-port/
.. description: 
.. date: 2009/02/13 19:44:00
.. slug: gitosis-and-a-non-standard-ssh-port
.. type: text


I recently installed [gitosis](http://eagain.net/gitweb/?p=gitosis.git;a=summary), a free way to host your own git repositories, and I am using a non-standard port (not 22). I tried to clone the gitosis-admin repository and it timed-out. Learned via [this post](http://mechanicalrobotfish.com/posts/119-installing-git-server-using-gitosis) that I needed to create a config file under my .ssh folder in my home directory that listed the Host and Port. Example ~/.ssh/config: 
    
    
    Host git.mydomain.com
    Port 30000
    

When I do this: 
    
    
    git clone git-user@git.mydomain.com:gitosis-admin.git
    

it will then use my non-standard port to clone the gitosis repository. I hadn't done this before. Good to know.

This [post](http://scie.nti.st/2007/11/14/hosting-git-repositories-the-easy-and-secure-way) by scie.nti.st is the best HowTo on installing gitosis that I could find.