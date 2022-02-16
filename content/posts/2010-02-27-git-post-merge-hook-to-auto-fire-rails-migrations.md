---
url: /posts/git-post-merge-hook-to-auto-fire-rails-migrations
title: Git post-merge hook to auto-fire rails migrations
date: 2010-02-27 19:28:00 -06:00
layout: post
tags:
- ruby
---

I saw [Scott Bellware](http://ampgt.com) recently write on twitter:

[for christmas, i really want a git hook to detect if an update has changes in the db/migrations folder](http://twitter.com/bellware/status/6952706099)

[Cory Foy](http://twitter.com/cory_foy), [Aaron Jensen](http://twitter.com/aaronjensen), and [myself]({{ site.twitter.url }}) all responded in turn. I think Cory and I were quickly searching for which git hook could be used for this idea. Cory found it [first](http://twitter.com/cory_foy/status/6954512284) and it was the post-merge/post-rebase hooks. I researched the [post-merge hook](http://www.kernel.org/pub/software/scm/git/docs/githooks.html) (scroll down to post-merge) and noticed it has no params that we could work with to find out if the last commit had migrations (aka changes/additions to db/migrations folder in a rails project) I came up with the [following](http://gist.github.com/262319)

```bash
#!/usr/bin/env ruby
`rake db:migrate && rake db:test:prepare` if `git diff --name-only HEAD@{1} HEAD`.index("db/migrations")
```

This will grab the previous diff and look for “db/migrations” in the text. If it’s present, it would auto-run `rake db:migrate && rake db:test:migrate`. In other words, it will migrate the development database schema, then the test database schema.
