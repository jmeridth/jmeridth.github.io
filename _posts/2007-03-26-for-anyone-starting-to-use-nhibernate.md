---
layout: post
title: For anyone starting to use NHibernate
date: 2007/03/26 21:32:00
---


A good [blog entry ](http://ayende.com/Blog/archive/2007/03/26/NHibernate-Nullable-DateTime-Issues.aspx)by Oren (Ayende) about Nullable types and how NHibernate handles them.  I am starting to use NHibernate and will be sharing these jems as I find them. This is also a way for me to centralize them. =)

## Comments

**[jlockwood](#5 "2007-03-31 07:53:45"):** You may want to look at the ILS code. I did a couple of custom nullables for PhoneNumber and Address value objects (if I rember right). I think I also boxed a couple of primitives. I've used the nullables library before, but you end up using nullable fields on your classes from the library. I didn't want to couple domain code with an exernternal library.

**[jmeridth](#6 "2007-03-31 17:08:18"):** Thanks Josh, I'll check that out.

