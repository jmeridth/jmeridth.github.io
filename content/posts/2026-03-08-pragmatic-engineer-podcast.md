---
url: /posts/pragmatic-engineer-podcast
title: "Pragmatic Engineer Podcast"
layout: post
date: '2026-03-08 13:00:00 -0600'
tags:
- podcasts
- software-engineering
- ai
---

TL;DR: I highly suggest [The Pragmatic Engineer](https://www.youtube.com/@pragmaticengineer/videos) podcast and YouTube channel by Gergely Orosz. Two episodes in particular are very good: the Boris Cherny (creator of Claude Code) episode and the Mitchell Hashimoto (former CEO of HashiCorp) episode.

## The Channel

[The Pragmatic Engineer](https://www.youtube.com/@pragmaticengineer/videos) is run by Gergely Orosz, who also writes [the newsletter](https://newsletter.pragmaticengineer.com/) of the same name. The interviews are long-form, in-depth conversations with people building notable things in the industry. No fluff.

## Episodes I Recommend

### Building Claude Code with Boris Cherny

[YouTube](https://www.youtube.com/watch?v=julbw1JuAz0)

Boris Cherny is the creator and Head of Claude Code at Anthropic. Previously a Principal Engineer at Meta and author of *Programming TypeScript*. In this episode he discusses how Claude Code evolved from a side project into a core internal tool at Anthropic. Topics include how the tool was built, what it means when engineers no longer write most of their own code, parallel agents, and context retrieval from large codebases. A fun detail: Claude Code's "agentic search" is really just glob and grep, which outperformed RAG.

### Mitchell Hashimoto's New Way of Writing Code

[YouTube](https://www.youtube.com/watch?v=WjckELpzLOU)

Mitchell Hashimoto is the co-founder of HashiCorp and creator of Terraform, Consul, Vagrant, Vault, and more recently [Ghostty](https://ghostty.org/). In this episode he discusses the history of HashiCorp, challenges of turning open-source tools into a durable business, and how AI agents have transformed his engineering workflow. His key concept is "harness engineering" -- building tooling (test harnesses, validation scripts, linting rules) that agents can call to self-check their work. His rule: always have an agent running in the background. If he's coding, he wants an agent planning. If agents are coding, he wants to be reviewing.

I hope this helps someone. Cheers.
