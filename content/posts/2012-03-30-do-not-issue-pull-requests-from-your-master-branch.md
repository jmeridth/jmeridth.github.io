---
title: Do Not Issue Pull Requests From Your Master Branch
date: 2012-03-30 00:00:00 -05:00
tags:
- git
- github
---

**PROBLEM:** You do not want to issue pull requests from your fork’s master branch on [Github.com][1] to the parent repository because any new changes you add to the master branch will **_automatically_** show up in the pull request. That means changes you did not intend to be there, would now be there.

**SOLUTION:** Issue your pull requests from a feature/topic branch

**BAD SCENARIO:**

* Fork repo ABC
* Clone it locally (`git clone git@github.com:jmeridth/jekyll.git`)
* Add upstream repo (`git remote add upstream git@github.com:mojombo/jekyll.git`)
* Code fix/feature on master branch
  * don’t forget to add tests/specs and make sure they pass
* Commit code (`git add . && git commit -m “awesome”`)
* Pull latest from upstream (`git pull upstream master`)
* Push your changes (`git push origin master`)
* On [Github][1] website

The issue here is if you continue to work on your local master branch and push to your fork again, **_BEFORE_** the pull request is accepted and merged. Why is this an issue? It is an issue because any further commits on the branch that a pull request is based on will **_AUTOMATICALLY_** be added to the pull request. This usually ensures that you are requested to fix the pull request before it will be accepted.

**GOOD SCENARIO:**

* Fork repo ABC
* Clone it locally (`git clone git@github.com:jmeridth/jekyll.git`)
* Add upstream repo (`git remote add upstream git@github.com:mojombo/jekyll.git`)
* Create a feature/topic branch (`git checkout -b awesome_feature`)
* Code fix/feature
  * don’t forget to add tests/specs and make sure they pass
* Commit code on feature/topic branch (`git add . && git commit -m “awesome”`)
* Checkout master (`git checkout master`)
* Pull latest from upstream (`git pull upstream master`)
* Checkout feature/topic branch (`git checkout awesome_feature`)
* Rebase your changes onto the latest changes in master (`git rebase master`)
* Push your fix/feature branch to your fork (`git push origin awesome_feature`)
* On [Github][1] website

   [1]: http://github.com
