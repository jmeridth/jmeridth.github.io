---
url: /posts/proton-migration
title: "Proton Migration"
layout: post
date: '2025-07-05 15:38:00 -0500'
tags:
- security
- proton
---

![Proton Logo](/img/proton_logo_with_tagline.png)

TL;DR: I'm migrating from Google to Proton. There is a [free tier] if you'd like to try out all of the products before entertaining a migration/paid account.

The biggest reason to move to Proton is the end-to-end encryption and the security of your data. Proton is based in Switzerland, which has some of the strongest privacy laws in the world.

## Why?

Main reasons for my switch:

- Security and Privacy
  - I discovered severe security issues with Google
- Google Business was increasing my monthly Google business account and the Proton Duo pricing was less monthly and I get the whole suite of products (Mail, Calendar, Drive, Pass, VPN, and Wallet)
  - I was paying for NordVPN and Google Business and got a cheaper rate migrating to Proton Duo.

Proton Duo Suite is what I decided on (not because of partner, but 1TB storage)

## Notes

My usages and perspectives are my own.

Browser: [Brave](https://brave.com/) (Chromium-based, privacy-focused browser)
Mobile: iPhone (iOS 18.5+)

## Products Provided

All with end-to-end encryption:

- [Proton Mail](https://proton.me/mail) - email service
- [Proton Calendar](https://proton.me/calendar) - calendar service
- [Proton Drive](https://proton.me/drive) - cloud storage service
  - [Proton Docs](https://proton.me/drive/docs) - document editor
  - [Proton Photos](https://proton.me/drive/photo-storage) - photo storage and management
- [Proton Pass](https://proton.me/pass) - password manager
- [Proton VPN](https://protonvpn.com/) - virtual private network service
- [Proton Wallet](https://proton.me/wallet) - cryptocurrency wallet

## Proton Mail

### Pros

- you get the following emails in addition to your free @protonmail.com email:
  - @proton.me
  - @pm.me
- Decent UI
- Can use your own domain
- Can use aliases with provided or custom domains
  - This is due to [SimpleLogin integration](https://simplelogin.io/blog/simplelogin-join-proton/)

### Cons

- Keyboard shortcuts are not standardized (IMO) and not editable. [Vote for this feature](https://protonmail.uservoice.com/forums/284483-proton-mail/suggestions/38545198-improve-keyboard-shortcuts-gmail-like)

#### Mobile

- Be careful on deleting multiple emails quickly, the undo links that pop up are slow and you may undo the incorrect one
- Have had slowness issues with [Alternative Routing](https://proton.me/blog/anti-censorship-alternative-routing) feature, I'm working with support on it

## Proton Calendar

### Pros

- Decent UI and familiar to Google Calendar

### Cons

- Not able to search locations for your events. [Vote for this feature](https://protonmail.uservoice.com/forums/932842-proton-calendar/suggestions/42224578-calendar-location-maps-integration-e-g-open-stre)
- Duplicate events are not available on mobile apps. It is available on the web app. [Vote for this feature](https://protonmail.uservoice.com/forums/932842-proton-calendar/suggestions/42699347-duplicate-event) (already started, supposedly)
- After you import your calendar:
    - all participants are removed from events and there is no way to edit participants on existing events. [Vote for this feature](https://protonmail.uservoice.com/forums/932842-proton-calendar/suggestions/48369923-edit-add-participants-on-existing-events)

## Proton Pass

### Pros

- You can create aliases with multiple given or custom domain email TLD that redirect to your Proton Mail account (true email anonymization).
  - **NOTE:** If you create an alias, you will want to login to [https://simplelogin.io](https://simplelogin.io) with your Proton credentials and enable the `Reverse Alias Replacement` feature. This will allow you to reply to emails sent to your alias without having to log into SimpleLogin. [Docs](https://simplelogin.io/docs/getting-started/reverse-alias/). The _gotcha_ is that you will still see your Proton Mail address in the `From` field, but the recipient will see your alias email address.

### Cons

- You have to use your Proton account password to log into your Pass account. There is no separate primary password for Pass. [Vote for this feature](https://protonmail.uservoice.com/forums/953584-proton-pass/suggestions/48633443-log-into-proton-pass-directly-with-its-own-passwor)


## Proton Drive

### Pros

- Docs and Photos are included in the Drive storage

### Cons

- No spreadsheet support. [Vote for this feature](https://protonmail.uservoice.com/forums/932839-proton-drive/suggestions/49779578-complete-proton-docs-with-proton-sheets-and-slides)
- Photos:
  - No editing features
  - Import:
    - Folders are not automatically turned into albums

## Proton VPN

### Pros

- 122 Countries and 13,626 Servers ([Details](https://protonvpn.com/vpn-servers))
- Tor is a built-in feature
- NetShield ad-blocker

### Cons

- No way to pause current connection

## Proton Wallet

- Haven't used yet

## Feedback and Feature Requests

### Via Votes

https://protonmail.uservoice.com/

### Open Source

https://proton.me/community/open-source

- [Proton Mail](https://github.com/ProtonMail)
- [Proton Pass](https://github.com/protonpass)
- [Proton VPN](https://github.com/ProtonVPN)
- [Proton Drive](https://github.com/ProtonDriveApps)

### Reddit

- [r/ProtonMail](https://www.reddit.com/r/ProtonMail/)
- [r/ProtonDrive](https://www.reddit.com/r/ProtonDrive/)
- [r/ProtonPass](https://www.reddit.com/r/ProtonPass/)
- [r/ProtonVPN](https://www.reddit.com/r/ProtonVPN/)
- [r/ProtonWallet](https://www.reddit.com/r/ProtonWallet/)
