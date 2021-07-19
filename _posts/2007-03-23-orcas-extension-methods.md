---
title: Orcas - Extension Methods
date: 2007-03-23 21:33:00 -05:00
layout: post
---

Again, I was reading Guthrie's blog and found his post on [Extension Methods](http://weblogs.asp.net/scottgu/archive/2007/03/13/new-orcas-language-feature-extension-methods.aspx)

What this allows a developer to do is extend types without needing to create a static service class.  
It is more like an extension class.

Example:

You want to add a method called IsValidEmailAddress to the base string class:  
  
string email = Request.QueryString["email"];  
  
if ( email.IsValidEmailAddress() ) {  
}   


You would create the following (the this keyword in the parameter list is the key)  


public static class OrcasExtensions  
{  
   public static bool IsValidEmailAddress(this string s)  
   {  
      Regex regex = new Regex(@"^[w-.]+@([w-]+.)+[w-]{2,4}$");  
      return regex.IsMatch(s);  
   }  
} 

Just add the following to your class:

using OrcasExtensions;