---
url: /posts/dell-information-via-command-line
title: Dell Information Via Command Line
date: 2012-10-15 00:00:00 -05:00
tags:
- dell
- command line
- windows
layout: post
---

To get your Dell Service Tag from your workstation/laptop via command line:

```bash
C:\>wmic csproduct get vendor,name,identifyingnumber
IdentifyingNumber    Name                Vendor
ABCDEF1              Latitude E6520      Dell Inc.
```

I looked for this and found it because my laptop was docked and I didn’t want to have to dock it to look on the bottom of the laptop
