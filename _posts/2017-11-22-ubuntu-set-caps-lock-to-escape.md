---
title: Ubuntu - set caps lock to escape
date: 2017-11-22 10:05:00 -06:00
layout: post
tags:
- ubuntu
- vim
---

I just got a new laptop and had to google again on how to set caps lock key to escape (I'm a Vim user).

```bash
sudo apt-get install dconf-tools
dconf write /org/gnome/desktop/input-sources/xkb-options "['caps:escape']"
```

To know your options, use the following command:

`man xkeyboard-config`

(MAN pages are your friend; man is short for manual)

You can also now use the `Dconf` GUI editor if you must (SHAME! ;) )

Type `Dconf` in Unity or Gnome app opener and go to the following location:


```bash
`org` →- `gnome` → `desktop` →  `input-sources` →  `xkb-options`
```

Add `['caps:escape']` to `Custom Value` textbox.

![dconf caps lock to escape]({{ site.url }}/images/dconf-caps-lock-to-escape.png)

Cheers.

