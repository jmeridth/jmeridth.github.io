---
url: /posts/coding-structure-and-standards
title: Coding Structure and Standards
date: 2007-02-17 01:02:00 -06:00
layout: post
---

Today I had a good conversation with a colleague about software structure and coding standards.  His beliefs are that a class should be a monolithic so the maintenance is centralized and everything a developer, mainly newbie or junior, needs is right there for him/her to maintain/expand the class.

I lean more toward the Single Responsibility and Design Pattern habits.

This conversation was sparked due to us creating a mapper service for our application.  When the mapper is called it's responsibility is to move values from one domain object to another.  Utilized in the mapper is a factory that returns a strategy, when passed a specific enum value.  The strategy handles the move of 3-4 specific fields based on the enum value.  This makes it more extensible when another value is added to that enum.

The conversation headed to what extensibility truly is.  He said he subscribed to the idea that he needs to code for the developer who follows him.  This includes using comments.  I believe that if you properly name your variables, classes, methods, etc. any developer, no matter their skill level, will be able to understand your code.  A developer can almost read it like a book.

My current project manager states that "comments are apologies".  I happen to agree with him.  If you want to explain 1-n lines of code, encapsulate them in a method and name the method to tell the developer what the purpose is of those lines of code.

The developer I was talk with stated he sees the benefits of pair programming and unit testing (phew, thought I was going to really have to get on my soap box).

What do you guys believe?
