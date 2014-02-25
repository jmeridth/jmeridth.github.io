.. title: Git For Windows Developers – Git Series - Part 1
.. link: http://lostechies.com/jasonmeridth/2009/06/01/git-for-windows-developers-git-series-part-1/
.. description: 
.. date: 2009/06/01 06:04:00
.. slug: git-for-windows-developers-git-series-part-1
.. type: text


_**UPDATE:** I’ve updated the msysgit installation screens so they are more current.  Git-1.7.7.1 is the latest one as of this update.  The subsequent screens show Git-1.6.3.  I assure you that all of the commands in the first three parts of this series will work on 1.6.3._ [Git For Windows Developers - Git Series - Part 1](/blogs/jason_meridth/archive/2009/06/01/git-for-windows-developers-git-series-part-1.aspx) [Git For Windows Developers - Git Series - Part 2 ](/blogs/jason_meridth/archive/2009/06/04/git-for-windows-developers-git-series-part-2.aspx) [Git For Windows Developers - Git Series - Part 3](/blogs/jason_meridth/archive/2009/06/07/git-for-windows-developers-git-series-part-3.aspx) This post is going to be the first of a few. I plan to convey everything I've learned the past 8 months while using git on a development team. I'm currently working on a Macbook Pro, doing Ruby on Rails development with git as the source control.  These posts will be specific to using git on the Windows operating system. This post is going to talk about installing msysgit, creating ssh keys, and creating a local git repository. If you already have msysgit installed, have created your ssh keys, and have an existing application you just want to put in a git repository, go here

### Installing msysgit On Windows

For windows, install [msysgit](http://code.google.com/p/msysgit/downloads/list) (both ssh key generation capabilities and git come with this tool): Download the latest version of msysgit: ![](jasonmeridth/files/2009/06/download11.png) ![](http://lostechies.com/jasonmeridth/files/2009/06/download21.png) Going through the setup.  Click next past the first window. ![](http://lostechies.com/jasonmeridth/files/2009/06/install11.png) Agree to the GPL terms: ![](http://lostechies.com/jasonmeridth/files/2009/06/install21.png) Set the installation location (default was fine for me: C:Program FilesGit): ![](http://lostechies.com/jasonmeridth/files/2009/06/install31.png) Choose installation options.  I don’t like to clutter my desktop, so that one is unchecked.  I also use Console2 so that is on my Quick Launch, not Git Bash  The context menu entries options give a user two new options on files when right-clicked in Windows Explorer.  We’ll talk about this later in the post. ![](http://lostechies.com/jasonmeridth/files/2009/06/install41.png) The next screen asks what name the folder that the program will be available from when I click Start->Programs, etc: ![](http://lostechies.com/jasonmeridth/files/2009/06/install51.png) I use the “Git Bash only” option because it’s the only reason I downloaded msysgit.  The other two options are tightly coupled to the operating system’s current setup. _ **UPDATE**:  Via [Joshua Flanagan](http://joshuaflanagan.lostechies.com), I was informed that tortoisegit, a UI tool, suggests that you choose the second option "Run Git from the Windows Command Prompt".  I've done both, I just prefer the first option because I don't use tortoisegit.  Just be aware._ ![](http://lostechies.com/jasonmeridth/files/2009/06/install61.png) Typical Windows developers won’t interact with other operating systems so choosing the 3rd option, in regards to non-handling of line-endings is usually best. ![](http://lostechies.com/jasonmeridth/files/2009/06/install71.png) Click next and the installation starts. ![](http://lostechies.com/jasonmeridth/files/2009/06/install81.png) Uncheck the readme (who reads those anyway?) and click Finish. ![](http://lostechies.com/jasonmeridth/files/2009/06/install91.png) Once installed, when I click the Windows button and type git (since I’m using Windows 7) I’ll see “Git Bash”, “Git Gui'”, “Uninstall Git”.  Click “Git Bash”.  You will see the version at the top of the window.  We're good to go: ![](http://lostechies.com/jasonmeridth/files/2009/06/done.png) I also issue the following commands, “git config –global user.email [my@email.com](mailto:my@email.com)” and “git config –global user.name ‘Jason Meridth’”: ![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb_3E2DDA4E.png) After I commit code in my new repository, later in the post, we will see why these are relevant. 

### Generating SSH Keys

I’ve met a good number of Windows developers who don’t know what SSH is.  My quick definition of Secure Shell (aka SSH): A secure connection mechanism to other networked machines that support SSH, usually over port 22. It is pretty much the default form of remote communication for other platforms. [More information if you're interested](http://en.wikipedia.org/wiki/Secure_Shell). _History and Retrospective_: I used to use cygwin + ssh keys for my git stuff on my windows VMs, but have realized, via advice from a friend, that cygwin will not be the easiest thing to teach to a typical Windows user. I am in no way assuming that any of our readers are "typical" windows users, but he's right. And msysgit needs to become the defacto Windows git tool anyway. What better way to help that project succeed than to give it more users.

## Comments

**[Erik](#410 "2009-06-01 11:11:30"):** For Windows OS, Git Extensions is a great UI addon for git, it also installs plugins for Visual studio 2005/8.. TurtouiseGit is nice as well. However I think the most important knowledge is what you wrote very well about, the basic bashing and understanding git.. Cheers, Erik

**[Joshua Flanagan](#411 "2009-06-01 13:35:03"):** Thanks for all your git help Jason. Looking forward to the rest of the series! One thing to note, when installilng msysGit, you recommended the Git Bash Only setting for setting up your PATH. However, readers may want to be aware that the TortoiseGit installation (bottom of http://code.google.com/p/tortoisegit/) recommends that you install msysGit with the middle option (run Git from Windows Command Prompt). Something to consider if you think you might install TortoiseGit later. (I haven't, yet) If you choose the middle option, you still get the git Bash shell - you dont HAVE to use the Windows Command prompt, as the dialog may imply.

**[Jason Meridth](#412 "2009-06-01 14:29:08"):** @Erik I'd heard about the Git Extensions stuff, but was going to try it out this week. Thanks for the heads-up. I'm going to focus more on the commands, then the tools in this series. @Joshua I haven't installed tortoisegit in a while and didn't remember that they suggested that setting on msysGit. I'll update the post accordingly. Thanks for watching out.

**[derick.bailey](#413 "2009-06-01 17:22:30"):** are you going to do "GIT for SVN User" in this series? I'm still learning the ways of GIT, and my SVN experience gets in my way a lot. If you aren't going to do that, though, maybe I will. :)

**[Jason Meridth](#414 "2009-06-01 17:34:21"):** @Derick I can. It's an easy change to this post and I can add it to future posts.

**[Integrum](#415 "2009-06-01 21:36:55"):** Great step by step guide for those doing development in Windows world.

**[Gabriel N. Schenker](#416 "2009-06-02 06:02:23"):** finally I get onto the Git train too! Have to refresh my Unix skills they are a little bit rusty. thanks Jason

**[Ramit Prasad](#417 "2009-06-11 19:14:00"):** I don't know about Windows 7, but in Windows XP, you could type "edit .file" and exit and the file would be created. If you have some *nix tools, then you can type "touch .file" Only the Windows GUI balks at files that start with periods. Otherwise I don't have any problems opening or dealing with them once they are created. Great tutorial though. Thanks!

**[mjlefevre](#418 "2009-06-20 02:15:14"):** This GIT thing still feels "forced" on Windows. Think I'll let it mature a little. Good article though.

**[Jim](#419 "2009-08-06 20:52:36"):** Any advice on how to get git bash working with [console2](http://sourceforge.net/projects/console/)? Thanks in advance, Jim

**[Jason Meridth](#420 "2009-08-06 21:23:22"):** @Jim I don't use that tool, but I imagine if you install msysgit and add the git bin folder to your PATH, you should be able to use git from that console tool just fine. That is just a guess.

**[Adam D.](#421 "2009-08-15 00:11:02"):** I would leave autocrlf to false in your set up UNLESS you ARE planning to do cross-platform dev. It's not worth the potential problems.

**[Matthew](#422 "2009-08-23 16:19:07"):** Nice article. BTW, what color scheme are you using for your Visual Studio? I like the colors! Mind to share?

**[Jason Meridth](#423 "2009-08-23 16:49:25"):** @Adam D. That is an excellent point. I will update the post Thank you @Matthew Of Course. That is compliments of my fellow LosTechies blogger, Sean Biefeld, http://www.lostechies.com/blogs/seanbiefeld/archive/2009/03/22/my-visual-studio-twilight-theme.aspx (download link at the bottom of the post)

**[Matthew](#424 "2009-08-24 06:20:40"):** @Jason That's fantastic! Thanks again!

**[Stephen Dryden](#497 "2011-05-20 09:52:00"):** Great article thanks - a much better introduction than the ProGit book

**[Tevfik Sertel](#498 "2011-05-20 21:21:00"):** Unfortunately I had to learn working with git on a windows machine until my *nix machine is ready so this was a really helpful article. Thanks for the info.

**[Jason Meridth](#499 "2011-05-20 21:24:00"):** @stephen_dryden:disqus @google-24db0cf339bb97edd224c7b5d6b1c69f:disqus  Glad the articles helped. I'm redoing the 3rd and 4th ones soon.  And adding a 5th to share some learned lessons.

**[Michael Delamaza](#500 "2011-05-23 14:48:00"):** Incredible post.  Immensely useful.  Thank you so much.

**[Jason Meridth](#501 "2011-05-23 15:30:00"):** You're welcome.  Glad it helped.

**[Colasante Manuel](#504 "2011-06-12 18:57:00"):** You defintively saved me a lot of time here. thanks a lot, clear and concise. 10/10 !

**[Martyn](#507 "2011-08-12 12:57:00"):** Still the best tutorial that I could find. Thanks! Martyn

**[Manfei](#508 "2011-10-07 03:22:00"):** when i use the command "git status" ,the consol showed "bad config value for 'color.ui' in c:/Users/Administrator/.gitconfig".why?

**[Jason Meridth](#509 "2011-10-07 04:29:00"):** type "git config -l" or "cat /c/Users/Administrator/.gitconfig" in Git Bash.  What value do you have for color.ui?  Normally it just says true or false. To set it properly: git config color.ui true

**[Manfei](#510 "2011-10-08 09:36:00"):** Thanks

**[Denis Solovyov](#511 "2011-10-24 06:50:00"):** Windows doesn’t understand dot files (i.e., .bashrc, .gitignore, etc).  Windows expects your files to have a name.extension convention. use a notepad for that:D

**[Jason Meridth](#512 "2011-10-24 12:56:00"):** I understand that.  I was saying you can't create a dotfile from Windows Explorer. I usually edit them in Git Bash (inside Console2)

**[Abstraktron](#514 "2011-11-08 03:52:00"):** Thanks very helpful!

**[Adam](#518 "2011-11-30 20:33:00"):** Great tutorial.. thanks for taking the time to write it up!

**[sb22](#524 "2012-03-09 07:16:00"):** to create a dot file in Windows, put a dot at the end too. For example to create .htaccess in explorer, rename to .htaccess.  windows will drop the dot at the end since the extension is nothing command prompt rename works as expected, rename to .htaccess Works in Vista and Win 7.

**[Jason Meridth](#525 "2012-03-09 07:19:00"):** I did not know that.  Nice trick.  Thank you for sharing.

**[Cherif](#526 "2012-03-14 18:17:00"):** Great tuto! Thanks a lot!

**[Mark Webb](#527 "2012-03-29 20:33:00"):** Your the Man Jason! Been a bit confused jumping from local unix and MS machines. Your tutorial was excellent! By the way, "trying to not let best be the enemy of the better" is a refrain that soothes my OCD. Thanks again, looking forward to more of your work!

