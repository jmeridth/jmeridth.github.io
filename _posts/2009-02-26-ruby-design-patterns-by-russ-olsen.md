---
layout: post
title: Ruby Design Patterns by Russ Olsen
date: 2009/02/26 04:29:00
tags:
  - ruby 
  - design patterns
---

![](http://www.informit.com/ShowCover.aspx?isbn=0321539265&type=f) 

After nudging by [Joe Ocampo](http://agilejoe.lostechies.com/) and [Scott Bellware](https://twitter.com/sbellware), I finally sat down at finished "Design Patterns in Ruby" by Russ Olsen. The format of most of the chapters made the book an interesting read:

1. A introduction to why you might need the pattern
1. A static language developer's approach with the Ruby language
1. A seasoned Ruby developer's approach to the design pattern
1. Using and Abusing
1. In the wild
1. Wrapping up

Some of the items that I learned [LosTechies is not a cult contrary to some of the examples you read below; some of the examples below are using LosTechies nomenclature but closely resemble what the author had in the book] If any of the stuff below intrigues you: **GO BUY THE BOOK**. You won't regret it. Even if you are trying to understand patterns in another language. Russ Olsen does an excellent job explaining the INTENT of the patterns. FUN When teaching the reader about "Truth, Lies, and nil", the author even pokes fun at himself: 
    
```ruby
'russ' == 'smart'    # sadly, false
```

* * *

BOOLEAN In Ruby, zero, being neither false nor nil, evaluates to true in Boolean expression. 
    
```ruby    
if 0
 puts('Zero is true!')
end
```

will print out: Zero is true!

* * *

ARRAYS Points for matrix reference in array examples 
    
```ruby    
x = []
y = Array.new
a = ['neo', 'trinity', 'tank']
```

* * *

REGULAR EXPRESSIONS The flow of the language when creating regular expressions: 
    
```ruby    
/old/ =~ 'this old house'     # 5 - the index of 'old'
/Russ|Russell/ =~ 'Fred'      # nil - Fred is not Russ nor Russell
/.*/ =~ 'any old string'      # 0 - the RE will match anything
```

* * *

ARBITRARY PARAMETERS Any author that uses DC comic character to explain arbitrary numbers of arguments, is a winner in my mind: 
    
```ruby    
def describe_hero(name, *super_powers>
 puts("Name: #{name}")
 for power in super_powers
     puts("Super power: #{power}")
 end
end
describe_hero("Batman")
describe_hero("Flash", "speed")
describe_hero("Superman", "can fly", "x-ray vision", "invulnerable")   # w00t!
```

* * *

DUCK TYPING AND UNIT TESTS He mentions duck typing and the fact that "Unit Tests Are Not Optional" is a section heading when teaching the Template Method Pattern. 

* * *

PROCS AND BLOCKS 
    
```ruby    
# using the do/end notation
hello = lambda do
 puts('Hello')
 puts('I am a follower of Pablo')
end
#you may use curly braces instead of do/end
hello = lambda {
 puts('Hello, I am a follower of Pablo')
}
#the preferred way to use curly braces
hello = lambda {puts('Hello, I am a follower of Pablo')}
```

* * *

STRATEGY PATTERN using proc-based formatters to create a ruby-based strategy pattern 
    
```ruby    
class Report
 attr_reader :title, :text
 attr_accessor :formatter
 def initialize(&formatter)
   @title = 'Monthly Report'
   @text = ['Things are going', 'really, really well.' ]
   @formatter = formatter
 end
 def output_report
   @formatter.call( self )
 end
end

HTML_FORMATTER = lambda do |context|
...code to output HTML
report = Report.new &HTML_FORMATTER
report.output_report
```

You could create any type of formatter you want in a proc instead creating new classes. 

* * *

OBSERVER PATTERN Modules exist that encapsulate things that some of us static developers might already be used to: 
    
```ruby    
require 'observer'
class Employee
include Observable
attr_reader :name, :address
attr_reader :salary
def initialize( namtitle, salary)
 @name = name
 @titletitle
 @salary = salary
end
def salary=(new_salary)
 @salary = new_salary
 changed
 notify_observers(self)
end
end
```

* * *

ITERATOR PATTERN Internal Iterators versus External Iterators: (had never heard it put this way) External iterator - client drives the iteration...you won't call next until you are good and ready for the next element Internal iterator - the aggregate relentlessly pushes the code block to accept item after item. 

* * *

COMMAND PATTERN The Command pattern translates very smoothly into code blocks. Here is a PabloForPresidentButton class reworked to use code blocks: 
    
```ruby    
class PabloForPresidentButton
attr_accessor :command
def initialize(&block)
 @command = block
end
#
# Lots of button drawing and management
# code omitted ...
#
def on_button_push
 @command.call if @command
end
end

new_button = PabloForPresidentButton.new do
#
# Make a developer stop looking so nerdy
# by placing one over his pocket protector
#
end
```

The author does not diminish the needs for classes. For straightforward actions, use a Proc object. For complex object or objects that will carry around a lot of state, create a command class. 

* * *

ADAPTER PATTERN Instead of adhering to some interface and trying to create your adapter, why not just extend the original class. 
    
```ruby    
# load original class
require 'lostechies_text_object'
# now add some methods to original class
class LosTechiesTextObject
def sponsor
 return friend_of_pablo
end
def blogger
 return follower_of_pablo
end
end
```

Before any of you Open-Closed people attack, please re-read the definition of OCP - Open for extension, closed for modification. Doesn't this adhere to that? :) 

* * *

PROXY PATTERN There are three tyes of Proxies: The Protection Proxy, Remote Proxy, Virtual Proxy These are mentioned in the Gang of Four book. He introduces a Ruby-esqe way to approach proxies: the method_missing Method 
    
```ruby    
class AccountProxy
def initialize(real_account)
 @subject = real_account
end
def method_missing(name, *args)
 puts("Delegating #{name} message to subject.")
 @subject.send(name, *args)
end
end
ap = AccountProxy.new( BankAccount.new(100) )
ap.deposit(25)
ap.withdraw(50)
puts("account balance is now: #{ap.balance}")
```

Will output: delegating deposit method to subject. delegating withdraw method to subject. delegating balance method to subject. account balance is now: 75 

* * *

DECORATOR PATTERN 
    
```ruby    
module Decorator1
def do_something(common_item_to_decorate)
 #code
end
end
module Decorator2
def do_something(common_item_to_decorate)
 #code
end
end
d = SimpleItem.new()
d.extend(Decorator1)
d.extend(Decorator2)
e.do_something('howdy')
```

* * *

SINGLETON PATTERN The author admits the career of the singleton has been checkered, but still shows that you can use it in the Ruby world. An example he gives us to allow testing of singleton implementation code is to put the implementation code in a base class and have the child be the singleton: 
    
```ruby    
require 'singleton'
class SimpleLogger
#  All of the logging functionality in this class...
#  Test this code
end
class SingletonLogger < SimpleLogger
```

* * *

FACTORY/ABSTRACT FACTORY PATTERN I never had it straight, exactly, what the difference between these patterns were (yes, besides name). I never bothered to look. According to the author, Factory returns back a single object while Abstract Factory is "an object dedicated to creating a compatible set of objects". According to GoF book (which I have open in front of me), Abstract Factory "provides an interface for creating families of related or dependent objects without specifying their concreate classes". Which one do you think would have turned the light bulb off in your head? :) The other item was using "Convention Over Configuration" to generate abstract factories: 
    
```ruby    
class IOFactory
def initialize(format)
 @reader_class = self.class.const_get("#{format}Reader")
 @writer_class = self.class.const_get("#{format}Writer")
end
def new_reader
 @reader_class.new
end
def new_writer
 @writer_class.new
end
end
html_factory = IOFactory.new('HTML')
html_reader = html_factory.new_reader
pdf_factory = IOFactory.new('PDF')
pdf_writer = pdf_factory.new_writer
```

## Comments

**[Scott Bellware](#395 "2009-02-26 05:11:17"):** Cheers!

**[Joe Ocampo](#396 "2009-02-26 18:20:04"):** Your welcome, About the only thing I would critique is that from what I have observed from most frameworks in Ruby is that the parens are omitted when there is only one arg. It reads betters: # d = SimpleItem.new() # d.extend(Decorator1) # d.extend(Decorator2) to # d = SimpleItem.new # d.extend Decorator1 # d.extend Decorator2

**[Russ Olsen](#397 "2009-02-28 13:16:03"):** Jason, Hey thanks for the kind words, I'm glad that you are finding the book useful. The funny thing about the factories patterns is a) that I wasn't 100% clear on the difference between the two before I started researching the book and b) given Ruby's dynamic nature, you really don't find many of examples of the classic factories in real Ruby code. Oh, and in the interest of fairness I'm going to include some Marvel characters in my next book. Russ

**[Russ Olsen](#398 "2009-02-28 13:21:30"):** Joe Ocampo wrote: > About the only thing I would critique is that from what I have > observed from most frameworks in Ruby is that the parens are > omitted when there is only one arg. I think there is a range of opinions regarding the parens, yes or no? question in the Ruby community. I am sure, however, that leaving the parens off is the surest way to confuse people who are newly arrived in Ruby from say Java. I can't tell you the number of times that I have confused a room full of newly minted Ruby programmers because I left the parens off of some example. Put the parens back on and their faces light up. Russ

