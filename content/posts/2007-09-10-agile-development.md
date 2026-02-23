---
url: /posts/agile-development
title: Agile Development
date: 2007-09-10 01:27:00 -05:00
layout: post
tags:
- agile
- tdd
---

Currently I'm working on a team of 8 developers and have been practicing Agile for just under 2 years now.  I read about it and tried a couple time before this 2 year span, but didn't realize how wrong I was approaching it.  [Scott Bellware](http://codebetter.com/blogs/scott.bellware/default.aspx) has been posting about how [Agile development does not have the answers](http://codebetter.com/blogs/scott.bellware/archive/2007/09/09/167738.aspx) and this line:

> _"The essence of TDD is a suspension of our belief that we know what we're doing, and a submission to a structured process of exploration and elaboration of ideas."_

and

> _"I think that the difference between a good developer and an excellent developer is the excellent developer's willingness to not know, an openness to explore, and faith in skills that guide solutions to good ends even when the end is not known at the outset."_

The team I'm on practices an [Extreme Programming](http://en.wikipedia.org/wiki/Extreme_Programming) / [Scrum](http://en.wikipedia.org/wiki/Scrum_%28development%29) process and my ~~manager~~ Agile coach, [AgileJoe](http://www.lostechies.com/blogs/joe_ocampo), makes a good point when he states that an XP value he believes should be in the core values is Humility.  [The current list](http://en.wikipedia.org/wiki/Extreme_Programming#XP_values) is awesome, but humility allows for the items that Scott mentions in his post.

When I tried to get a different department in the same company to change it's process to Agile, I met great resistance (as expected).  Change = fear.  The greatest fear was from the programmers on the team that specialized in one section of the software and were afraid of either learning a new portion or having other developers critique their code.  One of the core values of Extreme Programming is courage and it was hard getting that across.  Scott speaks the truth when he states:

> _"Agile will show you more problems than you ever thought you had before you start to see some progress against these problems."_

Much courage is needed to take that step.  If you are blessed to have the process started by an Agile coach, like the team I'm currently on (they had Michael Feathers from Object Mentor pay a visit), then the "sparking" of the process may be a little easier than a complete agile newbie (myself on the other team) trying to get it going.

I don't claim to be a excellent developer or an agile master, but in the environment I'm working in we strive to minimize any hero programmers and focus on code ownership amongst the group.  By doing this you allow for everyone to grok the entire domain.

To expand on his post, if your unit tests are precise and truly cover a specific behavior, it is easier for a future developer to learn and join the rest of the team in mastering the domain.  I won't get into the multiple xDDs you can practice to achieve this, just as long as you have a way of doing it. We practice a mixture of [Test-Driven Development](http://en.wikipedia.org/wiki/Test-driven_development), [Domain-Driven Design](http://www.infoq.com/news/2006/12/domain-driven-design), and [Behavior-Driven Development/Design](http://dannorth.net/introducing-bdd).

![kick it on DotNetKicks.com](http://www.dotnetkicks.com/Services/Images/KickItImageGenerator.ashx?url=http://www.lostechies.com/blogs/jason_meridth/archive/2007/09/09/agile-development.aspx)

## Comments

**[Joe Ocampo](#82 "2007-09-10 04:13:53"):** I prefer the term coach over Manager... :-) Managers manage -- A coach leads! Nice post.

**[jlockwood](#83 "2007-09-10 12:28:14"):** Nice post... Just a couple of quick notes (and history): The addition of 'humility' to the team's core values was inspired by the earlier writings of Scott Ambler as he was developing the concept of Agile Modeling (see Agile Modeling: Effective Practices for Extreme Programming and the Unified Process - Ambler). We thought that humility was a key (and often missing) element in the typical approaches toward team development and threw it in once discovered. Bellware and I were first trying to help the World Savings team we worked with (and that you work with now) move from a disfuntional water fall-based process to an agile approach (namely XP). I think that we both lacked humility (and respect for that matter) at first when trying to sell the idea, largely due to our frustration with heavy resistance from team members on both development and business sides. Had humility and respect been among our watchwords during the process things may have (may have I stress) gone a bit smoother. At the time of the addition of 'humility' to our XP-base core values, the XP core values were (initiated circa 1999): 1\. Communication 2\. Simplicity 3\. Feedback 4\. Courage Over time, I think that the concept of humility has become integral to the team and part of its very culture. I was quite impressed when seeing you guys work recently; the business and developers where playing quite well together and productivity was such that Wachovia has been forced to take notice in the post-merger environment. As I saw on the link you provided, 'Respect' has now been added to the list of XP core values. 'Respect' and 'Humility' are not synonyms, but do seem to have a bit of mutual interdependence. Without either, it's quite difficult to develop a cohesive team. Agile development approaches, like many sports, rely heavily on team cohesion and good 'sportsmanship' among the team's players in order for teams to 'win'. Finally, we did have Feathers come and he was helpful and inspirational (I want to be like him when I grow up...if I grow up). He helped mainly with TDD in C# and introduced us to Fitnesse (this focused on the Simplicity and Feedback values). The team building part, unfortunately, we had to figure out on our own. We brought our own Courage, figured out (through much trial and error) how to improve Communication and Feedback in a way that worked for us, and along the way learned just how important Humility is along the way in helping assure the first four values. Keep up the good fight team Wachovia!

**[Jason Meridth](#84 "2007-09-10 12:36:24"):** Excellent extension to this post Josh. I had heard all the history, but your summary does it justice. Hope you are doing well bro. Keeping the fight. :)
