---
url: /posts/justfiles
title: "Justfiles"
layout: post
date: '2026-03-08 12:00:00 -0600'
tags:
- tools
- developer-experience
---

TL;DR: I'm replacing all of my Makefiles with [Justfiles](https://github.com/casey/just). All of the boilerplate I've had in my Makefiles is just handled. I love it.

## What is Just?

[Just](https://github.com/casey/just) is a command runner, not a build system. It uses a file called `justfile` (or `Justfile`) to define recipes (commands) that you can run with `just <recipe-name>`. Think of it as a modern, sane replacement for `make` when all you really want is a way to run project commands.

## Why Replace Make?

If you've ever used a Makefile purely as a command runner, you know the pain:

- `.PHONY` targets everywhere because you're not actually building files
- Tab-only indentation that silently breaks things if you use spaces
- Arcane syntax for variables and string manipulation
- No built-in way to list available targets
- Recipes run each line in a separate shell by default

`Just` eliminates all of this. Here's a comparison:

**Makefile:**

```makefile
.PHONY: build serve clean

build:
	hugo --minify

serve:
	hugo server -D

clean:
	rm -rf public/
```

**Justfile:**

```just
build:
    hugo --minify

serve:
    hugo server -D

clean:
    rm -rf public/
```

No `.PHONY`. No gotchas. Just commands.

## Features I Like

- **`just --list`** shows all available recipes with descriptions
- **Comments as documentation** - add a comment above a recipe and it shows in `--list`
- **Variables and interpolation** work intuitively
- **Arguments** to recipes are straightforward
- **OS detection** built in for cross-platform recipes
- **Recipes run in the same shell** by default (no more `&&` chaining between lines)
- **Spaces or tabs** for indentation - your choice

## Example

```just
# Run the development server
serve:
    hugo server -D

# Build for production
build:
    hugo --minify

# Run linting
lint:
    markdownlint content/posts/*.md

# Create a new post
new name:
    hugo new posts/$(date +%Y-%m-%d)-{{name}}.md
```

Running `just --list` outputs:

```
Available recipes:
    build # Build for production
    lint  # Run linting
    new   # Create a new post
    serve # Run the development server
```

## Installation

Available via most package managers:

```bash
# macOS
brew install just

# cargo
cargo install just

# many more at https://github.com/casey/just#installation
```

I hope this helps someone. Cheers.
