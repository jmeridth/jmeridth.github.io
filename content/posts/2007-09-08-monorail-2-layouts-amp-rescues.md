---
url: /posts/monorail-2-layouts-amp-rescues
title: Monorail
date: 2007-09-08 21:20:00 -05:00
layout: post
tags:
- monorail
- castle
---

## **_LAYOUTS_**

**_UPDATED: Used the Code Snippet plug-in_**

Layouts are like [master pages](http://msdn2.microsoft.com/en-us/library/wtxbf3hh.aspx) or template pages in Adobe DreamWeaver.  They allow you to template your site.  I have a default.vm under my ../Views/layouts folder and the way to make a controller utilize the layout is to add a layout attribute to the class definition:

       1: using System;


       2: using Castle.MonoRail.Framework;


       3:


       4: namespace JasonMeridth.Controllers


       5: {


       6:     [Layout("default"), Rescue("generalerror")]


       7:     public class ExampleController : SmartDispatcherController


       8:     {

As you probably saw in my last post, it wasn't just a simple "hello world" text on a white background.
The reason I had a design was due to the ****[Layout attribute](http://api.castleproject.org/html/T_Castle_MonoRail_Framework_LayoutAttribute.htm) on the ExampleController class.
Layouts are simply NVelocity files (or whichever viewing engine you chose) placed in the /Views/layouts folder.  In my case it is the default.vm file:

## Comments

**[Joe Ocampo](#77 "2007-09-14 14:28:56"):** Put a link from your previous post to this one and from this post back to your previous post.

**[xcZ](#78 "2008-01-24 23:50:43"):** XcX

**[LDWebb](#79 "2008-09-09 16:09:39"):** I don't want to post this message I am running into some issues with presidence of rescues at the controller level and wanted to define certain rescues at the action level, I was reviewing your article, which has very important details, but the text is cut off in sections. The sections that I am interested in are "The controller has a designated rescue file:" and "The controller has NO designated rescue file:". I was wondering if I could get a soft copy of this article in word or text format.
