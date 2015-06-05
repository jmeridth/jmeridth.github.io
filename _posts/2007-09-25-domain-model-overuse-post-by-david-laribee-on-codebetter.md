---
layout: post
title: Domain Model Overuse post by David Laribee on CodeBetter
date: 2007/09/25 12:21:44
---


David Laribee recently posted on [Domain Model Overuse](http://codebetter.com/blogs/david_laribee/archive/2007/09/24/domain-model-overuse.aspx) and my colleague [Joe Ocampo (AgileJoe) responded](http://codebetter.com/blogs/david_laribee/archive/2007/09/24/domain-model-overuse.aspx#comments).  Check out the comments.

Note: If you want to read Fowler's article on AnemicDomainModel, check out the [cached version on Google](http://64.233.169.104/search?q=cache:biq9rdhXyz4J:martinfowler.com/bliki/AnemicDomainModel.html+anemic+domain+model&hl=en&client=firefox-a&gl=us&strip=1), since the entry is down.

I'm not worshipping Joe, but the conversation between him and David is worth reading.

Enjoy.

## Comments

**[Joey Beninghove](#118 "2007-09-25 16:53:16"):** Good discussions indeed! From my perspective, a lot of these DDD approaches and the domain model pattern itself, are just good object-oriented design practices in the first place that help adhere to OOD principles. [http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod] For instance, the Specification pattern, while really nothing more than an implementation of a strategy pattern, can be very useful in a domain model. Very interesting logic can be encapsulated in these tiny highly-cohesive classes (i.e. calculations, policies, criteria, etc.) that can really help to stay as close to SRP & OCP as possible (with OCP arguably being one of the hardest principles to adhere to in a real world system). Not to mention it makes testing these little jokers in isolation very easy. Are you guys making use of Specifications? If so, I'd be curious as to how far you take it? (And yes Joe, I know, "it depends"...) :D

**[Jason Meridth](#119 "2007-09-25 17:08:12"):** We are using it in our domain currently to handle status changes of a loan record. We started using the state pattern but the natural progression elevated to exceed that purpose. Once we put in specifications, we could just say something like: bool canChangeStatusToNewLead = CanChangeStatusFor(LoanRecord, LoanRecordStatusType.NewLead); this is not the exact syntax, but that's how we're using it. You mention criteria. Wouldn't that just be a value object and not really a specification.

**[Joey Beninghove](#120 "2007-09-25 17:17:50"):** Well, yeah, the search criteria data itself would really just be a value object, but the ability to chain together multiple criteria together can be attractive. For example, a tip I picked up from JP was to create your own IRichList interface and overloading Find() and FindAll() to take in an ISpecification implementation. Then you can create a nice mechanism for chaining together specifications when passing them in like: addressBook.FindAll(PersonsOverTheAgeOf16.And(PersonsWhoLiveInTexas)) Simple example, but you get the point. A better example can be found here: [http://devlicio.us/blogs/jeff_perrin/archive/2006/12/13/the-specification-pattern.aspx]

**[Jason Meridth](#121 "2007-09-25 17:27:39"):** Excellent information. Thanks Joey.

**[Jason Meridth](#122 "2007-09-25 17:28:11"):** When are you going to Simpsonize?! j/k

**[Joey Beninghove](#123 "2007-09-25 17:52:24"):** Ok, Ok, already. Guess it's official now... :)

**[Joe Ocampo](#124 "2007-09-25 18:09:25"):** @Joey >"For instance, the Specification pattern, while really nothing more than an implementation of a strategy pattern..." Well that depends ... :-) The model specification as it relates to DDD purpose is to make implicit engineering concepts explicit for the "Ubiquitous Language". The OOP strategy pattern is a form of the EPP specification pattern but within a Domain Model the "Specificaton" is a term reserved for predicate operations that allow for greater incite to be captured towards to model. For instance the method "isCool" evaluates height, dress and odor of a person. In this case the "CoolPersonSpecification" object can be talked towards in a model and everyone understands what it does. Does it use a strategy pattern maybe or is it simply a switch statement encapsulated to provide greater incite? Perhaps. The point is (drum role) it depends! Simplicity first, patterns second. If all you are doing is evaluating 3 criterion maybe a strategy pattern is overkill. The important question to ask is, "When I mention the Cool Person Specification does everyone understand what I am talking about?" If they don't then go back and see if it is even applicable in the domain or does it belong outside the domain layer? "Do you take the blue pill or the red pill?" :-)

**[Joe Ocampo](#125 "2007-09-25 18:23:15"):** Awesome Joey!

**[Joey Beninghove](#126 "2007-09-25 18:24:24"):** Ahh, ok. I see what you mean. BTW, I'm still working my way through the official Evans book, so forgive me if my application of DDD is not quite in-line. :) So I'm currently encapsulating certain calculations into little strategy classes because I already know that the details of *how* the calculations will work is going to change (as in next week). So in this case, my thoughts are that by encapsulating frequently changing logic like this into small isolated classes it will keep me from having to keep modifying my domain objects themselves if all I need to do is introduce a new *implementation* of a certain calculation. As to whether this is just a simple OOP strategy pattern or a DDD specification... well, guess it depends... :) Thanks for the correction Joe!

