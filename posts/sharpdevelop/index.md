.. title: SharpDevelop
.. link: http://lostechies.com/jasonmeridth/2007/11/01/sharpdevelop/
.. description: 
.. date: 2007/11/01 23:02:03
.. slug: sharpdevelop
.. type: text


**_UPDATE: Be aware that SharpDevelop doesn't seem to support the Web Application Project support.  It will handle ASP.NET Web Site Creation (Normal 2.0 web site project) but is doesn't have the ability to handle the legacy (1.1-) way of site project layout._**

**_UPDATE #2: Keyboard shortcuts can be found [here](http://wiki.sharpdevelop.net/KeyboardShortcuts.ashx). The trunk can be found [here](http://wiki.sharpdevelop.net/AccessingTheRepository.ashx) for version 3.0. _**

I know Oren has [commented](http://www.ayende.com/Blog/archive/2007/09/21/ReSharper-for-Boo.aspx) on [SharpDevelop](http://www.icsharpcode.net/OpenSource/SD/) before because of it's Boo support, but I decided to dive into it further today and I'm thoroughly amazed.  I'm not a [Boo](http://boo.codehaus.org/) developer (not yet) so I can't comment to that support yet.  I have used it in the past for [WiX](http://wix.sourceforge.net/) project UI development, because I hate dealing with the XML files for the UI templates for WiX.

Here is a screen shot:

![image](jasonmeridth/files/2011/03SharpDevelop_10570/image_thumb_1.png)

If you can tell:  
Left window is my "Solution Explorer".  There is built-in Subversion support, hence the green checkmarks.  There is good syntax highlighting and intellisense in the main window. I currently have a build file open (XML Tree tab is an option on the bottom, it uses the nant.xsd and it is a more user friendly experience)  The top-right window is a NAnt helper.  It pulls up the targets of my build file and allows me to run it from the IDE.  Also, there is a built-in test runner (bottom-right) window.

What I have installed or am using in Visual Studio 2005/2008:  
[Ankh](http://ankhsvn.tigris.org/) (Subversion)  
[NAnt GUI](http://nantgui.berlios.de/) (NAnt GUI helper) - I only use this for presentations.  I'm a command line guy.  
JetBrains Test Runner [[UnitRun](http://www.jetbrains.com/unitrun/download/index.html)] (Comes with my ReSharper install, you used to be able to download it separately, but not anymore)  
[Votive](http://wix.sourceforge.net/votive.html) (For WiX projects)  
[TestDriven.NET](http://testdriven.net/)  
[NCoverExplorer](http://www.kiwidude.com/dotnet/DownloadPage.html)

![image](jasonmeridth/files/2011/03SharpDevelop_10570/image_thumb_2.png)

This is ALL Built-into SharpDevelop.  I think you have to have NUnit and NCover in your PATH environment variable.

My last selling point was that it has built-in keystrokes for ReSharper-esqe commands.

In [ReSharper](http://www.jetbrains.com/resharper/) you can do Ctrl+N or Ctrl+Shift+N to look for files or classes by name.  In SharpDevelop it is Ctrl+G.  In Visual Studio this goes to a specific line number, but in SharpDevelop it does ALL 3.

![image](jasonmeridth/files/2011/03SharpDevelop_10570/image_thumb.png)

Oh yeah, and guess what......It's FREE and open source.  You need a new feature, contribute. :)

## Comments

**[Sean Chambers](#190 "2007-11-01 23:41:32"):** I am downloading it as we speak. I played with it about a year ago but it didn't have all of those features. I am installing on my vmware fusion xp drive on my macbook right now. Hopefully it runs a little better than VS does in vmware

**[Jason Meridth](#191 "2007-11-02 00:37:26"):** I'm in the same boat sean. I tried it 2 years ago and it was not near what it is now. It loaded my project pretty fast. The only thing I've noticed is that it doesn't have a built-in web server like Visual Studio (Cassini), so when I try to run my web project from the IDE it doesn't work. The other positives outway the negatives so far. I'm very impressed.

**[Sean Chambers](#192 "2007-11-02 00:42:55"):** I am very impressed as well. I have my web project setup through IIS so i dont think the cassini problem will be a problem for me, although it would be handy It is very quick AND lightweight. it runs a hell of alot faster than VS does, thats for sure. i'm going to install it on my work machine tommorrow and see how it runs. I suppose asking for R# integration is too much to ask? =)

**[cramsay](#193 "2007-11-02 00:52:36"):** I tried it a couple of days ago, it's very fast. I like how it doesn't force its own project format on you, meaning you could potentially use SD at home and VS at work. Version 3 will have built-in refactoring and support for additional refactorings as add-ins; if they pull that off I could see it being popular but until then I won't switch because I'm so reliant on R#.

**[Tom Opgenorth](#194 "2007-11-02 02:29:18"):** #Develop has really come a long way in the past three years or so. I've notice that it doesn't seem to want to play nice with VS2005 solutions files though.

**[Sean Chambers](#195 "2007-11-02 03:08:26"):** @Tom that was the problem I saw when I played with it a year ago, although today when I downloaded version 2.2 I opened a 2005 solution and everything seemed to work perfectly. Like I said earlier, the real task will be to open a couple of my larger projects at work and see how it reacts to those. The project I was testing it on in vmware was just a bare bones webapp that I dont have alot of code in atm

**[Joe Ocampo](#196 "2007-11-02 04:02:47"):** reaffirming that VS is notepad with ReSharper. LOL Nope, wait a minute it is has an awesome file management explorer. To bad I always use [Control-N] to Navigate it.

**[Joe Ocampo](#197 "2007-11-02 04:03:50"):** Here is another question if Jet-Brains offered ReSharper for SharpDevelop would you switch?

**[cramsay](#198 "2007-11-02 08:45:25"):** Joe: I'd definitely look at it more seriously. At the moment I'm a bit, "well, it's nice but no R#" so I haven't given it much serious use. Even if it did have R# I might then come across something that was a dealbreaker when I started giving it serious use. That said, there are few things in an IDE with as much awesome-factor as R#, so I can't wait to see what SD3 brings.

**[Jason Meridth](#199 "2007-11-02 11:36:25"):** @Joe: YES! if Re# was a plugin for #Develop. I would switch. As a matter of fact, I switched last night. I'm going to grok #Develop.

**[jlockwood](#200 "2007-11-02 12:25:05"):** I tried using #Develop about 3 years ago and I felt I was better off trying to use Eclipse for C# development. It's really looking nice now. I'll need to try compiling it with mono and see how it fares on Linux...

**[Ben Scheirman](#201 "2007-11-02 17:05:37"):** I'm glad you posted this. I also tried it a while back and it wasn't near ready. Can you post again on things that might not be so nice if you transition from VS 2005 to #D?

**[Jason Meridth](#202 "2007-11-02 17:44:52"):** @Ben: Definitely. I've posted 2 updates to the top of the post already. I just downloaded the 3.0 trunk and installed and it is missing NAnt, and a few other common features, but that is to be expected from Alpha. :)

**[Sean Chambers](#203 "2007-11-02 20:17:14"):** I installed at work today and played with it for a little while. It is really fast on my machine at work that is a little beefier than my macbook. One thing that I don't like too much is the fonts and colors. In VS I have a fonts and colors .settings file that i've carried around for awhile that has alot of special key mappings and coloring that I can't carry to #Develop. I wouldn't say its a deal breaker but it would be nice. I loaded up a large project at work to test it. It loaded so fast that I was going to read an email waiting for it to load and before I could look away it had already loaded the solution. This is probably one of the strongest points for me if you can't tell. Far too often VS hangs or stalls for a second or two. Nothing aggravates me more than when the cursor is supposed to be typing characters and instead it just sits there waiting for the IDE to play catch up. I had a problem with associating a .retl (rhino-etl) file with boo because it didnt have a .boo extension so I posted a question to the forum and had a response within a couple of minutes. The response didn't fix the problem but it's nice to see an active community around it. I'll probably play more with it over the weekend and post some more findings.

**[J.P. Hamilton](#204 "2007-11-08 14:24:59"):** I installed it about a month ago, admittedly just for the Boo support. What a surprise! This is nothing like the SharpDevelop I remember from a few years back. It is very mature.

