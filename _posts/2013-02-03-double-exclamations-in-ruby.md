---
layout: post
title: Double Exclmations !! In Ruby
date: 2013/02/03 00:00:00
category: ruby 
---

Today I hit this in a Ruby example online:

```ruby
def role?(role)
    return !!self.roles.find_by_name(role.to_s.camelize)
end
```

Note the double exclamation (!!). This converts the value to boolean.

!! is just ! (the boolean negation operator) written twice. It will negate the argument, then negate the negation. It’s useful because you can use it to get a boolean from any value. The first ! will convert the argument to a boolean, e.g. true if it’s nil or false, and false otherwise. The second will negate that again so that you get the boolean value of the argument, false for nil or false, true for just about everything else.

For example:

```ruby
"hello"   #-> this is a string; it is not in a boolean context
!"hello"  #-> this is a string that is forced into a boolean
          #   context (true), and then negated (false)
!!"hello" #-> this is a string that is forced into a boolean
          #   context (true), and then negated (false), and then
          #   negated again (true)
!!nil     #-> this is a false-y value that is forced into a boolean
          #   context (false), and then negated (true), and then
          #   negated again (false)
```
  
