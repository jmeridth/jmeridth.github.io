---
url: /posts/suspicious-patch-lines
title: Suspicious Patch Lines
date: 2010-02-27 19:21:00 -06:00
tags:
- git
layout: post
---

DISCLAIMER: This is _only_ relevant if you or someone contributing to your project are doing cross-platform development. If you are typically just developing on Windows, you should be able to keep the config options set to false.

## The Problem

While trying to commit changes to a file I have under source control with Git on a Windows box using cygwin, I received the following error:

```bash
jmeridth@web1 /cygdrive/d/site
$ git commit -am "changed the README to show authors"
*
* You have some suspicious patch lines:
*
* In README
* trailing whitespace (line 26)
README:26:
```

This type of error has been discussed quite a bit amongst .NET developers who are transitioning to Git. It has to due with the difference in handling of newlines between Windows and the Mac/*nix world. There are five solutions to this:

1) Run the following from inside the repository: (the one I usually use, due to my cross-platform development)

```bash
git config core.autocrlf true
git confit core.safecrlf true
```

The [Github Help Pages](http://help.github.com/dealing-with-lineendings/) provide an excellent explanation about this. Also read the [direct documentation from git-core](http://www.kernel.org/pub/software/scm/git-core/docs/git-config.html). This makes Git convert CRLF at the end of lines in the text files to LF when reading from the filesystem, and convert in reverse when writing to the filesystem. Just be aware also that if you do set this and one of your stored binary files is accidentally marked as text, there is a chance for it to become corrupted.

1) Edit the .git/hooks/pre-commit file and comment out the following lines:

```bash
if (/s$/){
  bad_line("trailing whitespace", $_)
}
```

The reason why this is a problem is because there is a space (s in posix regex) just before the end of the line (aka a trailing whitespace). Normally this file wouldn’t fire off unless you made it executable, but on Windows all of the git hooks run because there is no concept of whether they are executable or not, they all are by default. On Mac/*nix Git repositories, you need to “chmod +x” (change to executable) the git hook files before Git will run them.

1) When commiting do the following:

```bash
git commit --no-verify
```

and the pre-commit hook will be ignored.

1) Rename/Move/Delete the .git/hooks/pre-commit file

```bash
mv .git/hooks/pre-commit .git/hooks/pre-commit.stop_working
```

1) Change the permissions on the .git/hooks/pre-commit file. In this case, I’m clearing the executable bit for all users (owner, group and rest of the world)

```bash
chmod a-x .git/hooks/pre-commit
```
