.. title: Gitosis and Gitweb - Part 3
.. link: http://lostechies.com/jasonmeridth/2010/05/27/gitosis-and-gitweb-part-3-gitweb/
.. description: 
.. date: 2010/05/26 04:45:00
.. slug: gitosis-and-gitweb-part-3
.. type: text
.. tags: git, gitosis


[Gitosis and Gitweb – Part 1  
](/blogs/jason_meridth/archive/2010/05/24/gitosis-and-gitweb-part-1-setup.aspx)

[Gitosis and Gitweb – Part 2](/blogs/jason_meridth/archive/2010/05/24/gitosis-and-gitweb-part-2-add-projects-and-contributors.aspx)

So we are setup, have a project, and have contributors via the first 2 parts.

I know that we are all enamored by the UI of [GitHub.com](http://github.com). I am. Unfortunately you can’t get private repositories for free (In all fairness it’s only $7/mo. – a _very_ wise investment). I am aware of [Gitorious](http://gitorious.com) like I mentioned in the first part, but I have no experience with that. I will after this series and update this series if I find it better. Again, I like to use the simplest thing that works. (Of course, “simplest” is in the eye of the beholder)

In this section I’m going to show you how to install Gitweb, a UI tool that let’s you view your repositories. I’m also going to mention how to get it to auto-detect any new repositories and ensure they show up on the web UI. I learned how to do most of this from my co-worker [Antony Messerli](http://twitter.com/ajmesserli). He is a true Linux and problem-solving Jedi.

## Install Apache

First, you need to ensure apache2 is installed. Check to see if you have an /etc/apache2 folder. If you do, you should be okay. If you don’t, you need to install it.

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.15-PM.png)

For more in-depth advice, I always reference the [Slicehost Articles](http://articles.slicehost.com/2010/5/19/installing-apache-on-ubuntu)

Once you have that installed the daemon restarted, go to your slices ip address in the browser of your choice (i.e,. http://123.123.123.123) and you should something like “It Works”

Voila! You have apache running.

## Install the Package

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.22-PM.png)

This will install gitweb into /var/www/gitweb, create a conf file at /etc/gitweb.conf, and add three files to /usr/share/gitweb (git-favicon.png, git-logo.png, gitweb.css).

Note: If for some reason, the /var/www/gitweb folder _is not_ created, you can clone the git source (git clone git://git.kernel.org/pub/scm/git/git.git) and then just copy the git/gitweb folder to /var/www/gitweb

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.28-PM.png)

You only need to edit the $projectroot variable in the /etc/gitweb.conf to point to your gitosis repositories folder:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.34-PM.png)

Since this isn’t a post about Apache, I just add the gitweb directory setup to the base Apache config. Since Ubuntu includes the entire /etc/apache2/conf.d directory, I just added the following information into /etc/apach2/conf.d/gitweb:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.44-PM.png)

Restart Apache to make sure everything works

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.52-PM.png)

The first time you go to your website again, you’ll see Gitweb, but it’ll say no projects are available. Fix mentioned below.

### Two Hacks (open to suggestions)

1\. I had to copy the git-favicon.png, git-logo.png, gitweb.css files from /usr/share/gitweb to /var/www/gitweb/. (if you had to do what is mentioned in the Note above, you don’t have to do this, since the gitweb folder from the git source clone includes these files already)

2\. I had to make the repositories that I wanted visible in gitweb have permissions of 755 (aka owner has read, write, execute. group and others have read, execute.)

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.47.58-PM.png)

Once that was done I can see the repository and it’s information on Gitweb.

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.48.07-PM.png)

If you want to edit the project description from "Unnamed repository; edit this file 'description' to name the repository." go to the repositories description file (/home/git/repositories/          lostechies.git/description for this repo) and edit the file and save.

### Cron job

I, again with the leadership of Ant, utilized a cron job he wrote to automatically make the repositories have permissions of 755. I do have some repositories, like gitosis-admin, that I do not ever want visible on Gitweb. The cron job excludes them. Here is the cron job code, showing that I don’t want to show my personal.git and gitosis-admin.git repositories. This could be easily written in Ruby or any other “scripting language” of your choice:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.48.19-PM.png)

I chose bash, so that I could take that time to learn it.  
Translation: Find all the directories in my gitosis repository path (/home/git/repositories) and if they are not gitosis-admin or personal, change their permissions, recursively, to 0755.

I put this in a file called set_gitosis_permissions_to_view_on_gitweb.sh and put it in root’s home folder, /root. I then called the file from root’s crontab:

![](//lostechies.com/jasonmeridth/files/2011/03/Screen-shot-2010-05-26-at-11.48.26-PM.png)

 

This means that every 5 minutes, my bash file will set any new repositories to 0755. This is how to get Gitweb stood up. The next post will show how to hide it behind HTTP basic auth and a self-signed certificate.

Next Part: Hiding the Gitweb site

## Comments

**[katy lavallee](#483 "2010-07-09 22:07:08"):** Anxiously awaiting the next part :)

**[Thorpe](#513 "2011-11-05 01:16:00"):** You said you chose Bash so that you could take some time to learn it. Unfortunately however, your shebang points to sh not bash. There is some differences.

