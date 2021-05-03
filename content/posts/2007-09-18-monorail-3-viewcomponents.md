---
title: Monorail
date: 2007-09-18 15:27:10 -05:00
---

#### UNIT TESTING

After the past 2 1/2 posts I've migrated my unit tests to use the [BaseControllerTest abstract class](http://schambers.wordpress.com/2007/09/04/testing-monorail-controllers-from-castles-trunk/) that originated from the [Eleutian guys, but is now a part of the Castle MonoRail trunk download](http://joeydotnet.com/blog/archive/2007/09/06/Quick-Tip-Asserting-response-redirects-in-a-MonoRail-controller-test.aspx).  
Here is my ExampleControllerTests class:

```csharp{linenos=table}
using Castle.MonoRail.TestSupport;
using JasonMeridth.Controllers;
using NUnit.Framework;

namespace JasonMeridth.Tests.Controllers
{
    [TestFixture]
    public class ExampleControllerTests : BaseControllerTest
    {
         private ExampleController exampleController;

         [SetUp]
```
