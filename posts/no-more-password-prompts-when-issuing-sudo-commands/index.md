.. title: No More Password Prompts When Issuing Sudo Commands
.. link: http://blog.jasonmeridth.com/2013/02/21/edit-sudoers-no-password.html
.. description: 
.. date: 2013/02/21 00:00:00
.. slug: no-more-password-prompts-when-issuing-sudo-commands
.. type: text
.. tags: ubuntu

Edit the sudoers file:

```bash
sudo visudo
```

Add or edit the following line to be:

```bash
%sudo ALL=(ALL) NOPASSWD: ALL
```

This will prevent password prompts for everyone in the sudo group (%sudo) when issuing all commands (NOPASSWD: ALL)
