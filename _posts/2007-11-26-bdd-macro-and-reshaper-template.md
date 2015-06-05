---
layout: post
title: BDD macro and Reshaper Template
date: 2007/11/26 01:58:35
---


My colleague, [Joe Ocampo](http://blog.agilejoe.com), created a ReSharper template:
    
    
       1: [Test]
    
    
       2: public void 
    
    
       3:    "$Specification$"()

To add the template, go to ReSharper->Options in the menu:  
  
![resharper_menu](blogs/jason_meridth/WindowsLiveWriter/BDDmacroandReSharper_11F81/resharper_menu_thumb.jpg)

Then choose "Live Templates" underneath the Templates heading from the items on the left of the popup window.  Under the "User Templates" section create a new template called "test" with the text above:

![resharper_live_templates](blogs/jason_meridth/WindowsLiveWriter/BDDmacroandReSharper_11F81/resharper_live_templates_thumb.jpg)

When you write your unit test fixture with the "Given, When, Should" format, these items come in handy.  Once you get ready to write your test, you can just type the word "test", then press tab and get the following in Visual Studio:

![image](blogs/jason_meridth/WindowsLiveWriter/BDDmacroandReSharper_11F81/image_thumb.png)

Ignore the red underlines and why the "TestName" word is on the next line.  The red lines will disappear after all of this is complete and the new line is necessary for the Visual Studio macro we're about to create (so it can parse your test method name correctly).

You have to add a macro to Visual Studio via the Tools->Macros->Macros Explorer menu option (or use Alt+F8):

 

![macros_menu](blogs/jason_meridth/WindowsLiveWriter/BDDmacroandReSharper_11F81/macros_menu_thumb_1.jpg)

This will open the macros window.  Right-click "MyMacros" and choose "New Module":

![macros_window](blogs/jason_meridth/WindowsLiveWriter/BDDmacroandReSharper_11F81/macros_window_thumb_1.jpg)

Name the module TestMethodNameFormatterForBDD (or whatever you want to call it):

![new_macro_window](blogs/jason_meridth/WindowsLiveWriter/BDDmacroandReSharper_11F81/new_macro_window_thumb.jpg)

This will add it back to the Macros window.  Double-click the new macro or right-click and choose "Edit".  This will open the Microsoft Visual Studio Macros (MVSM) IDE.  Select all and replace the text with the following: