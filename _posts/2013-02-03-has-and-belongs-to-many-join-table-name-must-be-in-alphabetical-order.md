---
layout: post
title: 
date: 2013/02/03 00:00:00
tags: rails 
---

TL;DR 

[Read this from the Rails Guides][1]

Today I created an explicit join table between two models because each had has_and_belongs_to_many, as I’ve done many time before. Except, this time, when I tried to render one of my views, it said it couldn’t find a join table.

Example:

I created users_roles and the view error stated it was looking for roles_users.

Incorrect:

```bash
users_roles
```

Correct:

```bash
roles_users
```

My first inclination was the fact that it was looking for it in alphabetical order. Sure enough, the [Rails Guide Documentation][1] states that Rails developers do need to explicitly create their join tables but they have to be in lexical order (alphabetical).

   [1]: http://guides.rubyonrails.org/association_basics.html#creating-join-tables-for-has_and_belongs_to_many-associations
  
