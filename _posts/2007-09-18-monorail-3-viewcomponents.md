---
title: Monorail
date: 2007-09-18 15:27:10 -05:00
layout: post
---

#### UNIT TESTING

After the past 2 1/2 posts I've migrated my unit tests to use the [BaseControllerTest abstract class](http://schambers.wordpress.com/2007/09/04/testing-monorail-controllers-from-castles-trunk/) that originated from the [Eleutian guys, but is now a part of the Castle MonoRail trunk download](http://joeydotnet.com/blog/archive/2007/09/06/Quick-Tip-Asserting-response-redirects-in-a-MonoRail-controller-test.aspx).  
Here is my ExampleControllerTests class:
    
    
       1: using Castle.MonoRail.TestSupport;
    
    
       2: using JasonMeridth.Controllers;
    
    
       3: using NUnit.Framework;
    
    
       4:  
    
    
       5: namespace JasonMeridth.Tests.Controllers
    
    
       6: {
    
    
       7:     [TestFixture]
    
    
       8:     public class ExampleControllerTests : BaseControllerTest
    
    
       9:     {
    
    
      10:         private ExampleController exampleController;
    
    
      11:  
    
    
      12:         [SetUp