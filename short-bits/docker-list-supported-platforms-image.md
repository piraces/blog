---
layout: layouts/base.njk
title: How to get supported platforms for docker image with docker
description: <pre>docker run --rm mplatform/mquery [IMAGE]:[TAG]</pre><pre>docker run --rm mplatform/mquery python:latest</pre>
image: ../../img/short-bits/default.png
short: true
date: 2022-01-07
templateClass: tmpl-post
---

If you have [Docker](https://docs.docker.com/get-docker/) installed, just execute the following command with your desired image (in this case "python"):

```bash
docker run --rm mplatform/mquery python:latest
```

***Note:** Make sure you specify a tag for the image (such as latest). Otherwise, the command will not work.*

An example of this execution is the following:

```text
Image: python:latest (digest: sha256:dbbfcbf95f6b596d2be1d8f3b368016619f78f829facf6f2e361bea1151794e5)
 * Manifest List: Yes (Image type: application/vnd.docker.distribution.manifest.list.v2+json)
 * Supported platforms:
   - linux/amd64
   - linux/arm/v5
   - linux/arm/v7
   - linux/arm64/v8
   - linux/386
   - linux/mips64le
   - linux/ppc64le
   - linux/s390x
   - windows/amd64:10.0.20348.405
   - windows/amd64:10.0.17763.2366
   - windows/amd64:10.0.14393.4825
```