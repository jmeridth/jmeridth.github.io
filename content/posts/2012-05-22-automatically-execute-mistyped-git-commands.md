---
url: /posts/automatically-execute-mistyped-git-commands
title: Automatically Execute Mistyped Git Commands
date: 2012-05-22 00:00:00 -05:00
tags:
- git
layout: post
---

I use the command line with Git. I do this because I type faster than I use my mouse. It is a personal preference. Due to this, I sometimes fat finger Git commands. Yeah, it does happen. For example, I can type:

```bash
git chekcout -b new_branch_name
```

Notice the checkout command is mistyped (kc instead of ck). I misspell that and branch (usually brnach) often. Git will usually give notice this and give you a suggestion on which command you might have meant.

Example:

```bash
$ git chekcout -b new_branch
git: 'chekcout' is not a git command. See 'git --help'.

Did you mean this?
        checkout
```

There is hope for us misspellers. There is a Git config option called [help.autocorrect][1]. [“If you set help.autocorrect to 1, Git will automatically run the command if it has only one match under this scenario”][2].

To set it:

```bash
git config --global help.autocorrect 1
```

Then when you misspell again:

```bash
$ git chekcout -b new_branch
WARNING: You called a Git command named 'chekcout', which does not exist.
Continuing under the assumption that you meant 'checkout'
in 0.1 seconds automatically...
Switched to a new branch 'new_branch'
```

Git warns you that it will be making an assumption. That is nice. It just speeds things up and allows me to keep misspelling things. Hardy har har.

   [1]: http://git-scm.com/docs/git-config
   [2]: http://git-scm.com/book/ch7-1.html
