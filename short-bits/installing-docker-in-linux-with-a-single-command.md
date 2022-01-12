---
layout: layouts/post.njk
title: Installing Docker in Linux with a single command
description: <p>Just execute the following command</p><pre>curl -sSL
  https://get.docker.com | sh</pre>
tweet: Simply execute the following command (and ensure you don't have docker
  already installed)\ncurl -sSL https://get.docker.com | sh
short: true
date: 2022-01-10
image: ../../img/short-bits/default.png
templateClass: tmpl-post
---
Docker provides a simple script to get started installing the Docker CE engine in [its GitHub respository](https://github.com/docker/docker-install), available in [https://get.docker.com](https://get.docker.com).

***Note:** please check before if your Linux distro is supported [here](https://docs.docker.com/engine/install/#server). Also ensure you don't have it installed from your distro packages repository.*

In this way, Docker it is as simple to install as executing the following command:
```bash
curl -sSL https://get.docker.com | sh

```

As Docker team says:

> "The purpose of the install script is for a convenience for quickly installing the latest Docker-CE releases on the supported linux distros"

⚠ **Warning:** It is dangerous to pipe an internet script to `sh` without reading it before, because of this I recommend the following approach:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
nano get-docker.sh # Verify the content is original and makes sense

sh get-docker.sh # Execute the script
```

This script will perform all the installation operation and output some relevant info for further information.

