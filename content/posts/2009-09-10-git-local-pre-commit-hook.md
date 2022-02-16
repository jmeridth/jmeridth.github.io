---
url: /posts/git-local-pre-commit-hook
title: Git local pre-commit hook
date: 2009-09-10 16:47:21 -05:00
layout: post
---

I've personally added a pre-commit hook to my local git repos. It's like a personal CI before I push back to origin/master. I run my tests locally anyway before committing and pushing, so I thought I would automate it.

I open the .git/hooks/pre-commit file in my local repo (i.e, full path is something like /Users/jasonmeridth/code/rails/myapp/.git/hooks/pre-commit) and put the following:

    #!/bin/sh
    rake db:migrate
    rake db:test:prepare
    rake

For non-rails developers, this will run any database migrations on my _development database, then ensure the_test database has the same schema, and then runs the tests.

Git hooks are not made executable by default, except on Windows because it doesn't understand the unix permissions. On my Mac, I have to issue the following command (from the app root):

    chmod +x .git/hooks/pre-commit

This makes the pre-commit hook executable and Git will run it before every commit to this repo. If this process returns a non-zero value (failure), then the commit does _not_ happen. I'll be shown the failing tests and I can fix them and try to re-commit.
