---
url: /posts/interface-segregation-principle-isp
title: Interface Segregation Principle (ISP)
date: 2006-12-30 00:38:00 -06:00
layout: post
---

**The Interface Segregation Principle (ISP) - CLIENTS SHOULD NOT BE FORCED TO DEPEND UPON INTERFACES THAT THEY DO NOT USE**

*This is the definition straight out of the [Object Mentor article](http://www.amazon.com/Principles-Patterns-Practices-Robert-Martin/dp/0131857258) book.

Translation:  Avoid "fat" interfaces or interface pollution.  In other words, do not make your classes implement interfaces that have methods/properties the class does not need.  This is a code smell and should be an indicator that the interface should be split into two interfaces and each applied only as needed.

The example in the [article (pgs 2-7)](http://www.objectmentor.com/resources/articles/isp.pdf) explains it all.
