# Website

[![Links](https://github.com/jmeridth/jmeridth.github.io/actions/workflows/links.yaml/badge.svg)](https://github.com/jmeridth/jmeridth.github.io/actions/workflows/links.yaml)

Hugo source for [jmeridth.com](https://jmeridth.com), using the [hugo-coder](https://github.com/luizdepra/hugo-coder) theme as a git submodule.

## Local Development

Clone with submodules so the theme is present:

```bash
git clone --recurse-submodules https://github.com/jmeridth/jmeridth.github.io
```

Run the site with live reload (needs Docker):

```bash
just run
```

Then [open the browser](http://localhost:1313).

## Checks

| Command | What it does | Needs |
| --- | --- | --- |
| `just lint` | Lints Markdown (with `--fix`) and GitHub Actions workflows | `markdownlint-cli2`, `actionlint` |
| `just links` | Builds the site and checks internal links offline | `hugo`, `lychee` |
| `just links-external` | Same as `links`, plus every external link (slow) | `hugo`, `lychee` |

Lychee settings live in `lychee.toml`, and skipped URL patterns in `.lycheeignore`.

## Content

- Posts: `content/posts/`
- Projects page: `data/projects.yaml`
- Talks page: `data/talks.yaml` (slide PDFs in `static/talks/`)
- Quotes page: `content/quotes/index.md`

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/gh-pages.yaml`).
