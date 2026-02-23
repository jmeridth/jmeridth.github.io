---
url: /posts/people-vs-tools
title: People vs. tools
date: 2007-11-26 00:38:00 -06:00
layout: post
tags:
- agile
- alt-net
- ci
- nant
---

I'm not a very theoretical guy.  I don't like to discuss things to no solution.  When presented with a new idea, I like to see the code, tool, or mechanism that helps put that theory/idea into action.  I'm fine tuning (still working very hard at) my people skills.  I know that in order for software to succeed it's the communication that matters.  I can usually make people think about what they want and they usually know they need to be prepared when they approach me, because I don't like to waste time.  I like the occasional "check my email" or "watch that YouTube video"; so don't get me wrong.

One of the **best** lessons I got from my weekend in Austin during the ALT.net conference was the following line from the Agile Manifesto:

> _"Individuals and interaction over processes and tools."_

My first interaction with Agile was in 2003 and it was a bad one.  After that I got onto a team with a manager that was trying to make the transition from Corporate Waterfall to some form of Agile/Extreme Programming.  Another team on campus was actually already practicing Extreme Programming (the team I'm currently on) and we tried to interact with them as much as possible.  A co-worker and I went to design patterns sessions with the other group and also tried to have daily stand-ups on our own team.  We had a very frustrating build process and it was slightly automated but still required a great deal of manual interaction and knowledge.  Unfortunately, I started getting pinned down as our "build guy".  I asked one of the guys on the other team what they were using and that's when I starting using NAnt and CC.net.  From this experience, I completely understand [Ian's recent experience and choice with going after the build first.](http://codebetter.com/blogs/ian_cooper/archive/2007/11/19/which-practices-to-implement-first.aspx)

The reason I bring this up is because I had a good discussion with some colleague's about what to do first when trying to get a team to go to agile.  My immediate response was to attach a weak point, which is usually the build process.  A continuous integration server using NAnt can usually take care of that pain.  It took 2+ hours for my colleagues to make me realize that I was approaching the process in the wrong manner.

It doesn't matter how many tools or processes you put in place, if you haven't helped the team to learn to communicate or commence in knowledge sharing, they will do no good.

Another recent experience was with stories names at my current employer.  Unfortunately, some of our stories names have turned into 3-5 word phrases, therefore leading to some ambiguity about what the expected behavior is of the story.  I had been introduced to Dan North's "As a `<x>`, I want to `<y>`, So that I can `<z>`" a while ago.  After recently seeing some passion around stories I re-read about the format and decided to pitch to our Systems and Business Analysts.  I didn't take the time to access how big of a change/idea this really was going to be.  One of the suggested solutions I was given was to schedule time for training so that the Systems and Business teams have the ability to make inquiries and gain a better understanding of the change.  Common sense solution, but it again highlighted the idea of focusing on the people and not the process/tool.

What experience do you guys/gals have with tools vs. people?  Did you have a team respond to a tool/process that did help in your software creation?
