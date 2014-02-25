.. title: Law of Demeter (Principle of Least Knowledge)
.. link: http://lostechies.com/jasonmeridth/2007/01/10/law-of-demeter-principle-of-least-knowledge/
.. description: 
.. date: 2007/01/10 00:46:00
.. slug: law-of-demeter-principle-of-least-knowledge
.. type: text


I was reading up on the Law of Demeter again after reading [Jeremy Miller's post about orthogonality](http://codebetter.com/blogs/jeremy.miller/archive/2007/01/08/Orthogonal-Code.aspx) (good post by the way).

**The Law of Demeter** (LoD from now on) was created at NorthEastern University, Boston in 1987 while a team was working on the Demeter project.  
LoD dictates that object A, when calling object B should call a service on object C through B.  
  


* * *

_Example:_

Bad (Common):   
inventory.SalesInfo.Items.Count = 2500;  
  
Good:  
SalesInfo si = inventory.SalesInfo;  
int salesItemsCount = si.GetSalesItemsCount();  


_[granted this might possibly be a violation of Single Responsibility Principle (SRP)  \- Thanks Josh (Joshua Lockwood)]_

* * *

I'm definitely guilty of violating this "law".  I know via reading and experience that this idea does help decouple your code.  You are able to re-use and place your code under test coverage more easily.

LoD brings out the basic OO principle of encapsulation, hence the name "Principle of Least Knowledge".  With our current IDEs out there today it is very easy to forget about not walking a list of dots.  What I mean is, if you have more than 1 dot in your call (i.e., person.spouse.name (bad) instead of person.GetSpouseName() (good)) you are most likely violating LoD.

An idea that Deane had on his post about LoD (hist first comment), was to create a tool that would walk a developer's code and let the developer know if they have violated LoD.  I can see writing something like this using reflection in Java/.NET.  An idea for the future maybe.

Two books to read about this:  
[Code Complete (2nd Ed.) by Steve McConnell](http://www.amazon.com/Code-Complete-Second-Steve-McConnell/dp/0735619670/sr%3d1-1/qid%3d1168346902/ref%3dpd_bbs_sr_1/105-8994370-6387607%3fie%3dUTF8%26s%3dbooks)  
[Pragmatic Programmer by Thomas, Hunt](http://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X)

[If you look at the first amazon link you can buy both books together for ~$66 - very much worth it]