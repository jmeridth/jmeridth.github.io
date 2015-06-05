---
layout: post
title: MonoRail #5: Sending an Email and Authentication
date: 2007/11/03 01:59:40
---


### RECAP

I've been pretty busy as of late and even had some issues with the way I was trying to unit test validation.  As you can see [here](http://www.lostechies.com/blogs/joeydotnet/archive/2007/10/25/monorail-controller-test-analysis-problem-and-resolution.aspx), I was able to get some help from [Joey](http://www.lostechies.com/blogs/joeydotnet) on this and it has made me realize that I need to re-write my MonoRail Validation post to use the "correct" manner of validation.  Even Oren agrees that the [validation](http://www.ayende.com/Blog/archive/2007/10/21/The-IoC-mind-set-Validation.aspx) library in MonoRail works, it is just not the ideal way of doing it.

### SENDING AN EMAIL

You have to do 3 things to send an email successfully:

1\. Write your unit test showing your expectations of the code:
    
    
       1: using Castle.MonoRail.TestSupport;
    
    
       2: using JasonMeridth.Controllers;
    
    
       3: using JasonMeridth.Models;
    
    
       4: using NUnit.Framework;
    
    
       5:  
    
    
       6: namespace JasonMeridth.Tests.Controllers
    
    
       7: {
    
    
       8:     [TestFixture]
    
    
       9:     public class ContactControllerTestCase : BaseControllerTest
    
    
      10:     {
    
    
      11:         private Contact contact;
    
    
      12:         private ContactController contactController;
    
    
      13:  
    
    
      14:         [SetUp