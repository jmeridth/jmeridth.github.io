---
title: System.Object.GetHashCode()
date: 2006-12-12 00:28:00 -06:00
layout: post
---

After reading [Ayende's blog about GetHashCode](http://www.awprofessional.com/content/images/0321245660/items/wagner_item10.pdf) file about the pitfalls of GetHashCode. 

I've coded it in a Java class but have yet to apply it anywhere else.

I don't believe I've used any objects as keys in my applications.  I mainly use value objects.  From a friend, I've heard that .NET automatically prevents collisions by doing chaining (if two objects have the same hashcode, the values are link-listed off that key)

![Hash collision resolved by chaining.](http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/HASHTB32.svg/362px-HASHTB32.svg.png)   
Hash collision resolved by chaining.  
  
Image borrowed from [Wikipedia](http://en.wikipedia.org/wiki/Hash_table)