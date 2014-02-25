.. title: 2.6.23 Kernel, "Finally. Yeah, it got delayed"
.. link: http://lostechies.com/jasonmeridth/2007/10/11/2-6-23-kernel-quot-finally-yeah-it-got-delayed-quot/
.. description: 
.. date: 2007/10/11 01:15:38
.. slug: 2-6-23-kernel-quot-finally-yeah-it-got-delayed-quot
.. type: text


#### _Finally. Yeah, it got delayed, not because of any huge issues, but because of various bugfixes trickling in and causing me to reset my 'release clock' all the time. But it's out there now, and hopefully better for the wait,_" Linus Torvalds said [announcing the 2.6.23 kernel](http://kerneltrap.org/mailarchive/linux-kernel/2007/10/9/333488). He noted few changes since the last release candidate, "_not a whole lot of changes since -rc9, although there's a few updates to mips, sparc64 and blackfin in there. Ignoring those arch updates, there's basically a number of mostly one-liners (mostly in drivers, but there's some networking fixes and soem VFS/VM fixes there too)._" Source level changes can be viewed via the [gitweb interface](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux-2.6.git;a=summary). A nice overview of all changes can be found at [Kernel Newbies](http://kernelnewbies.org/Linux_2_6_23). Linus went on to describe his plan going forward:

> "I want this to be what people look at for a few days, but expect the x86 merge to go ahead after that. So far, all indications are still that it's going to be all smooth sailing, but hey, those indicators seem to always say that, and only after the fact do people notice any problems ;)"

* * *
    
    
    **From: Linus Torvalds <torvalds@...>**
    Subject: [Linux 2.6.23
    ](http://kerneltrap.org/mailarchive/linux-kernel/2007/10/9/333488)Date: Oct 9, 11:54 am 2007
    
    Finally.
    
    Yeah, it got delayed, not because of any huge issues, but because of 
    various bugfixes trickling in and causing me to reset my "release clock" 
    all the time. But it's out there now, and hopefully better for the wait.
    
    Not a whole lot of changes since -rc9, although there's a few updates to 
    mips, sparc64 and blackfin in there.  Ignoring those arch updates, there's 
    basically a number of mostly one-liners (mostly in drivers, but there's 
    some networking fixes and soem VFS/VM fixes there too).
    
    Shortlog and diffstat appended (both relative to -rc9, of course - the 
    full log from 2.6.22 is on kernel.org as usual).
    
    I want this to be what people look at for a few days, but expect the x86 
    merge to go ahead after that. So far, all indications are still that it's 
    going to be all smooth sailing, but hey, those indicators seem to always 
    say that, and only after the fact do people notice any problems ;)
    
    		Linus
    
    ---
    Akinobu Mita (1):
          [SPARC64]: check fork_idle() error
    
    Al Viro (1):
          fix bogus reporting of signals by audit
    
    Alexey Dobriyan (2):
          Move kasprintf.o to obj-y
          [ROSE]: Fix rose.ko oops on unload
    
    Alexey Kuznetsov (1):
          [SFQ]: Remove artificial limitation for queue limit.
    
    Andrew Morton (1):
          binfmt_flat: checkpatch fixing minimum support for the blackfin relocations
    
    Anton Blanchard (2):
          [POWERPC] Fix xics set_affinity code
          Fix timer_stats printout of events/sec
    
    Attila Kinali (1):
          Add manufacturer and card id of teltonica pcmcia modems
    
    Ben Dooks (2):
          [ARM] 4597/2: OSIRIS: ensure CPLD0 is preserved after suspend
          [ARM] 4598/2: OSIRIS: Ensure we do not get nRSTOUT during suspend
    
    Benjamin Herrenschmidt (1):
          Fix non-terminated PCI match table in PowerMac IDE
    
    Bernd Schmidt (1):
          Binfmt_flat: Add minimum support for the Blackfin relocations
    
    Brian Haley (1):
          [IPv6]: Fix ICMPv6 redirect handling with target multicast address
    
    Bryan Wu (1):
          Blackfin arch: add some missing syscall
    
    Dale Farnsworth (1):
          mv643xx_eth: Do not modify struct netdev tx_queue_len
    
    David S. Miller (8):
          [SPARC]: Fix EBUS use of uninitialized variable.
          [SPARC64]: Fix put_user() calls in binfmt_aout32.c
          [SPARC64]: Fix missing load-twin usage in Niagara-1 memcpy.
          [SPARC64]: Don't use in/local regs for ldx/stx data in N1 memcpy.
          [SPARC64]: Fix domain-services port probing.
          [SPARC64]: VIO device addition log message level is too high.
          [SPARC64]: Temporary workaround for PCI-E slot on T1000.
          [SPARC64]: Fix 'niu' complex IRQ probing.
    
    Dmitry Torokhov (1):
          Driver core: fix SYSF_DEPRECATED breakage for nested classdevs
    
    Eric Dumazet (1):
          [TCP]: secure_tcp_sequence_number() should not use a too fast clock
    
    FUJITA Tomonori (1):
          [SCSI] megaraid_old: fix READ_CAPACITY
    
    Florian Fainelli (2):
          [MIPS] Alchemy: Fix USB initialization.
          [MIPS] Au1000: set the PCI controller IO base
    
    Francois Romieu (1):
          r8169: revert part of 6dccd16b7c2703e8bbf8bca62b5cf248332afbe2
    
    Giuseppe Sacco (2):
          [MIPS] IP32: Enable PCI bridges
          [MIPS] IP32: Fix fatal typo in address computation.
    
    Hugh Dickins (1):
          Fix sys_remap_file_pages BUG at highmem.c:15!
    
    Ilpo Järvinen (1):
          [TCP]: Fix fastpath_cnt_hint when GSO skb is partially ACKed
    
    Ingo Molnar (1):
          sched: fix profile=sleep
    
    Jeff Garzik (2):
          aic94xx: fix DMA data direction for SMP requests
          sata_mv: correct S/G table limits
    
    Jeremy Fitzhardinge (1):
          xen: disable split pte locks for now
    
    Jiri Slaby (1):
          Ata: pata_marvell, use ioread* for iomap-ped memory
    
    Joe Perches (1):
          bcm43xx: Correct printk with PFX before KERN_
    
    John W. Linville (1):
          [IEEE80211]: avoid integer underflow for runt rx frames
    
    Karsten Keil (1):
          ISDN: Fix data access out of array bounds
    
    Kyle McMartin (1):
          Revert "intel_agp: fix stolen mem range on G33"
    
    Linus Torvalds (3):
          VT_WAITACTIVE: Avoid returning EINTR when not necessary
          Don't do load-average calculations at even 5-second intervals
          Linux 2.6.23
    
    Maarten Bressers (1):
          Correct Makefile rule for generating custom keymap
    
    Maciej W. Rozycki (1):
          [MIPS] pg-r4k.c: Fix a typo in an R4600 v2 erratum workaround
    
    Michael Hennerich (2):
          Blackfin arch: gpio pinmux and resource allocation API required by BF537 on chip ethernet mac driver
          Blackfin arch: fix PORT_J BUG for BF537/6 EMAC driver reported by Kalle Pokki <kalle.pokki@iki.fi>
    
    Olof Johansson (1):
          libata: fix for sata_mv >64KB DMA segments
    
    Pavel Machek (1):
          sysrq docs: document sequence that actually works
    
    Peter Korsgaard (1):
          dm9601: Fix receive MTU
    
    Peter Zijlstra (2):
          lockstat: documentation
          mm: set_page_dirty_balance() vs ->page_mkwrite()
    
    Rafal Bilski (1):
          Longhaul: add auto enabled "revid_errata" option
    
    Ralf Baechle (2):
          [MIPS] Type proof reimplementation of cmpxchg.
          [MIPS] Terminally fix local_{dec,sub}_if_positive
    
    Richard Knutsson (1):
          softmac: Fix compiler-warning
    
    Ron Mercer (2):
          qla3xxx: bugfix: Add memory barrier before accessing rx completion.
          qla3xxx: bugfix: Fix VLAN rx completion handling.
    
    Scott Thompson (1):
          drivers/ata/pata_ixp4xx_cf.c: ioremap return code check
    
    Serge Belyshev (1):
          Remove unnecessary cast in prefetch()
    
    Stefan Richter (1):
          firewire: point to migration document
    
    Stephen Hemminger (2):
          sky2: jumbo frame regression fix
          [PKT_SCHED] cls_u32: error code isn't been propogated properly
    
    Sunil Mushran (1):
          ocfs2: Unlock mutex in local alloc failure case
    
    Tejun Heo (1):
          ata_piix: add another TECRA M3 entry to broken suspend list
    
    Trond Myklebust (1):
          NLM: Fix a memory leak in nlmsvc_testlock
    
    Yan Zheng (3):
          fix VM_CAN_NONLINEAR check in sys_remap_file_pages
          fix page release issue in filemap_fault
          AIO: fix cleanup in io_submit_one(...)
    
    ---
     Documentation/lockstat.txt                        |  120 +++++++
     Documentation/sysrq.txt                           |    2 +-
     Makefile                                          |    2 +-
     arch/arm/mach-s3c2440/mach-osiris.c               |   18 +
     arch/blackfin/kernel/bfin_gpio.c                  |  285 ++++++++++++++--
     arch/blackfin/mach-common/entry.S                 |   23 +-
     arch/i386/kernel/cpu/cpufreq/longhaul.c           |   60 ++++-
     arch/mips/au1000/common/pci.c                     |    1 +
     arch/mips/au1000/mtx-1/board_setup.c              |    4 +-
     arch/mips/au1000/pb1000/board_setup.c             |    6 +-