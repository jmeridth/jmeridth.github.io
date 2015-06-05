---
layout: post
title: Using Default Scope and Unscoped in Rails
date: 2013/04/02 00:00:00
category: rails
---

I recently had the need to add a deleted flag to a model in a Rails project. I am usually of the mindset “explicit over implicit” so whenever I needed to use a finder to get content for that model I would do something like:

```ruby
User.where(deleted: false)
```

That does lean towards not having DRY (don’t repeat yourself) code. It’s a balancing act. I decided to give default_scope a chance this time. I quickly experienced the downside of that choice. I added the default_scope to my model:

```ruby
class User < ActiveRecord::Base
  default_scope where(deleted: false)
...
end
```

Well, I needed to write a migration to add the column and then update any existing records to have a default value of false. I generated my migration and added the following:

```ruby
class AddDeletedFlagToUsers < ActiveRecord::Migration
  def change
    add_column :users, :deleted, :boolean, :default =&gt; false
    User.update_all ["deleted = ?", false]
  end
end
```

However, when I looked at the database, none of the pre-existing records had false as their deleted flag. I went to the rails console and typed in the update_all command again:

```ruby
User.update_all ["deleted = ?", false]
```

and that’s when I saw how default_scope can bite you in the butt:

```bash
~/code/project(master) &gt; rails c
Loading development environment (Rails 3.2.12)
>> User.update_all ["deleted = ?", false]
  SQL (35.9ms)  UPDATE "users" SET deleted = 'f' WHERE "users"."deleted" = 'f'
=> 0
```

Notice the `WHERE` clause. That is what the default_scope adds automatically. Duh!! So in order to bypass the default_scope I had to use `unscoped`:

```ruby
User.unscoped.update_all ["deleted = ?", false]
```

in my migration. That then caused all existing records to be updated.

Yes, I’m aware this violates “Explicit over implicit” but it does keep my code “DRY (do not repeat yourself)”. There are pros and cons to all tools. Use them wisely.  
