.. title: Use Git Grep to Replace Strings in Files in Your Git Repository
.. link: http://blog.jasonmeridth.com/2013/02/11/use_git_grep_to_replace_strings_in_files_in_your_git_repository.html
.. description: 
.. date: 2013/02/11 00:00:00
.. slug: use-git-grep-to-replace-strings-in-files-in-your-git-repository
.. type: text
.. tags: git 

TL;DR

```bash
git grep -l 'original_text' | xargs sed -i 's/original_text/new_text/g'
```

I needed to changed a string in a bunch of files and used the command above using git grep to do it. Worked like a charm.

The `-l` argument to git grep only returns the file names and not the location in the file like it usually does.  
