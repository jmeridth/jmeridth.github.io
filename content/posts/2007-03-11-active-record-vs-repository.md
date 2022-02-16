---
url: /posts/active-record-vs-repository
title: Active Record vs. Repository
date: 2007-03-11 21:34:00 -05:00
layout: post
---

I was reading an blog entry by Ayende Rahien (aka Oren Eini) again, "[Entities, Services and what goes between them...](http://ayende.com/Blog/archive/2007/02/27/Entities-Services-and-what-goes-between-them.aspx)" and one of his commenters asked the following question:

####   re: Entities, Services and what goes between them... 2/27/2007 6:44 PM Gustavo Cores

@Ayende & @Hammet
But doesn't all this entities not talking to repositories go against the Castle project philosophy (ActiveRecord) which you are part of?
Because following the AR model
Order.FindByCustomerAndCity(...) would make sense

_**He answered:**_

@Gustavo,
Yes, what I am talking about contradict the Active Record model.
In general, I _really_ like the way AR can infer everything for me, and take away much of boring details of working with NHibernate.
That said, my personal belief is that a repository driven approach is a more flexible way to handle the issue.
I keep the power of AR, but I can now operate at much greater flexibility, see my article on MSDN to see some of the things that I can do with repositories.

Oren defends his stance further with the following blog entry: "[What should I use, NHiberante or Active Record?!](http://www.ayende.com/Blog/archive/2006/11/02/7116.aspx)"

I plan on trying out both mechanisms and, like Oren, decide what's more important: speed or clean domain objects and testability.

I'll keep you posted.
