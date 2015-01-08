<!-- 
.. title: Restarting Audio in Ubuntu After Issues
.. slug: restarting-audio-in-ubuntu-after-issues
.. date: 2015-01-08 11:12:14 UTC-06:00
.. tags: linux,ubuntu
.. link: 
.. description: 
.. type: text
-->

The following command restarted audio for me in Ubuntu after my microphone on my headphones stopped working.

    pulseaudio -k && sudo alsa force-reload

Credit to: http://askubuntu.com/a/230893
