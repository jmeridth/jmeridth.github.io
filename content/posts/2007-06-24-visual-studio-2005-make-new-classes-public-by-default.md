---
url: /posts/visual-studio-2005-make-new-classes-public-by-default
title: Visual Studio 2005 - Make new classes public by default
date: 2007-06-24 14:36:40 -05:00
layout: post
tags:
- visual-studio
- csharp
- tdd
---

Thanks to a co-worker, Chris Dereadt (thanks Chris), I have finally squashed one of my pet peeves with Visual Studio 2005.

To make all new classes public edit the Class.cs file in the following location:

C:Program FilesMicrosoft Visual Studio 8Common7IDEItemTemplatesCacheCSharp1033
(the drive is dependent on where you installed Visual Studio)

Add the word "public" in front of the class definition and from now on when you right-click a project and choose "Add Class" it will be a public class.

Hooray!!

Thanks again Chris.  You need to start blogging. =)

## Comments

**[Jason Meridth](#48 "2007-06-24 19:53:55"):** Don't get me wrong the reason I make my classes public by default is that I practice Test Driven Development (TDD) and for NUnit to see my Test Fixture it has to be public. Before any of you starti commenting on class exposure. =)

**[David Dobbins](#49 "2007-06-24 20:31:03"):** Although I haven't yet had the opportunity to try the "friend assemblies" feature (InternalsVisibleToAttribute), it looks to be well suited for this.

**[Joe Ocampo](#50 "2007-06-24 23:02:14"):** Very nice find.

**[Jason Meridth](#51 "2007-06-25 09:39:00"):** Thank you David. This will by no means remove the need for mocking. According to the MSDN information: <http://msdn2.microsoft.com/en-us/library/0tke9fxk(vs.80).aspx> "...private types and private members will remain inaccessible"

**[David Dobbins](#52 "2007-06-25 12:06:50"):** Ah, I was relying on the "...all nonpublic types in an assembly are visible to another assembly" that is stated on the page documenting the attribute itself: <http://msdn2.microsoft.com/en-us/library/system.runtime.compilerservices.internalsvisibletoattribute(VS.80).aspx> My (very limited) testing so far indicates that privates do indeed remain private.
