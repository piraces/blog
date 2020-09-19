---
title: FreeDNS - Subdomains for your side projects, demos, aliases...
description: In my daily life, besides working as a Software developer, I’m always interested into launching new personal/side-projects...
date: 2019-01-06
tags:
  - showdev
  - dns
  - ddns
  - sideprojects
layout: layouts/post.njk
---
<div align="center">

![Cover image](../../img/posts/freedns-subdomains-for-your-side-projects-demos-aliases/Side_Project_Ideas.png)
</div>

In my daily life, besides working as a Software developer, I'm always interested into launching new personal/side-projects. I launch simple webs, tools, try new technologies or make utilities for myself.

But how to make this projects available on the public internet?
<div align="center">

![Dynamic IPs for public projects?](../../img/posts/freedns-subdomains-for-your-side-projects-demos-aliases/Pulp_Fiction_Internet.gif)
</div>
<div align="center">
Dynamic IPs for public projects?
</div>

In order to make that developments accesible anywhere I usually go and use [No-IP](https://www.noip.com/) services, which allows a single user to register three subdomains which can be dynamically updated if we don't have a static IP (DDNS). This has been specially useful for me when looking to expose an app deployed in my local network (home), normally on a Raspberry Pi.

This was until last week, that I discovered the [FreeDNS](https://freedns.afraid.org/) service when accessing a mooo.com subdomain. The project has been there since 2001 up to this day... it's advertisement free and based on open-source software. 

Currently they have a pool of **61,949 domains** some of them working for more than 10 years...

They offer a *premium* account which offers more than 50 subdomains and "extra configuration". But a standard account allows you to create 5 subdomains in [shared domains](https://freedns.afraid.org/domain/registry/) which I find more than useful for publishing my projects.

<div align="center">

![Lots of subdomains...](../../img/posts/freedns-subdomains-for-your-side-projects-demos-aliases/FreeDNS_Domain_List.png)
</div>
<div align="center">
Lots of subdomains in their registry...
</div>


If you want, you can read the [FAQs](https://freedns.afraid.org/faq/) of the service in order to view all possibilities.

To contribute to this project I shared publicly the [**developer.li**](https://developer.li/) domain (which I was not using...), initially focused for developers, so anybody can create their own subdomain for their side projects, or its own place!


For the main page of my shared domain I made this simple Angular page, which allows you to check for available subdomains. All with the [NES.CSS](https://nostalgic-css.github.io/NES.css/) style which I fell in love.

Check it out at Github!

[![piraces/developer.li - GitHub](https://gh-card.dev/repos/piraces/developer.li.svg?fullname)](https://github.com/piraces/developer.li)

[GitHub link](https://github.com/piraces/developer.li)


Do you know any similar alternatives? What do you think about FreeDNS? 


**Happy coding!**