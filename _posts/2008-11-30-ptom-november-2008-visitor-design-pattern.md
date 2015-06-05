---
layout: post
title: PTOM: November 2008: Visitor Design Pattern
date: 2008/11/30 21:15:00
---


## Definition

Visitor Design Pattern - _"_Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates. " [dofactory.com](http://dofactory.com/Patterns/PatternVisitor.aspx) Another term you may hear when working with the Visitor Pattern, is [Double Dispatch](http://en.wikipedia.org/wiki/Double_dispatch).  How that applies to Visitor is that the accept method takes a visitor instance, which in turn  has a visit method that takes the concrete instance (aka "this").  Inside the visitor visit method is where the core of the visitor pattern occurs.  It is where you can extend the concrete class without actually editing the concrete class. _![image](//lostechies.com/jasonmeridth/files/2011/03/image_thumb.png)_

## Open Closed Principle (OCP)

"...using the visitor pattern helps conformance with the open/closed principle." ([Wikipedia](http://en.wikipedia.org/wiki/Visitor_pattern))  The [Open/Closed Principle](/blogs/joe_ocampo/archive/2008/03/21/ptom-the-open-closed-principle.aspx) is that "a class is open for extension, closed for modification". ([Thank you Mr. Meyer](http://en.wikipedia.org/wiki/Open_Closed_Principle))  I recently used the Visitor pattern inline with usage of a State Pattern.  The Visitor would be able to determine, based on it's algorithms, which was changing regularly by the needs of the end user, whether an object could move to the next state in the machine.  Adhering to our theme, a coffee shop, I decided to generat a paycheck stub .  My C# example is showing how to report the coffee shop employees earned wages, deductions via sick days and number of vacation days taken: 

## C# Code

Test Firsts (NUnit): [gist id=1067984] I have two test fixtures, one for hourly employees and one for full-time employees.  Hopefully, via my rough version of Behavior Driven Development (BDD), you can read my tests without any problems. Implementation: [gist id=1067988] Please remember, this is "blog friendly" code.  I would definitely break the visitor class apart into a few classes (i.e., WageCalculator, SickPayDeductionCalculator, etc). 

## Ruby Code

Please understand that I'm a Ruby newbie and I'm petty sure there is a more "Ruby-ish" way to do this._ _I've recently been placed on a Ruby team and I'm making the transition from the static language mind-set to the dynamic language mind-set.  I do understand with mix-ins you can dynamically add functionality to a class based on context, so visitor may not be necessary at all.  I'm still grokking that concept.  I still believe in the Open/Closed principle, but it may be moot with dynamic languages. It's actually very exciting being a newbie developer again.  It feeds my insatiable need to learn. Test (Using RSpec): [gist id=1067994] Implementation: [gist id=1067996] 

## What I Learned

I personally use the strategy pattern more than any other pattern.  That is why I chose this pattern.  So I could understand it better. A good example I saw recently, using lambdas and all the new .NET features was [Chad's comment](http://mokhan.ca/blog/CommentView,guid,0480cc5f-54e4-452f-b0d5-661f0a8289d7.aspx#commentstart) ([pastie.org](http://pastie.org/245770)) on [Mo's Recursive Command Post](http://mokhan.ca/blog/2008/08/01/Recursive+Command.aspx) Hope this helps someone understand the Visitor Design Pattern better.