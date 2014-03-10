.. title: Refspec matches more than one
.. link: http://lostechies.com/jasonmeridth/2010/02/27/refspec-matches-more-than-one/
.. description: 
.. date: 2010/02/27 19:31:00
.. slug: refspec-matches-more-than-one
.. type: text

I was trying to push to a canonical repository this morning and got the following error:

```bash
$ git push origin master
error: src refspec master matches more than one.
error: failed to push some refs to 'ssh://user@host/srv/git/repo'
```

This happened because I had accidentally created a master tag locally:
    
```bash
$ git tag
master
tag1
tag2
tag3
tag4
```

Once I deleted the tag locally:
    
```bash
tag -d master
```

I was able to push again.
