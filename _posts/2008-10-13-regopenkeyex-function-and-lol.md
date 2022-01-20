---
title: RegOpenKeyEx Function and LOL
date: 2008-10-13 14:43:00 -05:00
layout: post
---

I am currently interacting with 64 bit registry entries from a 32-bit application so I'm having to resort to DllImports. Fun fun.

I came across this line in the MSDN entry of RegOpenKeyEx:


"_A single registry key can be opened only 65534 times. When attempting the 65535th open operation, this function fails with ERROR_NO_SYSTEM_RESOURCES._"
(In the Remarks section of [here](http://msdn.microsoft.com/en-us/library/ms724897%28VS.85%29.aspx))

Just thought it was funny.

What's not funny, is that I'm having to write this code in .NET 1.1 due to clients not willing to upgrade their servers to at least .NET 2.0. The horror.


Side Note: I have 2 posts coming. One on using Microsoft Sandcastle to automate chm generation from API code (where comments are acceptable in my code) and another on MSI generation using WiX. Coming soon.

## Comments

**[Thomas Nguyen](#279 "2008-10-13 19:22:25"):** I'm new to C# Applications and its best practices. I've got a bunch of bumps and bruises trying to figure out all the magic, including DllImport. There's so much out there on web-dev and I'm wondering if you have any books/articles that would help me with Windows Applications (best practices, (un)installers, etc.). Thanks!

**[Jason Meridth](#280 "2008-10-13 20:18:11"):** 1\. Pragmatic Programmer 2\. C# 2008 and the .Net 3.5 platform by Andrew Troelson Awesome books

**[Marcus Bratton](#281 "2008-10-20 18:18:31"):** I'd really rather think it should fail with WTF_ARE_YOU_DOING. Makes more sense to me. ;)
