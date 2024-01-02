---
url: /posts/use-git-grep-to-replace-strings-in-files-in-your-git-repository
title: Use Git Grep to Replace Strings in Files in Your Git Repository
date: 2013-02-11 00:00:00 -06:00
lastmod: {{ .Lastmod | time.Format ":date_medium" }}
tags:
- git
layout: post
---

TL;DR

On Linux:

```bash
git grep -l 'original_text' | xargs sed -i 's/original_text/new_text/g'
```

On Mac:

```bash
grep -ilr 'original_text' * | xargs -I@ sed -i '' 's/original_text/new_text/g' @
```

I needed to change a string in a bunch of files and I used the command above using git grep to do it. Worked like a charm.

The `-l` argument to git grep only returns the file names and not the location in the file like it usually does.
