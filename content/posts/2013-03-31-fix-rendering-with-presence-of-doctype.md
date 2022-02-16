---
url: /posts/fix-rendering-with-presence-of-doctype
title: Fix Rendering With Presence of Doctype
date: 2013-03-31 00:00:00 -05:00
tags:
- html5
- haml
layout: post
---

A couple times now I’ve forgotten to render the DOCTYPE in my layouts on my web apps. The DOCTYPE element tells the browser what type of file to expect. It needs to be the first line in your document, so it usually goes in your application layout file.

In HTML or ERB:

```html
<!DOCTYPE html>
```

In [HAML][1]:

```html
!!! 5
```

Other [HAML Doctypes][2]

The above is the format for HTML 5. I don’t bother with the [HTML 4.01 DOCTYPEs][3]

   [1]: http://haml.info
   [2]: http://haml.info/docs/yardoc/file.REFERENCE.html#doctype_
   [3]: http://www.w3schools.com/tags/tag_doctype.asp
