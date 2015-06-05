---
layout: post
title: NuGet Dependency Versioning and Log4net 1.2.11
date: 2012/04/12 00:00:00
category: .net 
---

Yesterday I got bit in the butt with the now infamous new key for strong naming of log4net 1.2.11 situation. We wrote our nuspec file to have a depdency on log4net, like so:

```xml
<dependencies>
        <dependency id="log4net" version="1.2.10" />
</dependencies>
```

Well, to NuGet that means that we allow version 1.2.10 OR greater. Well, since version 1.2.11 had the strong naming change, that caused us dependency issues. We needed to roll back to log4net 1.2.10. The easiest course of action was to learn how to tell the nuspec file that the dependency version we list is the only one we want. I found that information here. We needed to use the brackets. Our nuspec dependencies simply changed to:

```xml
<dependencies>
        <dependency id="log4net" version="[1.2.10]" />
</dependencies>
```

Then I went into each solution that was using the package and in the Package Manager Console used the Update-Package command:

```powershell
Update-Package MyCompany.Common
```

and the package’s reference to log4net was changed from 1.2.11 back to 1.2.10

