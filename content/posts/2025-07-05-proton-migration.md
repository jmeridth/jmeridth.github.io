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

TL;DR: I'm migrating from Google to Proton. There is a [free tier](https://proton.me/support/proton-plans#proton-free) if you'd like to try out all of the products before entertaining a migration/paid account.

The biggest reason to move to Proton is the end-to-end encryption and the security of your data. Proton is based in Switzerland, which has some of the strongest privacy laws in the world.

## Why?

Main reasons for my switch:

- Security and Privacy
  - I discovered severe security issues with Google.
- Google had decided to increase my monthly Google Workspace (business) account price to the point where a Proton Duo account was less monthly. This includes the entire Proton suite of products (Mail, Calendar, Drive, Pass, VPN, and Wallet)
  - Extra win was I was paying for NordVPN also. Don't get me wrong, I love NordVPN, but Proton VPN is included in the Proton Duo Suite.

I decided on the Proton Duo Suite because of its storage size (1TB). I have a lot of photos and drive contents and the 500GB in the Proton Premium account would not be enough for me.

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

---

## Proton Mail

### Pros

- You get the following emails in addition to your free @protonmail.com email:
  - @proton.me
  - @pm.me
- Decent UI
- Can use your own domain
- Can use hide-my-email aliases with provided or custom domains
  - Regular aliases are when you use a plus sign and additional content (example: `mine+aliastext@proton.me`)
  - Hide-my-aliases are where you have an email like `amazon+randomword1234@passmail.com` that redirects to your primary proton email aka `amazon+randomword12345@passmail.com` -> `me@proton.me`
  - This is due to [SimpleLogin integration](https://simplelogin.io/blog/simplelogin-join-proton/)

### Cons

- Keyboard shortcuts are not standardized (IMO, Gmail shortcuts are widely used in many apps) and not editable. [Vote for this feature](https://protonmail.uservoice.com/forums/284483-proton-mail/suggestions/38545198-improve-keyboard-shortcuts-gmail-like)

#### Mobile

- Be careful on deleting multiple emails quickly, the undo links that pop up are slow and you may undo the incorrect one
- Have had slowness issues with [Alternative Routing](https://proton.me/blog/anti-censorship-alternative-routing) feature, I'm working with support on it

---

## Proton Calendar

### Pros

- Decent UI and familiar to Google Calendar

### Cons

- Not able to search locations for your events. [Vote for this feature](https://protonmail.uservoice.com/forums/932842-proton-calendar/suggestions/42224578-calendar-location-maps-integration-e-g-open-stre)
- Duplicate events are not available on mobile apps. It is available on the web app. [Vote for this feature](https://protonmail.uservoice.com/forums/932842-proton-calendar/suggestions/42699347-duplicate-event) (already started, supposedly)
- After you import your calendar:
    - all participants are removed from events and there is no way to edit participants on existing events. [Vote for this feature](https://protonmail.uservoice.com/forums/932842-proton-calendar/suggestions/48369923-edit-add-participants-on-existing-events)

---

## Proton Pass

### Pros

- You can create aliases with multiple given or custom domain email TLD that redirect to your Proton Mail account (true email anonymization).
  - **NOTE:** If you create an alias, you will want to login to [https://simplelogin.io](https://simplelogin.io) with your Proton credentials and enable the `Reverse Alias Replacement` feature. This will allow you to reply to emails sent to your alias without having to log into SimpleLogin. [Docs](https://simplelogin.io/docs/getting-started/reverse-alias/). The _gotcha_ is that you will still see your Proton Mail address in the `From` field, but the recipient will see your alias email address.

### Cons

- You have to use your Proton account password to log into your Pass account. There is no separate primary password for Pass. [Vote for this feature](https://protonmail.uservoice.com/forums/953584-proton-pass/suggestions/48633443-log-into-proton-pass-directly-with-its-own-passwor)
  - If you want to have a master/primary password for Proton Pass, it is called a [second password](https://proton.me/support/pass-extra-password). You still have to log into your Proton account first. It doesn't make sense to me.

---

## Proton Drive

### Pros

- Docs and Photos are included in the Drive storage

### Cons

- No spreadsheet support. [Vote for this feature](https://protonmail.uservoice.com/forums/932839-proton-drive/suggestions/49779578-complete-proton-docs-with-proton-sheets-and-slides)
- Photos:
  - No editing features
  - Import:
    - Folders are not automatically turned into albums

---

## Proton VPN

### Pros

- 122 Countries and 13,626 Servers ([Details](https://protonvpn.com/vpn-servers))
- Tor is a built-in feature
- NetShield ad-blocker

### Cons

- No way to pause current connection

---

## Proton Wallet

- Haven't used yet

---

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

## Bug Bounty

https://proton.me/security/bug-bounty
