---
layout: post
title: Hudson and Nginx
date: 2009/02/12 04:46:00
---


UPDATE: I left HTTP Auth in place via Nginx and removed security from my Hudson instance. This works for me because I don't need the Hudson security. Every developer should be able to manage the CI server. I'm just trying to prevent external access to the dashboard.

I've been having fun trying to figure out how to block a user's ability of going to http://mydomain:8080 and bypassing my 80 to 443 redirect and htpasswd HTTP basic authentication. I even went as far as removing Nginx and installing Apache. According to the Hudson site, we can use [Apache to do this](http://hudson.gotdns.com/wiki/display/HUDSON/Apache+frontend+for+security). Either I'm not smart enough or web pages like this reminded me why I hate the Java Enterprise stack as much as I do. Talk about installation obfuscation. My problem exists because the Tomcat instance running the hudson war file uses [Apache JServe Protocol](http://tomcat.apache.org/tomcat-5.5-doc/config/ajp.html#Standard%20Implementation) (AJP) and will allow direct access on whatever port you used (default 8080). This is even if you proxy_pass to 8080 from 443 (SSL) or 80 (Web). Through testing and research it seems that [Nginx does not have a solution for this](http://www.ruby-forum.com/topic/157269#693042). I can't allow access to my Hudson instance from external users. I have a self-signed certificate and a .htpasswd file to protect the instance, but is all useless is someone could just type in http://mydomain.com:8080. I want that redirected to https://mydomain.com which will then proxy internally to http://127.0.0.1:8080. I didn't want to fight this, so I just used iptables (linux firewall) to block external requests on port 8080 but allow internal requests to 8080. Here is the entry in my iptables file: 
    
    
    # Deny HTTP requests to port 8080 externally but allow internally
    -A INPUT -i eth0 -p tcp -m tcp --dport 8080 -j REJECT
    

I only allow access to my server via 80 (web), 443 (ssl) and my ssh port (I'm not telling). This works for now, but I'm experiencing another weird issue. I follow the Nginx way of using HTTP basic authentication: 
    
    
    location  /  {      
     auth_basic            "Restricted";
     auth_basic_user_file  conf/htpasswd;
    }
    

If the user listed in the [htpasswd](http://httpd.apache.org/docs/2.0/programs/htpasswd.html) file is also a registered user on the Hudson instance (through the Hudson UI) then the HTTP basic authentication will work. If they are in the htpasswd file but not registered with Hudson, it fails with a HTTP 401 (Unauthorized). Why would the HTTP basic authentication be "tunneled" through to Hudson? I'll update this post once I figure it out.