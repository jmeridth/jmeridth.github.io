---
title: Setup RVM and Ruby
date: 2013-03-06 00:00:00 -06:00
tags:
- tools
- rvm
- ruby
---

I’m putting this here so that I have it saved. I’ve done this many times and until I automate it with a Puppet or Chef script….

Install curl

```bash
sudo apt-get install curl
```

Install RVM (forgot this, thanks [Jasdeep][1])

```bash
curl -L get.rvm.io | bash -s stable --auto
```

Reload .bash_profile

```bash
. ~/.bash_profile
```

Run rvm requirements to see what needs to be installed

```bash
rvm requirements
...
Requirements for ubuntu/12.10/x86_64

NOTE: 'ruby' represents Matz's Ruby Interpreter (MRI) (1.8.X, 1.9.X)
             This is the *original* / standard Ruby Language Interpreter
      'ree'  represents Ruby Enterprise Edition
      'rbx'  represents Rubinius

Additional Dependencies:
# For update-system:
sudo apt-get update

# For rvm:
sudo apt-get --no-install-recommends install bash curl git patch bzip2

# For ruby:
sudo apt-get --no-install-recommends install build-essential openssl libreadline6 libreadline6-dev \
curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 \
libxml2-dev libxslt-dev autoconf libc6-dev libgdbm-dev ncurses-dev automake libtool bison \
subversion pkg-config libffi-dev

# For jruby:
sudo apt-get --no-install-recommends install curl g%2B%2B openjdk-6-jre-headless
```

Install everything you need

```bash
sudo apt-get install build-essential openssl libreadline6 libreadline6-dev \
curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 \
libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison  \
subversion pkg-config libffi-dev
```

Install Ruby

```bash
rvm install 1.9.3
...
Searching for binary rubies, this might take some time.
ruby-1.9.3-p392 - #configure
ruby-1.9.3-p392 - #download
#############################################                             62.9%
```

Begin to use ruby

```bash
rvm use 1.9.3
...
Using /home/vagrant/.rvm/gems/ruby-1.9.3-p392
```

Check your Ruby version

```bash
ruby -v
...
ruby 1.9.3p392 (2013-02-22 revision 39386) [x86_64-linux]
```

Set your default ruby version

```bash
rvm --default use 1.9.3-p327
...
Using /home/vagrant/.rvm/gems/ruby-1.9.3-p392
```

As [Jasdeep][2] says in the comments, it is worth knowing that you’ll need a javascript runtime to use Rails so you might as well install nodejs (because it is fun):

```bash
sudo apt-get install nodejs
```

   [1]: http://twitter.com/jssingh
