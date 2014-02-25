.. title: Testing Mail From the Command Line on Ubuntu
.. link: http://blog.jasonmeridth.com/2012/09/19/testing-mail-from-the-command-line-on-ubuntu.html 
.. description: 
.. date: 2012/09/19 00:00:00
.. slug: testing-mail-from-the-command-line-on-ubuntu 
.. type: text
.. tags: command line, ubuntu 

Install mailutils

```bash
sudo apt-get install mailutils
```

Send some test piped into the mail command

```bash
echo "testing" | mail -s Test user@emailhost.com
```

Check the email address listed above
