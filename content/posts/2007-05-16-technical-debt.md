---
url: /posts/technical-debt
title: Technical Debt
date: 2007-05-16 01:18:00 -05:00
layout: post
tags:
- agile
- tdd
---

**"_You have a piece of functionality that you need to add to your system. You see two ways to do it, one is quick to do but is messy - you are sure that it will make further changes harder in the future. The other results in a cleaner design, but will take longer to put in place_."** ~ [Martin Fowler](http://www.martinfowler.com/bliki/TechnicalDebt.html)

Oren (Ayende) [posted](http://www.ayende.com/Blog/archive/2007/05/04/Beware-of-the-technical-solution.aspx) about "drawing a line in the sand" when it comes to making the decision about when to "hack" your software for some new business requirement.  He is all about refactoring your code to allow for the change to be implemented and maintained correctly.  I agree completely.  In the past we (developers) have all been guilty of "hacking" software to get it out the door to please the client.  This results in a maintenance nightmare and if we don't take the time to refactor the code, we know the next developer after us, sometimes even ourselves, won't be able to extend the domain model easily.

On one side project, the team I was on had test coverage on the domain model and deployed the code successfully.  There were 3 bugs (business requirements that were misunderstood prior to deployment) and I made the changes the next iteration.  At least I tried.  The domain was VERY ugly.  Do to some quick and dirty coding strategies, the code became unextensible.  I spent more time refactoring the code to make it extensible than I did implementing the changes.  The client was someone who understood software development and didn't mind the time necessary to make the changes.  They were especially happy when the next time they had changes, they were implemented in 1 iteration (1 week).  This was only possible due to the changes made in the prior release (refactoring).

This helps me re-emphasize RED, GREEN, REFACTOR.  Write a failing test, make it pass (at all costs), and then refactor.  I've met too many developers who have been awesome at red and green, but not refactor (I am by no means a master either).  Ideally, if the test is truely a unit test, the refactor should not be very hard or take very long (Hopefully).

Refactoring helps us avoid technical debt.  [Ward Cunningham](http://www.c2.com/cgi/wiki?ComplexityAsDebt) puts it best with "_Refactoring is like repaying principal_".

Reducing the "interest" payments in the future by paying down the "principal" is a good thing.  Of course, ideally, developers should refactor quickly and effectively after every unit test, but we all have been in a shop that expects to release on a specifdate.  We can get test coverage and context coverage and have all green tests, but still create technical debt.  In this situation, I believe it is acceptable as long as there is intent and action taken to bring the technical debt down ASAP.  I've worked on software that needed to get out to market to beat the competition.  It happens.

[Jeffrey Palermo](http://codebetter.com/blogs/jeffrey.palermo/default.aspx) recently gave a presentation at the Austin .NET Users Group Code Camp about "Fundamentals of modern programming" and the main focus was to avoid complexity.  He gave good insight into this and he will be speaking at the Alamo Coders meeting on July 10, 2007 and presenting the core of that presentation.
