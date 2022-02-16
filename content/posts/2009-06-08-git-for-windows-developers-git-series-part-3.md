---
url: /posts/git-for-windows-developers-git-series-part-3
title: Git For Windows Developers – Git Series – Part 3
date: 2009-06-08 02:45:00 -05:00
layout: post
tags:
- git
---

[Git For Windows Developers - Git Series - Part 1](/posts/git-for-windows-developers-git-series-part-1)

[Git For Windows Developers - Git Series - Part 2](/posts/git-for-windows-developers-git-series-part-2)

[Git For Windows Developers - Git Series - Part 3](/posts/git-for-windows-developers-git-series-part-3)

# **THE .GIT FOLDER**

**_Note_**: The SHA1s acategory in this post are unique to my system.  The examples with SHA1s will not work on your system if you try the commands verbatim.  The commands that ucategory will work if you name yocategory the same.

When you run “**git init**” in a directory locally or “**git clone…**” to bring an existing git repository down locally, that folder would now have a subdirectory called .git.  This folder is the “soul” of git.  If I run “ls –al” on my /c/code/console_app/.git folder I see the following folder structure:

![](/img/gitforwindowsdevelopers/part3/1.png)

Notice the “(GIT_DIR!)” text to the right on my console prompt.  Msysgit is helping me by reminding me what folder I’m in. Also notice that I have a bunch of files and five folders (hooks, info, logs, objects and refs).  I’m going to explain each directory then each file.

## **hooks**

![](/img/gitforwindowsdevelopers/part3/2.png)

Consists of files that you can populate with scripts that will execute during certain times in the Git event model.  These files are simply samples of what event hooks are available (hence the file extension of .sample).  I’ve created post-receive hooks for continuous integration (CI) events in the past.  [Here](/blogs/jason_meridth/archive/2009/03/24/adding-a-git-post-receive-hook-to-fire-off-hudson-ci-server.aspx) is a previous post I wrote on setting up a post-receive hook to work with a Hudson CI server that has a self-signed certificate and uses HTTP basic authentication.

## **info**

![](/img/gitforwindowsdevelopers/part3/3.png)

Consists of an exclude file that is the same as the .gitignore file but is not including in the repository itself and therefore is not versioned.

## **logs**

Consists of a file, HEAD, and a subdirectory, refs, which has the history of the interactions with branches, both local and remote.  The local branches (.git/logs/refs/heads/…) show commands like “**git commit”**, “**git rebase**”, “**git reset**”, etc.  The remote branches (.git/logs/refs/remotes/…) are usually “**git fetch**”, “**git pull**” or “**git push**”

![](/img/gitforwindowsdevelopers/part3/4.png)

When I run “cat HEAD” I see all the commits I’ve issued from both my local master and local user_prompt branch.

![](/img/gitforwindowsdevelopers/part3/5.png)

### **GIT REFLOG**

This file seems to just be a list of commits that I’ve made on all the branches I’ve used (even on the user_prompt branch which does not exist any longer).  A better way to view this is via the “**git reflog**” command:

![](/img/gitforwindowsdevelopers/part3/6.png)

This command “is a mechanism to record when the tip of branches are updated.  This command is to manage the information recorded in it”. ([git-reflog](http://www.kernel.org/pub/software/scm/git/docs/git-reflog.html))  Any action I perform inside Git, when data is committed to the local repository, it is logged here to the reflog, aka the .git/logs/HEAD file.  I have heard of Git users being able to recover commits after they reset the HEAD back a few commits.  I have not personally tried this.

## **objects**

![](/img/gitforwindowsdevelopers/part3/7.png)

Consists of all your objects (duh!).  What are the objects?  That’s a little ambiguous.  It looks like a bunch of two character alpha-numeric folders, plus info and pack folders.  In Git, objects are blobs, trees, commits, acategory.  What are the two characters?  They are the first two characters of an objects SHA1.  Then the files in those folders are named with the remaining 38 characters. (i.e., 9a438f1e971835a3ad724eb408a68fae45d7470a would translate to .git/objects/9a/438f1e971835a3ad724eb408a68fae45d7470a)

### **BLOB**

A blob is generally a file.

![](/img/gitforwindowsdevelopers/part3/8.png)

<http://book.git-scm.com/images/figure/object-blob.png>

Consists of the binary content that is stored in the blob.  No filename.  Really?  Yep.  Git does not track files, it tracks content.  So if you have two files with the same content but different names (shame on you for violating “[Don’t Repeat Yourself (DRY)](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)”) they will most likely point at the same blob object.  “The object is totally independent of its location in the directory tree…”.  This is usually handled by tree objects.  “…and renaming a file does not change the object that the file is associated with” (<http://book.git-scm.com/1_the_git_object_model.html>)

When I issue the “**git show 0e0fdc6**” command:

![](/img/gitforwindowsdevelopers/part3/9.png)

where 0e0fdc6 is the SHA1 of the solution file on my initial commit, I see the files contents.  “**git show**” is a way to view information about Git objects (blobs, commits, treecategory).

**TREE**

A tree usually represents a directory or sub-directory, containing a list of other trees and blobs.

![](/img/gitforwindowsdevelopers/part3/10.png)

<http://book.git-scm.com/images/figure/object-tree.png>

Consists of the type, SHA1 and filename of blobs and sub-trees.  When I run the “**git ls-tree 97107ec**“ command:

![](/img/gitforwindowsdevelopers/part3/11.png)

with 97107ec being the SHA1 of the tree that my initial commit points to (shown in commit section below).   If I issue a “**git show 97107ec**” on this tree SHA1:

![](/img/gitforwindowsdevelopers/part3/12.png)

I see the names of the contents, but not the types or SHA1s.

### **COMMIT**

A commit is a pointer to the SHA1 of a tree.

![](/img/gitforwindowsdevelopers/part3/13.png)

<http://book.git-scm.com/images/figure/object-commit.png>

Consists of the SHA1 of the tree it’s pointing at, the SHA1 of the parent commit, if not the initial commit, and the names of the author and committer.  Huh?  There’s a difference between the author and the committer.  Imagine you write a patch for an open source project.  When you tell the owner of the project to pull from your repository, you are the author, but they would the person committing it to the primary repository, the committer.  If I issue the “**git show –s --pretty=raw 1731c38**“ command, where 1731c38 is the SHA1 of my “initial commit” commit:

![](/img/gitforwindowsdevelopers/part3/14.png)

I see the tree SHA1 that the commit points to, the author and the committer, who happen to both be me. If I just issue a regular “**git show 1731c83**”:

![](/img/gitforwindowsdevelopers/part3/15.png)

I actually see the diffs for all changes in the commit.  Since this was the initial commit SHA1, I see lots of plus signs (+) in the diffs.

### **TAG**

A tag is a pointer to the SHA1 of a Git object.

![](/img/gitforwindowsdevelopers/part3/16.png)

<http://book.git-scm.com/images/figure/object-tag.png>

Consists of an object SHA1, the type of object the SHA1 represents and the name of the person who issued the tag, the tagger.  I issue the “**git tag v0.1 –m ‘v0.1’**” command:

![](/img/gitforwindowsdevelopers/part3/17.png)

This creates the tag object in the .git/objects/ folder.  If I run the “**git cat-file tag v0.1**” command:

![](/img/gitforwindowsdevelopers/part3/18.png)

This shows me the three items that make up a tag, object SHA1, type, and tagger.  If I issue a regular “**git show v0.1**” against the new tag:

![](/img/gitforwindowsdevelopers/part3/19.png)

I see the tag information and also the information for the git object it points to; a git commit in this case.

## **refs**

![](/img/gitforwindowsdevelopers/part3/20.png)

Consists of the master copy of all remote tracking branches (.git/refs/remotes), local branches (.git/refs/headscategory (.git/refs/tags), and the stash (.git/refs/stash), when used.  Master copy?  What does that mean?  Well, when I issue “**git checkout dev**” and checkout the checkout the master copy of the local dev branch, I’m replacing my working directory with a copy of .git/refs/heads/dev.  If I then issue “**git checkout master**” I’m replacing my working directory with .git/refs/heads/master, or a master copy of the local master branch.

The .git/refs/heads/master file, in my case, points to the latest commit for the local master branch.  In this case it’s the 41509ff SHA1:

![](/img/gitforwindowsdevelopers/part3/21.png)

Since we are in sync with the remote origin/master branch, the .git/refs/remotes/origin/master file points to the same SHA1:

![](/img/gitforwindowsdevelopers/part3/22.png)

The .git/refs/tags/v0.1 file points to the 8690e95 SHA1:

![](/img/gitforwindowsdevelopers/part3/23.png)

which is a Git tag object (.git/objects/86/90e95…) that points to commit 41509ff as we saw above in the Git tag object section.  So what this means is that currently all my git refs point to the same commit, 41509ff, more or less.

There is another type of git ref, stash, that I will talk about in a future post, but just know for now that the stash is located at .git/refs/stash/.

## **COMMIT_EDITMSG**

![](/img/gitforwindowsdevelopers/part3/24.png)

Consists of the last commit message.  From other readings, this seems to not even be used by git and is simply hear for reference.

## **FETCH_HEAD**

![](/img/gitforwindowsdevelopers/part3/25.png)

Consists of the SHA1s of branch/remote heads that were updated during the last “**git fetch**”.  The last fetch occurred automatically when I pulled changes from my local user_prompt branch into my local master branch.

## **HEAD**

![](/img/gitforwindowsdevelopers/part3/26.png)

Consists of the current reference that you are set to (usually a branch).  Normally master (aka .git/refs/heads/master).  I’m currently set to my local master branch.

## **ORIG_HEAD**

![](/img/gitforwindowsdevelopers/part3/27.png)

Consists of the SHA1 of the branch I did the last “**git merge**” _into_.  In this case it’s the SHA1 of my local master branch before I pulled in the changes of my local user_prompt branch.

## **config**

![](/img/gitforwindowsdevelopers/part3/28.png)

Consists of the settings for this repository.  I personally rarely edit this file and use the “git config**…**” command with options.  Read [here](http://www.kernel.org/pub/software/scm/git/docs/git-config.html) for all the possible settings.  I highly recommend the “git config color.*” commands to set color for your git commands and results.

## **description**

Consists of a description that will usually be displayed if I were hosting this repository on [gitweb](http://git.or.cz/gitwiki/Gitweb) or with git instaweb.

## **index**

![](/img/gitforwindowsdevelopers/part3/29.png)

This is the “staging area” I’ve talked about in the past two posts.  This is the area you prepare so that you can make one commit to your local repository.  It consists of meta-data such as filenames, timestamps, and SHA1s.  **DO NOT EDIT THIS FILE MANUALLY**.

## **SUMMARY**

That is a rough introduction to the .git folder.  I mainly only ever interact with the config file and the hooks folder.

The two biggest concepts to take from this are the objects and refs.  Objects are blobs, commits, trees, acategory.  Refs are branches, remotecategory, and the stash queue.  Once you completely understand that, interacting with Git will most likely become easier.
