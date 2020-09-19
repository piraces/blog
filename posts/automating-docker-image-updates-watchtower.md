---
title: Automating Docker container base image updates with Watchtower
description: The vast majority of Dockerfiles start from a parent image (a base image), which are part of our docker containers, the base from where our projects are built. These base images (normally) are being updated frequently, and we need to follow the updates to not keep our project outdated. Watchtower help us with this frequent updates, managing them seamlessly for our projects.
date: 2020-05-10
tags:
  - docker
  - devops
  - tutorial
  - automation
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/automating-docker-image-updates-watchtower/watchtower-docker.png)

</div>
<div align="center"><em>A process for automating Docker container base image updates</em></div>

In the case you are using Docker for your developments, projects, apps... Normally you use base images to start with. These base images are (normally) frequently updated, and in some cases we are going to want to keep up to date with a tag of a base image. In this cases, [Watchtower](https://github.com/containrrr/watchtower) is a great devops tool that is going to manage this cases for us with very little hassle.

For example, lets suppose having a very simple a Python project containerized with the official [Python 3 base image](https://hub.docker.com/_/python).
Our docker file references the base image with the `3` tag:

```docker
FROM python:3

ADD my_awesome_script.py /

RUN pip install numpy

CMD [ "python", "./my_awesome_script.py" ]
```

If we build the image and deploy the container, it's going to keep the latest base image of Python 3 at the moment of building it, but we want this base image to keep up to date to benefit from all changes and improvements being made in the different versions of Python 3.

In this cases Watchtower will help us!

## Overview

With [Watchtower](https://containrrr.github.io/watchtower/) we can update the running version of our containerized apps automatically. In the case of using our own base images, by simple pushing a new image to the [Docker Hub](https://hub.docker.com/) or our own image registry.

Watchtower will pull down the new image, shutdown gracefully the existing container and restarting it with the same options that were used when initially deployed.

This can be achieved as simple as running the following command in the same machine our container is deployed:

```shell
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
```

Watchtower will then start monitoring our running Docker containers and watch for changes to the images that those containers where originally started from. If a change its detected, Watchtower will automatically restart the container using the new image.

In the previous python example, Watchtower will pull the latest python base image every few minutes, and compare it to the one used to run the container. If a change its detected, it will stop/remove the container and restart it with the same options.

**Note**: *Since Watchtower code needs to interact with the Docker API in order to monitor the running containers, we need to mount `/var/run/docker.sock` with the `-v` flag when running it.*

## Features

Watchtower can be used as simply as the example above, but it has several features and options that make it a great tool in very different scenarios.

Let's see them.

### Configuring the Watchtower execution

There are [many arguments](https://containrrr.github.io/watchtower/arguments/) we can use to *customize* the behavior of Watchtower.
Some of the most interesting ones are:

- `--cleanup`: remove old images after updating.
- `--host`: the Docker daemon socket to connect to.
- `--include-stopped`: will also update created and exited containers.
- `--revive-stopped`: with the `--include-stopped` argument, it will start the containers after updating them.
- `--interval`: poll interval in seconds.
- `--label-enable`: to only update containers with the label `com.centurylinklabs.watchtower.enable` set to true.
- `--monitor-only`: only monitor, not update.
- `--no-restart`: useful if using an external system manages the containers.
- `--run-once`: run an update attempt one time and then exit.
- `--schedule`: allows us to specify a [Cron expression](https://crontab.guru/) which sets when to check for updates.

### Container selection

As we have seen, Watchtower will watch all containers and try to update them. However, in most cases we will need to specify which containers should be updated.

We can control this for example when running the Watchtower container, specifying the name of the containers to watch:
```shell
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower mycontainer myothercontainer
```

But the recommended way is to set the label `com.centurylinklabs.watchtower.enable` as true or false in our containers depending if we want Watchtower to update them or not. This can be achieved inserting the label in the Dockerfile or when running the container with the `--label` flag.

**Note**: *the mentioned label with a value of true is only needed if we start Watchtower with the `--label-enable` flag. This will only update containers with that flag set as true, otherwise it is not needed as it watch all containers by default (which don't have the label set as false). Useful to reverse the default behavior of Watchtower.*

### Notifications

Watchtower is able to send notifications when containers are updated. The types of notifications to send are set by passing a comma-separated list of values to the `--notifications` option or the `WATCHTOWER_NOTIFICATIONS` environment variable, which has the following valid values: `email`, `slack`, `msteams` and `gotify`.

We can also specify the log level for notifications using the `--notifications-level` option or the `WATCHTOWER_NOTIFICATIONS_LEVEL` environment variable, with the following values: `panic`, `fatal`, `error`, `warn`, `info`, `debug`.

In order to configure notifications for the different services, take a look at the [official guide](https://containrrr.github.io/watchtower/notifications/), which everything is covered in detail.

### Using private Docker registries

In the case of using private Docker registries, we need to supply Watchtower the authentication credentials for the registry with the environment variables `REPO_USER` and `REPO_PASS`. Another way to do this is to mount the host's docker config file into the container (at the root of the filesystem `/`).

Example:
```shell
docker run -d \
  --name watchtower \
  -e REPO_USER=username \
  -e REPO_PASS=password \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower container_to_watch --debug
```

### More features!

There are other features (such as linked containers, remote hosts, secure connections...) not covered in this blog post that can be useful in some cases too, please take a look to the [Watchtower project page](https://containrrr.github.io/watchtower) to see them all in detail.

## Conclusion

We have seen how to automate the update process of Docker images in our machines using a simple yet powerful tool.
This tool can be used in our development or production environments to simplify the process of keeping images of containers up-to-date.

I have also seen this tool being used in personal environments, such as [Raspberry](https://www.raspberrypi.org/) ones with docker containers where in that case are used for entertainment purposes (like [Plex](https://www.plex.tv/)) and its very useful too!

Personally, I am using this tool and I am very happy with the results. What about you? Give it a try!


**Happy deployments!** 🎉🎉
