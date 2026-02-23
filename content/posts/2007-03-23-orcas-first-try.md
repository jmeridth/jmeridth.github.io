---
url: /posts/orcas-first-try
title: Orcas - First try
date: 2007-03-23 21:33:00 -05:00
layout: post
tags:
- csharp
---

After reading a post by Scott Guthrie on the [new C# Orcas language features](http://weblogs.asp.net/scottgu/archive/2007/03/08/new-c-orcas-language-features-automatic-properties-object-initializers-and-collection-initializers.aspx) I decided to download Orcas and try them out.  (**excited**)

The new features I practiced with and love are:

  1. Object initializers
Example:
Prior to Orcas:

```csharp
Person person = new Person();
person.FirstName = "Scott";
person.LastName = "Guthrie";
person.Age = 32;
```

Orcas:

```csharp
Person person = new Person { FirstName="Scott", LastName="Guthrie", Age=32 };
```

I personally like this because I like to have a constructor initializer for all my objects.  That is no longer necessary. =)

  1. Collection initilizers
Orcas:

```csharp
List<Person> people = new List<Person>();

people.Add( new Person { FirstName = "Scott", LastName = "Guthrie", Age = 32 } );
people.Add( new Person { FirstName = "Bill", LastName = "Gates", Age = 50 } );
people.Add( new Person { FirstName = "Susanne", LastName = "Guthrie", Age = 32 } );
```

The new feature I played with that I'm still not to sure about is:

  1. Automatic Properties
Example:
Prior to Orcas:

```csharp
public class Person {

    private string _firstName;
    private string_lastName;
    private int _age;

    public string FirstName {
      get {
          return _firstName;
      }
      set {
          _firstName = value;
      }
    }
    
    public string LastName {
        get {
            return _lastName;
        }
        set {
            _lastName = value;
        }
    }
    
    public int Age {
        get {
            return _age;
        }
        set {
            _age = value;
        }
    }
}
```

Orcas:

```csharp
public class Person {
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
}
```

Guthrie's post has links to Bart deSmart's blog where he shows what happens under the covers for each of these features.

More to come.
