---
title: Git-Achievements on Windows
date: 2010-09-25 02:30:00 -05:00
tags:
- git
- windows
---

**UPDATE**: _Needed to add newly clone git-achievements to your PATH env variable.  Otherwise it will push an index.html file to your current repo and not the git-achievements repo.  Thank you __[Adam_](http://twitter.com/adymitruk)_ for finding that._

**IMPORTANT:** _Make sure you save your ~/.git-achievements-action.log and ~/.git-achievements.log files if you are transferring from your primary machine.  If you make these files mobile you will be able to use multiple machines.  I forgot mine and now have to start over with git-achievements.  Meh.  More fun._

* I’m using Msysgit Bash CLI ([up-to-date install instructions](/blogs/jason_meridth/archive/2009/06/01/git-for-windows-developers-git-series-part-1.aspx))
* I’ve forked the [git-achievements github repository](http://github.com/icefox/git-achievements)
  * notice it forks to a gh-pages branch, not a master branch
  * this allows github to fire jekyll off against your github account and generate your git-achievements page
* ![clone_git_achievements](/images/gitachievementswindows/1.png)
  * cloned repository locally into my C:code folder (resulting in /c/code/git-achievements by Git Bash CLI path terms)
  * ![vim_bashrc](/images/gitachievementswindows/2.png)
    * ~/ (tilde + forward slash means home directory, where the .bashrc file needs to be)
  * ![vim_bashrc_export](/images/gitachievementswindows/3.png)
    * add the newly clone git-achievements directory to your PATH environment variable
    * alias the git command to call git-achievements
    * git-achievements calls the real git.exe, this just allows it to wrap it and intercept calls
  * ![source_bashrc](/images/gitachievementswindows/4.png)
    * source means to refresh/reapply
    * if you don’t do this, your new changes won’t take effect
  * ![echo_path](/images/gitachievementswindows/5.png)
    * this outputs your PATH environment variable content.
    * Notice the git-achievements folder at the end. :)
  * ![git_config](/images/gitachievementswindows/6.png)
    1. this allows uploads to your fork, on the gh-pages branch
  * ![check_git_still_works](/images/gitachievementswindows/7.png)
    1. to ensure you didn’t break git
  * ![git_achievements_help](/images/gitachievementswindows/8.png)
    1. shows the git achievements help
    2. generates your first achievement as a “Student” (I already had mine)

Hope you guys have as much fun as I did.  Yeah, yeah, I’m a nerd.  So what?  ;)

[https://blog.jasonmeridth.com/git-achievements](https://blog.jasonmeridth.com/git-achievements)
