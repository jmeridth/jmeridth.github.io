---
url: /posts/proton-migration
title: "Proton Migration"
layout: post
date: '2025-07-05 15:38:00 -0500'
tags:
- security
- proton
draft: true
---

TL;DR: After testing a full migration to the Proton suite of products, I have decided to backpedal on my migration. I will continue to use Proton Mail and Proton Drive for privacy contexts but I will not be using any of the other products. Explanations below.

TL;DR I'm very aware you can submit and up vote feature requests to protonmail.uservoice.com. I have done so for many of the issues below. The company's focus as of late has me worried about priorities though. AI and an external authenticator are not my priorities.

## Usage Gotchas?

### Proton Pass

- You have to use your main Proton account to log in to Proton Pass. This means that if you want to use Proton Pass, you have to use your main Proton account credentials. This is a security risk as it means that if your main Proton account is compromised, your Proton Pass is also compromised. Also it means you can't store your Proton Pass credentials in Proton Pass itself, which is a bit of a paradox. "The key is in the safe and I need the key to open the safe."
  - You can setup a second password specific for Proton Pass to ensure even if someone compromises your main Proton account, they cannot access your Proton Pass. However, this is a bit of a hassle as you have to remember two different passwords for the same account.
  - The Proton Pass UI is very well done, in both the web, mobile apps, and chromium extension. It is very intuitive and easy to use. The browser extension is especially well done, with a lot of features that make it easy to use.
    - Only gotcha is the autofill feature does not work very well.
  
### Proton Photos

- Uploads do not handle metadata well. I have a lot of photos with metadata (EXIF) that I want to keep. Proton Photos does not support this very well and, therefore, images will be date/time stamped with the upload date instead of the original date. I have 100K+ photos.
- Does not support ingestion of folders as albums. I have a lot of photos organized in folders and I want to keep that organization. Proton Photos does not support this very well and, therefore, I would have to manually re-create all of my albums.
- Search does not exist.

### Proton Drive

- Does not support marking favorite files. I have a lot of files that I want to be able to quickly access. Proton Drive does not support this feature.
- No spreadsheet app. I have a lot of spreadsheets that I want to be able to access and edit. Proton Drive does not support this feature.

### Proton Mail

- The anonymous email feature via the SimpleLogin integration is awesome and very well done but I realized I don't warrant it as I really have nothing to hide and the maintenance of the aliases is a bit more than I'm willing to do. Having to add a recipient to the contact list of a specific alias in order to initiate communicate with that recipient is very tedious.
  - SimpleLogin browser extension (chromium) is VERY well done. You can even move the extension icon to the right side of any username text box. Wish I could do that with my password manager extension (ahem, 1Password).

## Backpedal Gotchas?

### Proton Calendar

- The exported ICS file from Proton Calendar does not import well into other calendar systems. I tried importing it into Google Calendar and it did not work. I also tried importing it into Apple Calendar and it did not work. Running it through an ICS validator shows that the ICS file is not valid. This means that if you want to export your Proton Calendar data, you will have to export it and diagnose the issues or manually re-create your calendar events in another system.

### Proton Mail

- Export tool is a CLI tool that you have to download and run. Definitely not for "normal" users. It exports emails in 2 sets of file types, EML and JSON formats. This means all of your email labels are in the JSON files. There are articles saying you can import both into Thunderbird and IMAP to Gmail but I found that the labels do not import correctly. I had to manually re-create all of my labels in Gmail.

## Admitted Brain Fart

Not all websites allow you to use an anonymous email address. Some of them actively decline specific TLDs (top-level domains) like passmail.com. I decided to use the plus sign aliasing like `jmeridth+websitename@proton.me` and then realized that when you reply to an email from that address, it will not use the plus sign alias. It will use the base address like `jmeridth@proton.me` and, therefore, eliminates the purpose of the alias.

I have gone back to using google for mail and calendar and will continue to use Proton Mail for privacy contexts only. I will also continue to use Proton Drive for file storage but not for any of the other products.
