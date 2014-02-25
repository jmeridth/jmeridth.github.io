.. title: Git tracking branches
.. link: http://lostechies.com/jasonmeridth/2010/03/23/git-tracking-branches/
.. description: 
.. date: 2010/03/23 21:36:00
.. slug: git-tracking-branches
.. type: text


I have encountered this message multiple times when dealing with Git:
    
    
    ~/code/blog/armmer.github.com(master) $ git pull
    You asked me to pull without telling me which branch you
    want to merge with, and 'branch.master.merge' in
    your configuration file does not tell me, either. Please
    specify which branch you want to use on the command line and
    try again (e.g. 'git pull  ').
    See git-pull(1)for details.
     
    If you often merge with the same branch, you may want to
    use something like the following in your configuration file:
     
        [branch "master"]
        remote = 
        merge = 
     
        [remote ""] 
        url = 
        fetch = 
     
    See git-config(1) for details.
    

and I’ve been waiting for it again so that I can blog about it. What this means is that the local master branch of my github pages repository is not tracking a remote branch. The quickest way to get around this would be for me to explicitly state the remote name and branch:
    
    
    ~/code/blog/armmer.github.com(master) $ git pull origin master
    

and it would pull successfully. Well, I don’t want to have to specify the remote and branch. The easiest way to do this is to edit the configuration file as suggested and add the following (at least in my case):
    
    
        
    [branch "master"]
        remote = origin
        merge = refs/heads/master
     
        [remote "origin"] 
        url = git@github.com:armmer/armmer.github.com.git
        fetch = +refs/heads/*:refs/remotes/origin/*
    

The +refs/heads/**:refs/remotes/origin/** notation is what I call the [refspec format](http://progit.org/book/ch9-5.html).

Now if I do a _git pull_ I get:
    
    
    ~/code/blog/armmer.github.com(master) $ git pull
    Already up-to-date.
    

It worked. Now back to coding…

## Comments

**[Jim Raden](#467 "2010-03-24 00:55:24"):** The "helpful" Git message is a few versions behind, I think, rendering it less helpful. Perhaps you have just inspired a bug report. :) The refspec format frankly scares me. Even for Git it looks arcane. I prefer the following, which sets up the local branch to track the remote branch: $ git branch -t branchname remotename/branchname Note: if "branchname" already exists locally, you may have to add an "-f" as another parameter, I believe before the branch name. And very recently (1.7?) they added the a nifty feature to the checkout command: $ git checkout branchname If "branchname" is not already a local branch, it automatically creates a tracking branch with that name. Cool, eh?

**[Jason Meridth](#468 "2010-03-24 01:11:39"):** @Jim I use the -t/--track command too. I, unfortunately, have local branches from my git beginnings that weren't tracked and wanted to post this info in case anyone else comes across it. I agree the refspec format seems arcane. I didn't know that checkout was wired to create a local tracking branch automatically now in 1.7. I'm going to play with that tonight. Thanks for the additional information.

**[Roger Pence](#469 "2010-03-24 15:42:09"):** Jason--Thanks for turning me on to Git at our local user group meeting a while back. How about writing a little about doing diffs with Git. I've pretty much made friends with everything else, but diffs (both at the commit and file level) sometimes drive me nuts. Thanks rp

**[Jason Meridth](#470 "2010-03-24 16:09:37"):** @Roger I'll work on it tonight. In the mean-time just understand that: "git diff" compares your working directory and index/staging "git diff --staged" compares your index/staging to your local repository (committed files) "git diff HEAD" compares your local reponsitory (committed files) to your working directory http://book.git-scm.com/3_comparing_commits_-_git_diff.html http://kernel.org/pub/software/scm/git/docs/git-diff.html This is not to be read as a RTFM. I'll write the post tonight.

