.. title: TextMate and Community Server 2008.5
.. link: http://lostechies.com/jasonmeridth/2009/05/21/textmate-and-community-server-2008-5/
.. description: 
.. date: 2009/05/21 08:32:38
.. slug: textmate-and-community-server-2008-5
.. type: text


This is my first blog post from TextMate on my Mac. I'm using the HTML formatting. I will try the markdown and textile versions later. The key to getting this working with Community Server was when you click "Bundles->Blogging->Setup Blogs" and the following template shows up:

# List of Blogs  
#  
# Enter a blog name followed by the endpoint URL  
#  
# Blog Name URL  


you put the following underneath the commented header

My Blog Name http://username@www.mydomain.com/blogs/<api_key>/metablog.ashx#<api_key>

The key part is #<api_key>. api_key in Community Server terms is the portion of your url after domain/blogs/ and before the page requested. Mine is jason_meridth. My full URL for TextMate blogging would be http://myusername_notsharing@www.lostechies.com/blogs/jason_meridth/metablog.ashx#jason_meridth.

Hope this may help a fellow Mac brethren

## Comments

**[Scott C Reynolds](#405 "2009-05-21 12:38:10"):** you are the man! (as always)

**[Scott Watermasysk](#406 "2009-05-21 13:49:31"):** I have used TextMate to blog for a while. Might want to check out http://www.smileonmymac.com/TextExpander/ which can save you the hassle of writing some HTML. -Scott

**[Jason Meridth](#407 "2009-05-21 13:59:19"):** @Scott C Reynolds I am merely a man who stumbled upon an answer and got lucky @Scott Watermasysk If you have any tips, please throw them my way. I will definitely check out TextExpander

**[Ryan Svihla](#408 "2009-06-07 23:03:15"):** Awesome will start blogging in TextMate now

