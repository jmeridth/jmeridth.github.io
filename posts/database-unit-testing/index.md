.. title: Database unit testing
.. link: http://lostechies.com/jasonmeridth/2007/04/06/database-unit-testing/
.. description: 
.. date: 2007/04/06 14:31:00
.. slug: database-unit-testing
.. type: text


**Question**:  _How do you handle database unit testing?_

**My current position**:  We utilize a template pattern via a base Test Fixture and start the transaction and roll it back at TearDown.  We have an entire test project of this type of interaction that gets called every time someone checks in.

**Outside projects**:  I have a manual CCNet farm that I fire if I know the code I've checked-in has messed with or could potentially mess with the database interaction.  I also have it fire every night, just for safe measures.

**Noticeable Options**:   
_NDbUnit_ \- I've heard of and looked at the NDbUnit website and will be investigating it further.  My colleague Nelson Montalvo has also looked into it and even blogged about it [here](http://bignellie.blogspot.com/2006/12/supporting-unit-of-work-in-ndbunit.html).  My code is currently .NET 2.0 and was thinking about upgrading and utilizing 3.0 features.  Unfortunately I noticed the NDbUnit homepage stating that it has been tested with .NET version 1.1, but no mention of 2.0 or 3.0.  
  
Bill McCafferty (the famous author of the [NHibernate Best Practices article on CodeProject](http://www.codeproject.com/aspnet/NHibernateBestPractices.asp)) posted [last month](http://devlicio.us/blogs/billy_mccafferty/archive/2007/03/29/unit-test-independence.aspx), that he would suggest NDbUnit, so I'm going to seriously check this tool out.