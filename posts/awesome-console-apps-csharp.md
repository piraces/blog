---
title: Awesome console apps in C#
description: No more raw and boring console apps! Learn how to create fancy and useful console apps in C# with libraries made for this purpose. Meet the awesome libraries Spectre.Console and gui.cs.
date: 2020-12-09
tags:
  - console
  - dotnet
  - csharp
  - opensource
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/awesome-console-apps-csharp/spectre_table.gif)
</div>
<div align="center"><em>An example fancy application using the Spectre.Console library</em></div>

*This post is part of [C# Advent Calendar 2020](https://www.csadvent.christmas/).*

It has been a while and console apps are still a thing (maybe more used by developers), but they are used everyday.
For example, as a developer, I use `npm` or `dotnet` command line programs to do neccessary tasks in my job or in my free time experimenting.
These type of tools have been since the begining of times, but also evolving, since the terminal support for different colors, rich language, and other feautures has been improved.

We now see some programs representing progress bars, spinners, and some other features.
But how can we do it like this programs?

# How to make the console more "attractive"?

I remember executing console apps that shows a ['FIGlet'](http://www.figlet.org/) as a banner, introducing the main execution for the program, and then printing some output in an ordered way that could be easily understood, but maybe not familiar for some users and/or 'difficult to understand'.

<div align="center">

![A sample FIGlet of the program dnschef](../../img/posts/awesome-console-apps-csharp/figlet_sample.png)
</div>
<div align="center"><em>A sample FIGlet from the program dnschef</em></div>

I feel this kind of tools intuitive and fancy in some way, and I like to use them too. But, I think we need to understand that terminal is also evolving, and the more intuitive and easier we could make this console apps, the better for our possible audience (our target users).

The are almost support in almost every language and libraries (like [Rich](https://github.com/willmcgugan/rich) for Python) that we can use to improve the final user experience.

In the case of **dotnet**, two of the most heared libraries/toolkit (at least for me) that will make our console apps great are:

- [Spectre.Console](https://github.com/spectresystems/spectre.console) a .NET 5/.NET Standard 2.0 library, heavilly based in the [Rich library for Python](https://github.com/willmcgugan/rich).

- [gui.cs](https://github.com/migueldeicaza/gui.cs) a simple toolkit for buiding console GUI apps for .NET, .NET Core, and Mono that works on Windows, Mac, and Linux/Unix.

It is also support for doing great things in console in the dotnet framework but first lets see what this libraries can do for us.

Let's get with them!

## Spectre.Console

As said above, [Spectre.Console](https://github.com/spectresystems/spectre.console) is a .NET 5/.NET Standard 2.0 library that makes it easier to create beautiful, cross platform, console applications (heavily inspired by the excellent [Rich library for Python](https://github.com/willmcgugan/rich)).

Spectre.Console, has support for tables, grids, panels and markup language.
Has also support for the most common SRG parameters when styling and support for up to 24-bit colors in terminal (the library will also downgrade the colors depending of the current terminal).

<div align="center">

![A picture showing the main feautres of Spectre.Console](../../img/posts/awesome-console-apps-csharp/spectre_console_features.png)
</div>
<div align="center"><em>A picture showing the main feautres of Spectre.Console</em></div>

The [documentation](https://spectresystems.github.io/spectre.console/) it is very well written and full of samples to get started with every feature of the library.

With this library, we are capable to improve data output to the user, better progress indicators and better prompting for user decisions.

On my way doing some research of this library, I developed a console app as a demo of the use of this library:

[![piraces/ConsoleCoin - GitHub](https://gh-card.dev/repos/piraces/ConsoleCoin.svg)](https://github.com/piraces/ConsoleCoin)

[GitHub link](https://github.com/piraces/ConsoleCoin)

<div align="center">

![Example console app with Spectre.Console](../../img/posts/awesome-console-apps-csharp/example_app.png)
</div>
<div align="center"><em>Example console app with Spectre.Console</em></div>

I felt the library easy to understand and use, with great support and documentation, it is easy to improve some of our console apps using it. Give it a try!

## Gui.cs

[gui.cs](https://github.com/migueldeicaza/gui.cs), its a simple (but complete and full of features) toolkit for buiding console GUI apps for .NET, .NET Core, and Mono that works on Windows, Mac, and Linux/Unix. Made by [Miguel de Icaza](https://twitter.com/migueldeicaza), actually working in Microsoft.

In this case this toolkit I feel like it is oriented for more complex console apps trying to expose some UI for its users.

It contains out of the box features and support for various controls for building text UIs: buttons, checkboxes, dialogs, labels, menus, progress bars...

But that is not all! It is also cross platform, supports keyboard and mouse input, flexible layout, clipboard support, and others...

<div align="center">

![Features of gui.cs](../../img/posts/awesome-console-apps-csharp/guics_sample.gif)
</div>
<div align="center"><em>Features of gui.cs</em></div>

I have tried this library but not all its features, and as far I can tell is that is a very awesome library with you could build almost any kind of app I can think of (replacing the user interface for a text based one).

## Other ways...

For sure, the [Console class](https://docs.microsoft.com/en-us/dotnet/api/system.console?view=net-5.0) included in the .NET API, expose lots of properties, methods and events to improve the console experience.

The libraries shown above are useful for the most of apps in order to not reinvent the wheel. But, in case you feel like you do not need them or you want to implement it better on your own. There is always the possibility of doing awesome thing with the **dotnet** framework itself alone.


# Conclusion

Console apps exist and will be there for a long time, they improve, and also the terminal they run in. Trying to make them more user friendly and more "understandable", its for sure a very good bet for get our users comfortable using our tools/apps.

In my case, I love executing almost everything I can in the terminal. I love console tools and apps, and I also love how they make the most out of the terminal they run in to give you the most.

Hope this post will be useful for your console tools/apps!


This post is part of the [C# Advent Calendar 2020](https://www.csadvent.christmas/), thanks for letting me participate with my humble post!

Happy Coding! Happy Advent! Happy Christmas!

<div align="center">

![Happy Christmas](../../img/posts/awesome-console-apps-csharp/christmas.jpg)
</div>
<div align="center"><em>Happy Advent and happy christmas!!</em></div>
