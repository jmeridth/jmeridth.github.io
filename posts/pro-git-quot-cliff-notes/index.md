.. title: "Pro Git" Cliff Notes
.. link: http://lostechies.com/jasonmeridth/2010/04/05/quot-pro-git-quot-cliff-notes/
.. description: 
.. date: 2010/04/05 04:17:00
.. slug: pro-git-quot-cliff-notes
.. type: text
.. tags: git, books


These are my notes from reading Scott Chacon’s [Pro Git](http://progit.org/book) I highly suggest [buying this book](http://tinyurl.com/amazonprogit) if you are serious about using the Git version control tool. [pg 48](http://progit.org/book/ch3-1.html) A branch in Git is simply a lightweight movable pointer [pg 50](http://progit.org/book/ch3-1.html) a special pointer called HEAD…is a pointer to the local branch you’re currently on [pg 52](http://progit.org/book/ch3-1.html) Creating a new branch is as quick and simple as writing 41 bytes to a file (40 characters and a newline). [pg 53](http://progit.org/book/ch3-2.html) To create a branch and switch to it at the same time…git checkout command with the -b switch [pg 61](http://progit.org/book/ch3-3.html) To see the last commit on each branch, you can run git branch -v [pg 69](http://progit.org/book/ch3-5.html)
    
    
    git checkout -b [branch] [remotename]/[branch]

is the same as 
    
    
    git checkout --track [remotename]/[branch]

[pg 81](http://progit.org/book/ch4-1.html) Git protocol…listens on a dedicated port (9418) [pg 82](http://progit.org/book/ch4-1.html) The Git protocol is the fastst transfer protocol available. [pg 111](http://progit.org/book/ch5-2.html) The Git project provides a document that lays out a number of good tips for creating commits from which to submit patches—you can read it in the Git source code in the Documentation/SubmittingPatches file. [pg 116](http://progit.org/book/ch5-2.html)
    
    
    git log --no-merges origin/master ^issue54

[pg 121](http://progit.org/book/ch5-2.html) Compare origin changes with local changes before merging: 
    
    
    git log origin/featureA ^feature

[pg 126](http://progit.org/book/ch5-2.html)
    
    
    git merge --no-commit --squash featureB

[pg 130](http://progit.org/book/ch5-3.html)
    
    
    git apply

It’s almost identical to running a patch -p1 command to apply the patch, although it’s more paranoid and accepts fewer fuzzy matches then patch. [pg 131](http://progit.org/book/ch5-3.html)
    
    
    git apply --check

check to see if a patch applies cleanly before you try actually applying it [pg 134](http://progit.org/book/ch5-3.html)
    
    
    git log contrib --not master

To find common ancestor of both branches 
    
    
    git merge-base contrib master
    
    
    git diff [sha1 from previous command]

[pg 135](http://progit.org/book/ch5-3.html)
    
    
    git diff master...topic

shows you only the work your topic branch has introduced since its common ancestor with master. [pg 140](http://progit.org/book/ch5-3.html) tagging releases with signed keys [pg 141](http://progit.org/book/ch5-3.html) generating a build number with your tags preparing a release as a tarball [pg 142](http://progit.org/book/ch5-3.html) Show work by author since a specific time 
    
    
    git shortlog --no-merges master --not v1.0.1

[pg 144](http://progit.org/book/ch6-1.html) Git can figure out a short, unique abbreviation for your SHA-1 values 
    
    
    git log --abbrev-commit --pretty=oneline

wolves paragraph [pg 145](http://progit.org/book/ch6-1.html) Find out the SHA1 of a branch 
    
    
    git rev-parse [branch]

[pg 146](http://progit.org/book/ch6-1.html) To see reflog information inline with your normal log information 
    
    
    git log -g master

Because reflog is a log, it will show you where the HEAD pointer was 2 months ago – if the repo is older than that 
    
    
    git show HEAD@{2.months.ago}

[pg 147](http://progit.org/book/ch6-1.html) ^ is the first parent of the current commit ^2 is the second parent of the current commit (only works if the current commit is a merge commit, where first parent is the branch you on when you merged, second was the other) ~ is the first parent ~2 (or any number) is the grandparent(s) of the current commit only on the current branch or branch you were on when you merged [pg 148](http://progit.org/book/ch6-1.html) Shows you any commits in your current branch that aren’t in the master branch on your origin remote 
    
    
    git log origin/master..HEAD

Git substitutes HEAD if one side is missing (git log origin/master..) Just like above command and example shown on pg134 
    
    
    git log refB --not refA

[pg 155](http://progit.org/book/ch6-3.html) Tells the stash command to try to reapply the staged changes 
    
    
    git stash apply --index

[pg 156](http://progit.org/book/ch6-3.html) Create a branch from a stash, testchanges 
    
    
    git stash branch testchanges

[pg 157](http://progit.org/book/ch6-4.html) …don’t amend your last commit if you’ve already pushed it (git commit —amend command) 
    
    
    git rebase -i HEAD~3

Don’t include any commit you’ve already pushed to a central server—doing so will confuse other developers by providing an alternate version of the same change [pg 158](http://progit.org/book/ch6-4.html) It’s important to note that these commits (interactive rebase) are listed in the opposite order (oldest first, newest last) than you normally see then using the log command (newest first). [pg 160](http://progit.org/book/ch6-4.html) …make sure no commit shows up in that list (git log -4 —pretty=format:“%h %s”) that you’ve already pushed to a shared repository [pg 164](http://progit.org/book/ch6-5.html) was wondering how to automate the good/bad declaration [pg 168](http://progit.org/book/ch6-6.html) git submodule update You have to do this every time you pull down a submodule change in the main projects. It’s strange, but it works. [pg 172 (subtree merging)](http://progit.org/book/ch6-7.html) You want to pull the Rack project into your master project as a subdirectory 
    
    
    git read-tree --prefix=rack/ -u rack_branch

[pg 175](http://progit.org/book/ch7-1.html) global git config /etc/gitconfig user global git config ~/.gitconfig local repository git config .git/config [pg 182](http://progit.org/book/ch7-1.html)
    
    
    git config --global core.autocrlf input

This setup should leave you with CRLF endings in Windows checkouts but LF endings on Mac and Linux systems and in the repository [pg 184](http://progit.org/book/ch7-2.html) To tell Git to treat a specific file as binary data, add the following line to your .gitattributes file: *.extension -crlf -diff [pg 185](http://progit.org/book/ch7-2.html) …one of the most annoying problems known to humanity: version-controlling Word documents (LOL) [pg 192](http://progit.org/book/ch7-3.html) post-receive hook…This scripts can’t stop the push process, but the client doesn’t disconnect until it has completed; so, be careful when you try to do anything that may take a long time [pg 194](http://progit.org/book/ch7-4.html) Is practically the git log command…it prints out only the SHA-1 values and no other information 
    
    
    git rev-list [SHA-1]..[SHA-1]

Get the commit message from each of these commits to test git cat-file commit [SHA-1] Incantation: 
    
    
    git cat-file commit [SHA-1] | sed '1,/^$/d'

## Comments

**[Ricardo](#471 "2010-04-14 01:04:47"):** Thanks for the compilation!

**[Jason Meridth](#472 "2010-04-14 01:25:01"):** Ricardo: You're welcome

**[Simon](#473 "2010-05-10 03:55:33"):** You've convinced me to buy this book now.

**[Jason Meridth](#474 "2010-05-12 12:59:43"):** @Simon: Awesome. It's worth it's weight in gold.

