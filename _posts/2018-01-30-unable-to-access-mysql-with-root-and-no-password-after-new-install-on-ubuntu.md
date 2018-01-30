---
tags: mysql, ubuntu
layout: post
title: Unable To Access Mysql With Root and No Password After New Install On Ubuntu
date: '2018/01/30 18:13:00'
---

This bit me in the rear end again today.  Had to reinstall mysql-server-5.7 for other reasons.

You just installed `mysql-server` locally for your development environment on a recent version of Ubuntu (I have 17.10 artful installed).  You did it with a blank password for `root` user.  You type `mysql -u root` and you see `Access denied for user 'root'@'localhost'`.

![wat]({{ site.url }}/assets/images/wat.png)

Issue:
Because you chose to not have a password for the `root` user, the `auth_plugin` for my MySQL defaulted to `auth_socket`.  That means if you type `sudo mysql -u root` you will get in.  If you don't, then this is NOT the fix for you.


Solution:
Change the `auth_plugin` to `mysql_native_password` so that you can use the root user in the database.

```
$ sudo mysql -u root

mysql> USE mysql;
mysql> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> exit;

$ sudo systemctl restart mysql
$ sudo systemctl status mysql
```

**NB**
ALWAYS set a password for mysql-server in staging/production.


Cheers.
