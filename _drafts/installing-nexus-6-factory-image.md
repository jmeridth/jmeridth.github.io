---
title: Installing Nexus 6 Factory Image
date: 2016-10-31 15:37:00 -05:00
tags:
- android
layout: post
---

I have a Google Nexus 6 that we purchased from AT&T.  It was damaged and I got it fixed.  It had Android 6.0.1 on it and I was waiting for AT&T to send the Nougat update (Android 7.0) but alas, nothing.  I then decided to just download the factory image from Google and load it onto the device myself.  Here is how I did that:

Install adb and bootfast applications via nexus-tools:

  bash <(curl -s https://raw.githubusercontent.com/corbindavenport/nexus-tools/master/install.sh)


If you are hesitant, so was I but I could not find a easier way to do it.  The `install.sh` script is open source [here](https://github.com/corbindavenport/nexus-tools/blob/master/install.sh) if you'd like to validate no malicious code is being installed.

Set your phone up to allow USB debugging.  Let's confirm you have that turned on.

Turn on developer mode:
  - Slide down the notifications
  - Click the gear to go to settings
  - scroll to the bottom and click About
  - Scroll to bottom and click the version 7 times

Now that developer mode is enabled, go into it.  It will be above the About section in Settings now.
  - Change USB settings to MTM (about half way down in developer settings)
    ![USB Settings]()

Connect your phone to your computer that you installed adb and fastboot to.  You should see a pop-up on your phone

![USB Connection Popup]()

Click Ok.

On your laptop type the following into a terminal:

  adb devices

You should see your phone listed.  If you do not, try another USB port, try another USB cable.

Once listed type the following in the terminal:

  adb reboot bootloader

Here is what your screen should look like:

![Bootloader]()

On your laptop type the following:

  fastboot oem unlock

This unlocks the bootloader.


![Developer Options]()

# Download Factory Image for Nexus 6 (aka Shamu)
  - Go to [Factory Images Download Page](https://developers.google.com/android/images)
  - Go to [Nexus 6 (aka Shamu) section](https://developers.google.com/android/images#shamu)
    ![Factory Image]()
  - You should get a zip file
  - Unzip the file and you should have the following contents
    ![Factory Image Zip File Contents]()

Type the following in a terminal in the unzipped factory image directory:

  ./flash-all.sh


