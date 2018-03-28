---
title: Git-Achievements on Windows
date: 2010-09-25 02:30:00 -05:00
tags:
- git
- windows
layout: post
---

**UPDATE**: _Needed to add newly clone git-achievements to your PATH env variable.  Otherwise it will push an index.html file to your current repo and not the git-achievements repo.  Thank you __[Adam_](http://twitter.com/adymitruk)_ for finding that._

**IMPORTANT:** _Make sure you save your ~/.git-achievements-action.log and ~/.git-achievements.log files if you are transferring from your primary machine.  If you make these files mobile you will be able to use multiple machines.  I forgot mine and now have to start over with git-achievements.  Meh.  More fun._

  * I’m using Msysgit Bash CLI ([up-to-date install instructions](/blogs/jason_meridth/archive/2009/06/01/git-for-windows-developers-git-series-part-1.aspx)) 
  * I’ve forked the [git-achievements github repository](http://github.com/icefox/git-achievements)
    * notice it forks to a gh-pages branch, not a master branch 
    * this allows github to fire jekyll off against your github account and generate your git-achievements page 

 

  * ![clone_git_achievements](//lostechies.com/jasonmeridth/files/2011/03/clone_git_achievements_thumb_44954553.png) 
    * cloned repository locally into my C:code folder (resulting in /c/code/git-achievements by Git Bash CLI path terms) 

 

  * ![vim_bashrc](//lostechies.com/jasonmeridth/files/2011/03/vim_bashrc_thumb_0EE93888.png) 
    * ~/ (tilde + forward slash means home directory, where the .bashrc file needs to be) 

 

  *  ![vim_bashrc_export](//lostechies.com/jasonmeridth/files/2011/03/vim_bashrc_export_thumb_18CE29F3.png)
    * add the newly clone git-achievements directory to your PATH environment variable 
    * alias the git command to call git-achievements 
    * git-achievements calls the real git.exe, this just allows it to wrap it and intercept calls 

 

  * ![source_bashrc](//lostechies.com/jasonmeridth/files/2011/03/source_bashrc_thumb_534929C7.png)
    * source means to refresh/reapply 
    * if you don’t do this, your new changes won’t take effect 

 

  * ![echo_path](//lostechies.com/jasonmeridth/files/2011/03/echo_path_thumb_38305AB9.png)
    * this outputs your PATH environment variable content. 
    * Notice the git-achievements folder at the end. :) 

 

  * ![git_config](//lostechies.com/jasonmeridth/files/2011/03/git_config_thumb_4133ADAB.png)
    1. this allows uploads to your fork, on the gh-pages branch 

 

  * ![check_git_still_works](//lostechies.com/jasonmeridth/files/2011/03/check_git_still_works_thumb_51CBA899.png)
    1. to ensure you didn’t break git 

 

  * ![git_achievements_help](//lostechies.com/jasonmeridth/files/2011/03/git_achievements_help_thumb_2BF58236.png)
    1. shows the git achievements help 
    2. generates your first achievement as a “Student” (I already had mine) 

Hope you guys have as much fun as I did.  Yeah, yeah, I’m a nerd.  So what?  ;)

<http://blog.jasonmeridth.com/git-achievements>

## Comments

**[Adam D. ](#485 "2010-09-25 21:51:29"):** Hmmm.. can't get the uploading of achievements to work... Adam@ADAM-LAPTOP /c/dev/cqrs (BuildingManagement) $ git push Counting objects: 31, done. Delta compression using up to 2 threads. Compressing objects: 100% (16/16), done. Writing objects: 100% (16/16), 2.19 KiB, done. Total 16 (delta 15), reused 0 (delta 0) To git@scanit.unfuddle.com:scanit/cqrs.git fe265ce..81bafd5 master -> master ******************************************************************************** Git Achievement Unlocked! Apprentice Socialite (Level 1) pushed a branch to a remote repository using git push ******************************************************************************** Adam@ADAM-LAPTOP /c/dev/cqrs (BuildingManagement) $ git achievements -p cat: git-achievements: No such file or directory Global achievement.upload not set to true, updates left uncommited Adam@ADAM-LAPTOP /c/dev/cqrs (BuildingManagement) $ cd ../git-achievements/ Adam@ADAM-LAPTOP /c/dev/git-achievements (gh-pages) $ git commit -am "another achievment" && git push # On branch gh-pages nothing to commit (working directory clean) Adam@ADAM-LAPTOP /c/dev/git-achievements (gh-pages) $ git status # On branch gh-pages nothing to commit (working directory clean) Adam@ADAM-LAPTOP /c/dev/git-achievements (gh-pages) $ cd - /c/dev/cqrs

**[Jason Meridth](#486 "2010-09-25 23:02:27"):** @Adam I updated post. I messed up on the .bashrc. Needed to add git-achievements to your PATH env. screenshots above. Sorry

**[Adam D. ](#487 "2010-09-25 23:23:14"):** I did it but I still get this: Adam@ADAM-LAPTOP /c/dev/cqrs (BuildingManagement) $ git achievements -p Global achievement.upload not set to true, updates left uncommited Adam@ADAM-LAPTOP /c/dev/cqrs (BuildingManagement) $ git config -l core.symlinks=false core.autocrlf=false color.diff=auto pack.packsizelimit=2g help.format=html http.sslcainfo=/bin/curl-ca-bundle.crt sendemail.smtpserver=/bin/msmtp.exe merge.tool=kdiff3 mergetool.kdiff3.path=c:/Program Files (x86)/KDiff3/kdiff3.exe mergetool.kdiff3.cmd="c:/Program Files/Perforce/p4merge.exe" "$BASE" "$LOCAL" "$REMOTE" "$MERGED" user.name=Adam Dymitruk user.email=adam@dymitruk.com core.editor=vim core.autocrlf=false mergetool.keepbackup=true branch.autosetupmerge=true gui.recentrepo=C:/dev/scanitinternational achievment.upload=true <\------------------------------------------- !!!! core.repositoryformatversion=0 core.filemode=false core.bare=false core.logallrefupdates=true core.symlinks=false core.ignorecase=true remote.origin.url=git@scanit.unfuddle.com:scanit/cqrs.git remote.origin.fetch=+refs/heads/*:refs/remotes/origin/* branch.master.remote=origin branch.master.merge=refs/heads/master branch.autosetuprebase=always submodule.libs.url=git@github.com:adymitruk/altnetdllstack.git branch.FileStorage.remote=origin branch.FileStorage.merge=refs/heads/FileStorage branch.FileStorage.rebase=true remote.local.url=../chrisrepo remote.local.fetch=+refs/heads/*:refs/remotes/local/* gui.wmstate=normal gui.geometry=887x427+75+75 171 192 branch.scheduler.remote=origin branch.scheduler.merge=refs/heads/scheduler branch.scheduler.rebase=true branch.EquipmentMaintenance.remote=origin branch.EquipmentMaintenance.merge=refs/heads/EquipmentMaintenance branch.EquipmentMaintenance.rebase=true

**[Adam D. ](#488 "2010-09-25 23:24:57"):** Never mind. I can't spell :)

