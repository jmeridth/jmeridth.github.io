---
url: /posts/chromium-search-engines
title: "Chromium Search Engines"
layout: post
date: '2025-06-08 12:38:00 -0500'
tags:
- tools
- developer-experience
---

UPDATE (7/31/2025): Prefixing the search shortcut value with an `@` ensures the browser doesn't mistake it for a regular search instead of a shortcut.

TL;DR: Managing search engines in Chromium-based browsers can significantly enhance your browsing efficiency. Here's how to do it. aka chrome://settings/searchEngines

I am a keyboard user more than a mouse user. I don't tend to use bookmarks in my browser. I prefer to use "shortcuts" in my browser's address bar to quickly access different websites. The aliases are entries into my Chromium-based browser's settings, search engines. This allows me to type a keyword followed by a search term to quickly navigate to the desired site or perform a search.

Example: typing `@blog` goes to this repository, https://github.com/jmeridth/jmeridth.github.io. Another option typing `@tags`, tabbing and then typing `go` will result in the url https://jmeridth.github.io/tags/go.

Both of these can be created by going to the search engines settings in your browser. In Chromium-based browsers, you can access this by navigating to `chrome://settings/searchEngines`. Here, you can add new search engines or edit existing ones.

To add a new search engine, click on "Add" and fill in the following fields:
- **Search engine**: A name for the search engine (e.g., "Blog").
- **Keyword**: A keyword that you will type in the address bar to trigger this search engine (e.g., "@blog").
- **URL with %s in place of query**: The URL you want to navigate to, with `%s` as a placeholder for the search term (e.g., `

For `blog`, the Name would be `blog`, Shortcut would be `@blog`, and URL would be `https://github.com/jmeridth/jmeridth.github.io`.

![Chromium Search Engine Blog](/img/chromiumsearchengine_blog.png)

For `tags`, the Name would be `tags`, Shortcut would be `@tags`, and URL would be `https://jmeridth.github.io/tags/%s`.

![Chromium Search Engine Tags](/img/chromiumsearchengine_tags.png)

I find this method of navigation to be very efficient, especially when combined with the ability to use the tab key to provide dynamic strings to the URL. It allows me to quickly access my most frequently visited sites without having to remember long URLs or navigate through bookmarks.

Note: you need to be on versions less or greater than 135. The search engine technique above was removed in version 135 and reinstated in 136 due to [user feedback](https://support.google.com/chrome/thread/329004893/manage-search-engines-only-works-with-for-shortcuts-with-s-in-the-query?hl=en).
