---
title: Run a Specific RSpec Spec
date: 2013-03-23 00:00:00 -05:00
layout: post
tags:
- testing
- tools
- rspec
---

**Update:** You can specify a line number to run in your spec if you're wanting to run a specific spec.  Example: `rspec spec/controllers/sessions_controller_spec.rb:90`

Tired of looking this up and want to use my writing part of my brain to blog it:

```bash
rake spec SPEC=spec/controllers/sessions_controller_spec.rb \
  SPEC_OPTS="-e \"should log in with cookie\""
```

This is importatnt to me while coding Rails because if I just run

```bash
rspec specs/controllers/sessions_controller_spec.rb
```

the test database isn’t cleared out. By running `rake spec` I get that.
