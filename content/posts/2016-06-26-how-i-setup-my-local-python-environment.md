---
url: /posts/how-i-setup-my-local-python-environment
title: How I Setup My Local Python Environment
date: 2016-06-26 11:04:10 -05:00
tags:
- python
layout: post
---

I've had a few people ask me lately how I setup my local python environment.

I am using iterm2 (v3.0.0) on OSX.  That means I am using [homebrew](https://brew.sh) and I installed `wget` and `curl` via brew.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install wget
brew install curl

```

Install the python package manager [pip](https://pip.pypa.io/en/stable://pip.pypa.io/en/stable/)

```bash
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py
```

Install the [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) package.  It lets you manage python virtual environments easier than just using [virtualenv](https://virtualenv.pypa.io/en/stable/)

`sudo pip install virtualenvwrapper`

Create working directory and project directory

```bash
export WORKSPACE=~/dev
export PROJ=$WORKSPACE/testproj1
mkdir-p $PROJ

cd $PROJ

```

Make virtual environment (aka isolated dependencies)

```bash
->$ mkvirtualenv testproj1

->$ pip install requests
Collecting requests
  Using cached requests-2.10.0-py2.py3-none-any.whl
  Installing collected packages: requests
  Successfully installed requests-2.10.0
```

Create file to test with:

`vim test.py`

inside `test.py`:

```bash
import requests

r = requests.get('https://jasonmeridth.com')
print r.status_code

```

get out of the file by pressing `Esc` on your keyboard then typing `:wq`

continuing:

`python test.py`

output should be:

`200`

Voila!!
