.. title: How to Capture the Exception Message From Assert.Throws in NUnit
.. link: http://blog.jasonmeridth.com/2012/03/23/how-to-capture-exception-message-from-assert-throws.html 
.. description: 
.. date: 2012/03/23 00:00:00
.. slug: how-to-capture-exception-message-from-assert-throws 
.. type: text
.. tags: .net, testing 

In the past I’ve used:

```csharp
[ExpectedException(typeof(CustomException), ExpectedMessage="blah blah blah")] 
```

to set an exception expectation and assert on the message. With the recent releases of NUnit I’ve finally transitioned all my code to use:

```csharp
Assert.Throws<CustomException>(() => someType.someMethod(someValue));
```

or

```csharp
Assert.Throws<CustomException>(someType.someMethod);
```

if the method has no parameters.

Only lately have I needed to capture the exception message and validate it. To do this you do the following:

```csharp
var ex = Assert.Throws<CustomException>(() => someType.someMethod(someValue));

Assert.That(ex.Message, Is.EqualTo("expected message here"));
```

I am blogging about this because I keep forgetting how to capture the exception message. Hope it helps someone else.
