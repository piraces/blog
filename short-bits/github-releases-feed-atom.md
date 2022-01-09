---
layout: layouts/base.njk
title: How to get the a releases RSS feed from a GitHub project
description: <p>Just append ".atom" to the releases page of a GitHub project.</p><pre>https://github.com/hashicorp/terraform/releases</pre><pre>https://github.com/hashicorp/terraform/releases.atom</pre>
image: ../../img/short-bits/default.png
short: true
tweet: Just append ".atom" to the releases page of a GitHub project.\nFor example for "https://github.com/hashicorp/terraform/releases" is just "https://github.com/hashicorp/terraform/releases.atom"
date: 2022-01-09
templateClass: tmpl-post
---

GitHub exposes an [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) feed that can be consumed from your favorite RSS reader such as [Feedly](https://feedly.com/) or whatever you like to use. 

In this way, we can be alert to new releases and have everything centralized in our RSS feed aggregator.

Is just as simple as accessing the "releases page" for the project you want, and append ".atom" to the URL in your browser.
For example, for the "terraform" project:

The releases page is in: [https://github.com/hashicorp/terraform/releases](https://github.com/hashicorp/terraform/releases).

Now, we append ".atom" to it and we have our feed: [https://github.com/hashicorp/terraform/releases.atom](https://github.com/hashicorp/terraform/releases.atom).
Just add it to your RSS aggregator and you are done 🤠
