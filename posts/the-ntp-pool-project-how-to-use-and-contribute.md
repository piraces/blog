---
title: 'The NTP Pool project: How to use and contribute'
description: >-
  The NTP Pool project is a virtual server farm that offers NTP service for
  everyone, easy to use and easy to contribute to.
date: 2019-09-14
tags:
  - ntp
  - tutorial
  - contributing
  - community
image: ../../img/posts/ntp-pool-project-use-contribute/Analog_Clock.jpeg
layout: layouts/post.njk
---

<div align="center">

![Cover Image](../../img/posts/ntp-pool-project-use-contribute/Analog_Clock.jpeg)
</div>

## Introduction

The [NTP Pool Project](https://www.ntppool.org) is a large virtual farm of servers that offers [NTP service](https://en.wikipedia.org/wiki/Network_Time_Protocol) for anyone. The project consists of a DNS system that balances the load of millions of queries of time synchronization for devices all across the world (tablets, smartphones, computers, routers...). Also vendors like Ubuntu, [use this service](https://help.ubuntu.com/lts/serverguide/NTP.html) for all its clients (it's also commonly used in many other Linux distros). The actual goal is to provide real and accurate time synchronization to this devices, thanks to the great number of servers, using them to divide the load along the pool.

Actually, the pool has around [4000 servers](https://www.ntppool.org/zone) in different *stratums*, syncing time across them and offering time synchronization services.


These servers are in different *stratums* following the NTP hierarchy:

<div align="center">

![NTP Hierarchy](../../img/posts/ntp-pool-project-use-contribute/NTP_Hierarchy.png)
</div>
<div align="center">
Hierarchy of an NTP system
</div>

To know more about different stratums and the characteristics of each stratum servers you can take a look [here](https://en.wikipedia.org/wiki/Network_Time_Protocol#Clock_strata).

## Using the pool

If you are interested in using this awesome service, please follow the instructions on the official page: [How do I use pool.ntp.org?](https://www.ntppool.org/en/use.html)

Which is basically changing your NTP servers to point to the servers in the pool:

```markup
server 0.pool.ntp.org
server 1.pool.ntp.org
server 2.pool.ntp.org
server 3.pool.ntp.org
```

The 0, 1, 2 and 3.pool.ntp.org names point to a random set of servers that will change every hour

## Contributing

> "Individually, we are one drop. Together, we are an ocean." 
> -- Ryunosuke Satoro

Contributing is very easy, so if you feel like wanting to contribute, simply follow the next steps.


## Can I contribute?

To contribute you only need a static IP and permanent public network access. If you met these requirements, try and follow the tutorial to contribute to the project!

*Note: please read carefully the official page on joining the pool, before you proceed (https://www.pool.ntp.org/en/join.html)*

## Setting up the server

The following instructions are for Linux distributions, specifically for Ubuntu/Debian, but the package and the configuration file are almost the same across all distros. Also, we are going to configure a stratum 3 server, but the instructions are almost the same for a stratum 4 or 2 server.


### 1. Install the NTP daemon

Simply execute the install command:
`sudo apt-get install ntp`


### 2. Choosing static NTP Servers

First we must search for *stratum 2 servers* to sync with.
**It is important to choose at least 4** *stratum 2 servers*, that are geographically near to our server (at least in the same country).

You can search for servers in this official list: http://support.ntp.org/bin/view/Servers/StratumTwoTimeServers

If you want to configure an stratum 2 server, take some servers from the Stratum 1 list:
http://support.ntp.org/bin/view/Servers/StratumOneTimeServers

*Note: choose only 'OpenAccess' servers unless you’ve received approval to choose other type of server.*

Once we have the servers, we have to know its IPv4 and IPv6 addresses. Sometimes the IP address it is informed in the list, but if it is not or you want to confirm the IP, we can extract this info by executing a basic *dig* command. For example:

`dig 6.ntp.snails.email ANY`

Which produces the following output:

```markup
;; ANSWER SECTION:
6.ntp.snails.email.	5999	IN	A	139.162.170.219
6.ntp.snails.email.	5999	IN	AAAA 2a01:7e01::f03c:91ff:fe8b:e9e0
```


### 3. Configure the NTP daemon

Once we have all IP addresses of the servers we chose, we are ready to configure the NTP daemon.

Modify the configuration file for NTP, usually located in `/etc/ntp.conf`. Delete all lines starting with the *pool* word that are there by default, and then paste line by line the servers in the format:

`server ntp_server_1 iburst` 

Where *'ntp_server_1'* is IP address of the server (one address per line).

Also, make sure that your configuration file has a `driftfile` and the `noquery` option is present in the restrict lines of the config file. 

The `driftfile` option, helps to achieve a stable and accurate time, storing  the frequency offset and the required frequency to remain in synchronization with correct time.

The `noquery` option does not allow management queries, which is useful to prevent attacks or being vulnerable to queries that could modify the state of the server.

The final config file will be something like this:

```markup
driftfile /var/lib/ntp/ntp.drift

server ntp_server_1 iburst
server ntp_server_2 iburst
server ntp_server_3 iburst
server ntp_server_4 iburst
server ntp_server_5 iburst

# By default, exchange time with everybody, but don't allow configuration.
restrict -4 default kod notrap nomodify nopeer noquery limited
restrict -6 default kod notrap nomodify nopeer noquery limited

# Local users may interrogate the ntp server more closely.
restrict 127.0.0.1
restrict ::1
```

The `iburst` option following the server, is there because of the NTP Pool recommendations. With this option, if the server is unreachable, this will send eight packets instead of one packet (only the first time).


### 4. Restarting the NTP daemon and testing the config

Once configured, we simply have to restart the service to load the new configuration:

`sudo systemctl restart ntp`

After restarting the service, wait around 5 minutes until it stabilizes the time sources, make sure the port 123 (UDP) is open, and then [test it](https://servertest.online/ntp). You can also test the service using the command `ntpq -p` or from other server using `ntpdate -q SERVER_IP`.


### 5. Add the server to the NTP Pool

This is the final step. Our server is running and configured correctly, so let's add it to the pool.

- Go to [ntppool.org](https://www.ntppool.org), and click in ['Manage Servers'](https://manage.ntppool.org/manage).
- Sign up (or login if you already have an account).
- Write the hostname of your NTP server or one of its IPv4 / IPv6 static addresses.
- Submit it!

If you have also an IPv6 address then submit it too when adding the servers.

Once done, your server must appear in the ['Your servers'](https://manage.ntppool.org/manage/servers) list, where you can adjust  the net speed of your server to match the requirements.

Finally, the current score of your server will be improving over time. Initially is possible that your server will have a negative or less than 10 points in score, which means it will be excluded from the pool. But, let the service sync the time from sources and it will be added to the pool.


### 6. Congrats!

Your server is part of the pool and is helping syncing time for several devices.

Thank you for contributing!! 🎉

<div align="center">

![Feels good!](../../img/posts/ntp-pool-project-use-contribute/Feels_Good_Man.gif)
</div>
