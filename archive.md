---
title: Archive
layout: page
---

{% for post in site.posts  %}
{% assign this_year = post.date | date: "%Y" %}
{% assign this_month = post.date | date: "%B" %}
{% assign next_year = post.previous.date | date: "%Y" %}
{% assign next_month = post.previous.date | date: "%B" %}

{% if forloop.first %}
<h2 id="{{ this_year }}-ref">{{this_year}}</h2>
<h3 id="{{ this_year }}-{{ this_month }}-ref">{{ this_month }}</h3>
<ul>
{% endif %}
<li><a href="{{ post.url }}"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m/%d/%Y" }}</time> - {{ post.title }}</a></li>
{% if forloop.last %}
</ul>
{% else %}
{% if this_year != next_year %}
</ul>
<h2 id="{{ next_year }}-ref">{{next_year}}</h2>
<h3 id="{{ next_year }}-{{ next_month }}-ref">{{ next_month }}</h3>
<ul>
{% else %}
{% if this_month != next_month %}
</ul>
<h3 id="{{ this_year }}-{{ next_month }}-ref">{{ next_month }}</h3>
<ul>
{% endif %}
{% endif %}
{% endif %}
{% endfor %}
