---
url: /posts/using-sed-and-regex-to-remove-prefix-on-filenames
title: Using sed and regex to Remove Prefix on Filenames
date: 2014-02-24 21:39:00 -06:00
tags:
- command line
layout: post
---

I used [wp2md][1] recently to generate [markdown][2] files out of my wordpress posts so that I could migrate to a static blog generator (like [Nikola][3], the one I chose to use on this blog).  However, this exported the files with a prefixidatetime stamp (e.g., 20140224-blog-title.md)

I have used [sed][4] many times from my command line toolbox to rename files or content inside of files.  Here is how I removed the prefixidatetime stamp from my filenames.

```bash
for f in *.md; do echo $f | sed -r 's/.*(\d*)-(.*\.md)/\2/'; done
```

* the for loop iterates over just my mardown files (files with the md extension)
* I echo out the filename into the sed command line tool via a pipe, you can send the results of one command to the input of another by piping them together (e.e., command1 | command2)
* Then I setup the regex s/old_string/new_string/
  * I've learned when using group matching (the sections in the parenthses) and trying to replace the old_string with an entirely new string, you need to start the old_string with .*.  This causes the entire line to be replaced with the contents of the new string
  * old_string regex
    * (\d*) - first group match - any digit, 1 or more times
    * "-" - a hyphen separating the match groups
    * (.*\.md) - second group match - anything, ending in .md
  * new_string regex
    * \2 - replace the entire old string with the contents of the second group match

Example

`20140224-test-driven-development.md` becomes `test-driven-development.md`

NB: the ; do and ; done are just bash scripting loop notation when put onto one line.  This script could have also been written as

```bash
for f in *.md; do
    echo $f | sed -r 's/.*(\d*)-(.*\.md)/\2/'
done
```

I am aware that [Nikola][3] has a [wordpress importer][5], but it imports the files to *.wp and*.meta.  I wanted [markdown][2] files (*.md)

NB: I also use [Rubular.com][6] or [Pythex][7] all the time to test out my regex expressions.  You should check them out.

  [1]: https://github.com/dreikanter/wp2md
  [2]: http://daringfireball.net/projects/markdown/
  [3]: http://getnikola.com
  [4]: http://www.gnu.org/software/sed/manual/sed.html
  [5]: http://getnikola.com/handbook.html#importing-your-wordpress-site-into-nikola
  [6]: http://rubular.com
  [7]: https://pythex.org
