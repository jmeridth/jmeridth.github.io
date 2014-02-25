.. title: Naming your test methods
.. link: http://lostechies.com/jasonmeridth/2008/02/10/naming-your-test-methods/
.. description: 
.. date: 2008/02/10 04:23:43
.. slug: naming-your-test-methods
.. type: text


Today I had an opportunity to go to the TDD Coding Dojo hosting by [Chad Myers](http://feeds.feedburner.com/ChadMyersBlog) and [Ray Houston](http://www.rayhouston.com/blog) and I had a blast.  Some of the attendees have been doing TDD for a while (some have even migrated to instituting BDD into their development process) and some of them were trying to see what TDD was all about.  I think those people left with a better understanding of what TDD truly is and can be in their own development environments.

Getting to the purpose of this post:  I was noticing that there was a lot of hang up on test method names during the dojo.  I know that you almost can't even write a test without knowing what you want to assert on your domain/service/etc..  I personally sometimes start with the following:
    
    
       1: [Test]
    
    
       2: public void X()
    
    
       3: {
    
    
       4:  
    
    
       5: }

 

After making the test fail, I rename it to this (say this test was in the context of a US citizen having a passport):
    
    
       1: [Test]
    
    
       2: public void should_be_able_to_travel_abroad()
    
    
       3: {
    
    
       4:  
    
    
       5: }

 

I usually write my test and my assertions, just to "do the simplest thing to get it to work".  I apply that philosophy to TDD too.  I want to do the simplest thing to get through Red-Green-Refactor.  I've paired with developers -- and have been guilty of this in the past too -- that spend more time on thinking of the test method name or the class context name instead of writing code.  It's a test in the first place, right?  I'm not "Joshing" the method-naming-first developers.  I can appreciate the fact that this is a personal choice.  I also expect to be asked, "how can you write your test if you don't know what you are going to test?"  My answer is, "I let the code tell me and I just want fingertips on the keyboard".  Hell, that is what F2 (Rename in ReSharper) is for.  I rename my method and context (TestFixture class name) accordingly after I see Red.  If upon passing and refactoring the test, the name needs to change again, hit F2.

What are your thoughts?

## Comments

**[Chris Patterson](#214 "2008-02-10 16:14:46"):** A good way to break the log jam in naming your tests is to look at the acceptance criteria of the story you are developing. \- When the passenger is traveling to another country, they must have a passport. public class When_the_passenger_is_traveling_to_another_country() { [Test] public void They_must_have_a_passport() { } } Just an example I know, but it makes sense if you start from a well defined story with solid acceptance criteria.

**[Christopher Bennage](#215 "2008-02-11 14:10:28"):** I pretty much do the same thing as you Jason. I care a lot about names, but I was wasting a lot of time naming things up front. Now, I either 'X' or best guess and take solace in the fact that I can easily F2 it as soon as I know more.

**[joeyDotNet](#216 "2008-02-11 18:19:38"):** The only thing you don't get with F2 is the ability to easily create a sentence like test name by actually writing a sentence. At least not as easily. One of my R# live templates (nt) is for creating a new test which looks like this: [Test] public void "TESTNAME"() { } With the TESTNAME part highlighted so I can just start typing a sentence including spaces. Then a short Alt-S + Alt-U later (spaces to underscores) I'm in business...using a tweaked version of the BDD macro that JP, Scott, Joe and others have showed. Might seem like a small thing, but I've found it speeds me up. And of course you can always F2 it later if you need to change it.

