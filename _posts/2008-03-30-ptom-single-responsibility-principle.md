---
layout: post
title: PTOM - Single Responsibility Principle
date: 2008/03/30 00:21:00
---


### The Single Responsibility Principle

This post is about the first letter in Uncle Bob's SOLID acronym, [Single Responsibility Principle](http://www.objectmentor.com/resources/articles/srp.pdf), and a continuation of [The Los Techies Pablo's Topic of the Month - March: SOLID Principles](blogs/chad_myers/archive/2008/03/07/pablo-s-topic-of-the-month-march-solid-principles.aspx).  Sean has already [posted](http://www.lostechies.com/blogs/sean_chambers/archive/2008/03/15/ptom-single-responsibility-principle.aspx) on this, but I'd like to "contribute".  _**Note about the SOLID acronym and this blog "storm"**: This "principle" is more or less common sense, as are most of the other items in the SOLID acronym.  I like the idea of this series because I personally have interviewed with companies who would ask about possible code scenarios and I respond with one of these principles or one of the GOF patterns and they look back at me with a blank stare.  I know these are just labels, but if they can reduce the miscommunication possibilities and start standardizing our industry, I'm all for it.  I know some of the new ideas and labels out there are still being hammered out (i.e., like the BDD discussions as of late), but that is part of the process and what has to happen in such a young industry like ours._

> Single-Responsibility Principle (SRP):  A class should have only one reason to change.

A good anti-example is the [Active Record pattern](http://en.wikipedia.org/wiki/Active_record_pattern).  This pattern is in contradiction of SRP.  A domain entity handles persistence of it's information. (Note: There is nothing wrong with using Active Record; I've recently used it on a quick demo site and it worked perfectly)  Normally, you would have a controller method/action pass a "hydrated" entity to a method of a repository instance.  Like my favorite quote says:

> Talk is cheap, show me the code ~ Linus Torvalds

let's look at some .NET code.

#### **Anti-SRP (Active Record)**

Imagine you have a User entity that has a username and password property.  I'm using the Castle Active Record libraries for this example. [gist id=4542522 file=ptom_single_responsibility_example1.cs] 

#### As you can see you use attributes to dictate how your properties map to columns in your database table.  Your entity name usually matches your table name, when using just the ActiveRecord attribute with no explicit table name (i.e., [ActiveRecord("UserTableName")].

To save the user you would take an instantiated user and just call user.Save();  This would cause an update to fire if the user instance had identity (aka an Id) and insert if it did not. 

#### **Translation to SRP**

What I would normally do is have an architecture like the following: ![image](jasonmeridth/files/WindowsLiveWriter/PTOMSingleResponsibilityPrinciple_13E55/image_4.png) The UserRepository would be used by a web controller (I use monorail for my web projects), being passed a User instance, and Save(user) would be called. [gist id=4542559 file=ptom_single_responsibility_example2.cs] So, what it boils down to is that the user class now knows nothing on how it is persisted to the database. SRP is one of the hardest principles to enforce because there is always room for refactoring out one class to multiple; each class has one responsibility.  It is personal preference because class explosion does cause some people to become code zealots.  One of my other favorite quotes lately is: 

> Always code as if the guy maintaining your code would be a violent psychopath and he knows where you live.

Enjoy!

## Comments

**[Martin Odhelius](#224 "2008-11-18 12:48:53"):** The last pattern you are using actually looks like the Data Acess Object-pattern (DAO) http://en.wikipedia.org/wiki/Data_Access_Object and is in fact much better than the Active Record-pattern in most situations, especially when you want to handle several different data sources or when you want to migrate data between different db:s for example.

