---
layout: layouts/post.njk
title: Check if an IP comes from Tor (is browsing with Tor)
description: <p>Just execute the following command</p><pre>curl -sSL
  https://check.torproject.org/torbulkexitlist | grep [IP]</pre><p>Or check it
  in <a href="https://metrics.torproject.org/exonerator.html">ExoneraTor</a></p>
tweet: Simply execute the following command\ncurl -sSL
  https://check.torproject.org/torbulkexitlist | grep [IP]\nOr check it in
  https://metrics.torproject.org/exonerator.html
short: true
date: 2022-01-10T17:46:11.610Z
image: ../../img/short-bits/default.png
templateClass: tmpl-post
---
[The Tor Project](https://www.torproject.org/) provides a full list of IPs that are currently [exit nodes](https://community.torproject.org/relay/types-of-relays/) in the [Tor network](https://en.wikipedia.org/wiki/Tor_(network)). Exit nodes are basically the public "exit doors" from the Tor network to the public internet, so if a user is browsing with Tor and access a website in the public internet the IP of the exit node will be the IP of that user.

In this way, we can detect if a user is browsing with Tor. Using Tor **is not illegal** and **a user that uses Tor is not malicious per se**. I think it makes no sense to block all exit Tor IPs, because the most users can make a good use of Tor.

Nevertheless, you can identify it for other purposes.

There are other ways to identify if an IP is an IP of a Tor exit node:

- Check it directly in [ExoneraTor](https://metrics.torproject.org/exonerator.html), which is a frontend to request this kind of data (also accepts a date).

- Perform a DNS lookup to the [public TorDNSEL service](https://www.torproject.org/projects/tordnsel.html.en) the way to do this is reversing an IP, prepend it to `.dnsel.torproject.org` and perform a lookup. If the result starts with `127.0.0.` and it is not `127.0.0.1`, then the IP is the IP of an exit node. For example with the IP `200.99.10.10` we can do it with:

```bash
dig 200.99.10.10.dnsel.torproject.org
```
Or:
```batch
nslookup 200.99.10.10.dnsel.torproject.org
```

- There is also a [NPM package](https://www.npmjs.com/package/istorexit) that you can use (named "IsTorExit"):

```bash
npm install -g istorexit
```

And that's all! Hope its helpful...