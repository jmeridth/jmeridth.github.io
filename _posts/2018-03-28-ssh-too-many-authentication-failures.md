---
title: SSH - Too Many Authentication Failures
---

# Problem
I started seeing this error recently and had brain farted on why.

{% highlight bash %}
Received disconnect from 123.123.132.132: Too many authentication failures for hostname
{% endhighlight %}

After a bit of googling it came back to me.  This is because I've loaded too many keys into my ssh-agent locally (`ssh-add`).  Why did you do that?  Well, because it is easier than specifying the `IdentityFile` on the cli when trying to connect.  But there is a threshhold.  This is set by the ssh host by the `MaxAuthTries` setting in `/etc/ssh/sshd_config`.  The default is 6.

# Solution 1
Clean up the keys in your ssh-agent.

`ssh-add -l` lists all the keys you have in your ssh-agent
`ssh-add -d key` deletes the key from your ssh-agent

# Solution 2
You can solve this on the command line like this:

`ssh -o IdentitiesOnly=yes -i ~/.ssh/example_rsa foo.example.com`

What is IdentitiesOnly?  Explained in Solution 3 below.

# Solution 3 (best)
Specifiy, explicitly, which key goes to which host(s) in your `.ssh/config` file.

You need to configure which key (“IdentityFile”) goes with which domain (or host). You also want to handle the case when the specified key doesn’t work, which would usually be because the public key isn’t in ~/.ssh/authorized_keys on the server. The default is for SSH to then try any other keys it has access to, which takes us back to too many attempts. Setting “IdentitiesOnly” to “yes” tells SSH to only try the specified key and, if that fails, fall through to password authentication (presuming the server allows it).

Your ~/.ssh/config would look like:

```
Host *.myhost.com
  IdentitiesOnly yes
  IdentityFile ~/.ssh/myhost
Host secure.myhost.com
  IdentitiesOnly yes
  IdentityFile ~/.ssh/mysecurehost_rsa
Host *.myotherhost.domain
  IdentitiesOnly yes
  IdentityFile ~/.ssh/myotherhost_rsa
```

`Host` is the host the key can connect to
`IdentitiesOnly` means only to try _this_ specific key to connect, no others
`IdentityFile` is the path to the key

You can try multiple keys if needed

```
Host *.myhost.com
  IdentitiesOnly yes
  IdentityFile ~/.ssh/myhost_rsa
  IdentityFile ~/.ssh/myhost_dsa
```


Hope this helps someone else.

Cheers!
