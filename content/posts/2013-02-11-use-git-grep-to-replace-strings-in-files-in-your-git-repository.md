---
title: Use Git Grep to Replace Strings in Files in Your Git Repository
date: 2013-02-11 00:00:00 -06:00
tags:
- git
---

TL;DR

On Linux:

```bash
git grep -l 'original_text' | xargs sed -i 's/original_text/new_text/g'
```

On Mac:

```bash
git grep -l 'original_text' | xargs sed -i '' -e 's/original_text/new_text/g'
```

I needed to change a string in a bunch of files and I used the command above using git grep to do it. Worked like a charm.

The `-l` argument to git grep only returns the file names and not the location in the file like it usually does.

The `-e` argument is needed with the `sed` portion on OSX as stated by [asmeurer](https://twitter.com/asmeurer/) in the comments
