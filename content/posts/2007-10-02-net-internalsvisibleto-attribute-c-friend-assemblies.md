---
title: ".NET InternalsVisibleTo attribute == C++ Friend Assemblies"
date: 2007-10-02 19:57:02 -05:00
---

To all developers who haven't heard of this, there is an ability to have a project, say a test project, to have access to another project's Internal classes. ([MSDN definition](http://msdn2.microsoft.com/en-us/library/0tke9fxk\(VS.80\).aspx)).

For security reasons, make sure that your test assembly is strongly named.  You can achieve this via the "Signing" tab on the project properties.

Don't ask why I'm playing with COM projects with .NET (I'm messing with the [MSBuild sdc tasks](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=2cb20e79-d706-4706-9ea0-26188257ee7d) and their automated COM components install tasks)

![image](jasonmeridth/files/2011/0342c.NETInternalsVisibleToattributeCFrien_E05B/image_thumb.png)

**However,** I still choose to use the Visual Studio command line to create my keys via the [Strong Name tool](http://msdn2.microsoft.com/en-us/library/k5b5tt23\(VS.80\).aspx) (sn.exe) and then browse for it via the "Signing" tab on project properties. Make sure you are in the same directory as your solution file (.sln)

* sn -k TestComComponent.snk // Generate strong name key

* sn -p TestComComponent.snk key.publickey // Extract public key from TestComComponent.snk into key.publickey

* sn -tp key.publickey // Display public key stored in file 'key.publickey'![image](jasonmeridth/files/2011/0342c.NETInternalsVisibleToattributeCFrien_E05B/image_thumb_2.png)

This gives us the public key blob that we need to embed into the InternalsVisibleTo attribute we are going to add to our AssemblyInfo.cs file.

This is what you would need to add to your AssemblyInfo.cs file of your main assembly:

```csharp
[assembly:InternalsVisibleToAttribute("<TestAssemblyName>, PublicKey=00240000048000...RestOfPublicKeyFromAbove")]
```

David Kean has even created a tool to create your attribute for you with the public key and everything.  Check it out [here](http://davidkean.net/downloads/publickey.zip).  Blog post [here](http://davidkean.net/archive/2005/10/06/1183.aspx).

## Comments

**[Nelson Montalvo](#136 "2007-10-03 11:33:54"):** As an alternative, if you have the strongly named assembly, use a capital T, like so: sn -Tp <> This will extract the public key from the assembly's manifest.
