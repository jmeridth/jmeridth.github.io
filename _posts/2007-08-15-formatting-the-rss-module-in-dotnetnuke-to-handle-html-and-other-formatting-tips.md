---
layout: post
title: Formatting the RSS Module in DotNetNuke to handle HTML and other formatting tips
date: 2007/08/15 14:58:40
---


I'm currently in the process of moving the [Alamo Coders](http://www.alamocoders.net) website to [DotNetNuke](http://www.dotnetnuke.com) and I'm being introduced to the details of DNN.

By default, the RSS Module isn't HTML friendly.  However, by adding the following to an xsl tag:  
  
value-of disable-output-escaping="yes"

**Example:  
Before**: <xsl:value-of select="description"/>  
**After**: <xsl:value-of disable-output-escaping="yes" select="description"/>

This allows for HTML encoding in your RSS feed.

Another formatting item is to limit the number of items that show in the module:

To show only the first 5 items:

<xsl:if test="position() &lt; 6">  
        <br />   
        <strong><a href="{link}" target="_main"><xsl:value-of select="title"/></a></strong>  
        <br />   
            <xsl:value-of select="pubDate"/>   
        <br />   
</xsl:if>

Another format to use is: 

<xsl:for-each select="channel/item[position() &lt; 6]">

Hope this helps someone else, like it helped me.

I'm still trying to get the items in the for-each loop to be able to grab it's channeltitle while in the loop.  channel_title does not work.  Anyone have any ideas?

Reference: [Setting up RSS News Feeds XSL Stylesheet, Tutorial](http://www.dnncreative.com/Home/RSSNewsFeedXSLStylesheet/tabid/162/Default.aspx)  
Thanks to Eric Hexter of the [Austin .NET Users Group](http://www.adnug.org) for pointing me in the right direction.

## Comments

**[David Dobbins](#63 "2007-08-15 16:27:12"):** Since you're inside the channel/item element while you're in the for-each, wouldn't  get you ttitle of the item? or alternately, if you are looking for the channeltitle and not the item's, use:  -david

**[Jason Meridth](#64 "2007-08-15 18:07:46"):** That worked...Brain fart on my part. Thanks David. I guess ttitle is not what I wanted. I'm looking for the name of the blog that the item is coming from. I'm still searching to see what element constitutes that information. Example: I want the items to look like: J.D. Meridth : A blog entry about something. right now it does: Los Techies : A blog entry about something.

**[David Dobbins](#65 "2007-08-15 18:47:12"):** You got me on that one. Looking at the XML from feedburner for this page, I'm getting that your channtitle is "J.D. Meridth". In fact, I don't see "Los Techies" (with the space) anywhere in the feed. Am I looking at the right feed?

**[Jason Meridth](#66 "2007-08-15 21:17:19"):** You are correct. I grabbed the RSS feed from the aggregate of all the LosTechies blogs. If I grab the feebburner from my blog, the channel name is correct. A friend has a console app that will aggregate multiple blog feeds together and then prepend the items with the correct channtitle. An example is on http://adnug.org Thanks for the feedback David.

