---
url: /posts/monorail-4-validation
title: MonoRail
date: 2007-09-26 15:08:25 -05:00
layout: post
tags:
- monorail
- castle
- dotnet
---

This post was decided upon after watching [Hammet](http://hammett.castleproject.org/)'s [screencast](http://hammett.castleproject.org/wp-content/uploads/2007/01/mr%20formvalidation.html) on using attribute-based validation in MonoRail.

***NOTE**: I do not agree with embedding validation into the domain model.  I would prefer a service handle this, but I'm utilizing the validation that is in the framework.  I've been skimming some of Bill McCafferty's MonoRail posts and have seen him use items like fValidate, but haven't had an opportunity to use them.  Anyone have any preferences?

Be aware that I'm using the latest trunk code: [Get it here from the Castle MonoRail build server](http://builds.castleproject.org/cruise/index.castle).

First, you need a reference to Castle.Components.Validator in your project:
![image](jasonmeridth/files/2011/03MonoRail4Validation_11854/image_thumb.png)

## THE MODEL

Next, you need to add the necessary attributes to the domain entity's properties:

       1: using Castle.Components.Validator;


       2:


       3: namespace JasonMeridth.Models


       4: {


       5:     public class Contact


       6:     {


       7:         private string name;


       8:         private string email;


       9:         private string message;


      10:


      11:         [ValidateNonEmpty("Name is a required field")

## Comments

**[cramsay](#127 "2007-09-26 17:08:12"):** Hi Jason, Did the error you were getting in IE7 match the one in that blog post? AFAIK the MR validation uses this library: <http://www.tetlaw.id.au/view/javascript/really-easy-field-validation> That in turn uses prototype, which should be able to handle inserting stuff in IE7 with ease. I assume the error was happening when the validation messages were trying to appear?

**[Jason Meridth](#128 "2007-09-26 19:38:08"):** I did comment on Hammett's post but can't find the comment. Did he update the blog entry? Where is it exactly? Nice post on validation. I will definitely try it out. Yes, the error was appearing when the messages were trying to appear.

**[Joe Ocampo](#129 "2007-09-26 20:21:19"):** Nice post... Don't know how crazy I am about decorating my Domain object with validation constructs BUT I am in simplification rehab for this. (mumbling to self) must simplify, it will be ok. must simplify, its ok..... :-)

**[Sean Chambers](#130 "2007-09-26 22:07:00"):** Jason, Very detailed post! I agree with Joe that I cringe at the idea of decorating domain objects with validation attributes. Although I have done quite a bit of research and thought about it alot without coming up with a better scenario without creating more headaches as a result. At one point in a recent project I had a generic ValidationBase controller that the controller derived from and I could then call a Validate method returning errors if not passed. This was for a Controller Wizard, hence the generics. I have been thinking about this a lot recently so perhaps I can come up with an alternative. Great post, keep it up!

**[Jason Meridth](#131 "2007-09-27 00:03:59"):** I completely agree with you and Joe, hence my second opening paragraph. I love the idea of a ValidationBase controller. I'm check out Colin's javascript validation stuff and I look forward to posts about your base validation mechanism. Excellent!

**[joeyDotNet](#132 "2007-09-27 00:51:41"):** Well I'd agree mostly about not wanting to put a bunch of validation attributes on domain objects. BUT! Like Joe, I too have been applying the "replace unnecessary complexity wth simplification" refactoring to myself for a while now. (Hmm, refactoring *yourself*, smells like a blog post...) :) And it's all the Castle project's fault when I saw the simplicity of how quickly you could get a decently designed web app up and running using MonoRail + ActiveRecord. Now that I'm digging into RoR, it's like that whole Castle MR + AR experience all over again, but this time it's like X 10. There really is just something beautiful about having lines like this in your domain object: ` validates_presence_of :title validates_numericality_of :quantity ` especially when you can constrain them like this: ` validates_presence_of :title :on => :create ` I dunno. It's definitely starting to grow on me. And I have a feeling that an Active Record implementation in a dynamic language is completely different than in a static language when it comes corrupting your design. But, I'm still learning... (Sorry this kinda turned into a AR comment, but is kinda along the same lines...)

**[deman](#133 "2008-03-05 12:04:29"):** Jason, I'm waiting for your authentication post. Or did I miss it somewhere? Thank you.

**[Isidro](#134 "2008-10-23 15:09:54"):** I'm having troubles with regex validations. If I put any kind of regexes in the validators the validation stops working! Is this a know issue?

**[Jason Meridth](#135 "2008-10-28 12:11:28"):** @ isidro Whenever that happens to me, it isn't the Monorail Validator, it's my regex. I use Roy Osherove's Regulator tool to test my regex queries and that usually straightens me out. Hope this helps.
