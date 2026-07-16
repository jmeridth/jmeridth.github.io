---
url: /posts/managing-github-notifications
title: "Managing GitHub Notifications"
layout: post
date: '2026-07-16 00:00:00 -0500'
tags:
- github
- productivity
- workflow
---

TL;DR: Centralize all your GitHub notifications into Slack so you stop drowning in email.

## The Problem

If you work across a lot of repositories, GitHub notifications get out of hand fast. Every issue, pull request, review request, mention, CI run, and release wants your attention, and by default much of it lands in your email inbox. Email is where notifications go to die. It is easy to end up with thousands of unread messages and no real signal.

I wanted one place to see what actually matters, and I am already in Slack all day.

## How I Tame Them

### GitHub Slack App

The [GitHub app for Slack](https://github.com/integrations/slack) lets you subscribe to the exact activity you care about from any repository. This is a personal setup for me: I run the subscriptions from my direct-message conversation with the GitHub app, so everything funnels into that one place instead of a public channel or a DM to someone else.

```text
/github subscribe jmeridth/jmeridth.github.io releases
/github subscribe argoproj/argo-helm pulls,issues

/github subscribe features list
```

You can tune the feature flags (pulls, issues, releases, deployments, reviews, comments, and more) per subscription, so a noisy repo gets trimmed down to just the events worth interrupting me for. `/github subscribe features list` shows everything available.

When a subscription turns out to be noisier than I want, I trim it instead of leaving the repo entirely:

```text
/github unsubscribe argoproj/argo-helm issues
```

That keeps the pull request activity I care about while dropping the issue firehose.

### Turn Off the Email Firehose

Once Slack is doing the work, the email notifications are just noise. I turn them off in [GitHub notification settings](https://github.com/settings/notifications) so there is no second inbox competing for my attention.

### GitHub Scheduled Reminders

For pull requests specifically, [Scheduled Reminders](https://github.com/settings/reminders) send a Slack message at times I choose with the PRs waiting on me. Instead of me hunting for review requests, they come to me on a schedule.

![GitHub Scheduled Reminders](/img/scheduled_reminders.png)

One caveat: you can wire up scheduled reminders for a team, but they run under a specific user's GitHub account rather than the team itself. That is a fragile setup, so I only use scheduled reminders for my personal review queue.

### Why Not Just the Notifications Inbox?

I still live in [github.com/notifications](https://github.com/notifications) for ad-hoc triage. It is not my central source, though, because it only updates when I refresh the page. Slack notifications are push, so they are live. I would rather have the important things arrive on their own than remember to go check for them.

## Takeaways

We are in Slack all day anyway, so it is best to have all communications in one place. Centralizing GitHub activity into Slack turns a firehose of email into a handful of push notifications I actually read, and scheduled reminders make sure review requests do not slip through the cracks.
