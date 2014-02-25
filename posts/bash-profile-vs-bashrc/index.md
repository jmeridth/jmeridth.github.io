.. title: Bash_profile vs Bashrc
.. link: http://blog.jasonmeridth.com/2012/10/06/bash_profile_vs_bashrc.html 
.. description: 
.. date: 2012/10/06 00:00:00
.. slug: bash-profile-vs-bashrc 
.. type: text
.. tags: bash, command line 

.bash_profile is sourced everytime you login to a bash shell either locally on the terminal or remotely via ssh

.bashrc is sourced everytime you open a new shell after logging in

I like to have my aliases stored in .bashrc and just have .bash_profile source my .bashrc file if it exists.

I put the following in my .bash_profile

```bash
if [ -f ~/.bashrc ]; then
    source ~/.bashrc
fi
```

This ensures my aliases and functions in my .bashrc are applied when I remotely ssh into my Linux boxes and it avoids duplication across multiple files.  
