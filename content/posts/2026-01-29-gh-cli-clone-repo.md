---
url: /posts/gh-cli-clone-repo
title: "GitHub CLI Clone Repo"
layout: post
date: 2026-01-29T16:18:06-06:00
tags:
- github
- git
- cli
---

TL;DR: You can use the GitHub CLI tool to clone repositories from GitHub easily using the `gh repo clone` command.

If you are contributing to open source projects on GitHub, you need to fork the repository first. Then you can clone your forked repository to your local machine. You also need to set the upstream remote to the original repository so you can pull in changes from the open source project while having another remote pointed to your fork for pushing your changes and creating pull requests.

With the GitHub CLI tool, you can do this all in one command:

`gh repo clone me/mycloned_repo`

This automatically sets up the origin and upstream remotes and sets your local main branch to track upstream.

We previously would have had to do the following commands manually:

- git clone <git@github.com>:user/repo.git
- cd repo
- git remote add upstream <git@github.com>:upstream/repo.git
- git --set-upstream-to=upstream/main main

Using the GitHub CLI tool simplifies this process significantly.

Hope this helps someone else save time. Thank you to the maintainers of the [GitHub CLI tool](https://cli.github.com/) ([source code](https://github.com/cli/cli))
