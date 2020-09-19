---
title: Getting notified on the latest releases of your day-to-day tech stack
description: In this non-stopping world of Software Development, we are in need to know the latest updates, improvements and fixes in the tech stack we use everyday. Knowing the latest updates of our used technologies, provide us more advantage in case of making decisions, keeping our projects up-to-date and getting the most out of them. Because of this, we normally are interested to get track of them and be up-to-date. In this post we are reviewing some techniques to automate this process.
date: 2020-07-04
tags:
  - productivity
  - github
  - tutorial
  - automation
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/notifications-new-releases-tech-stack/github_release.png)

</div>
<div align="center"><em>Get notified on the latest release and keep yourself up-to-date!</em></div>

Nowadays there are **lots** of technologies and dependencies involved in our day-to-day projects, therefore making it more difficult to know them all and to track their changes.

New releases of tools, software, and software development related technologies happen almost every day. This can sometimes be kind of frustrating. You can be working in a brand new project using the latest available versions, and in the process of developing the project, versions bump and new features and fixes are available. This don't have to be bad indeed... These new versions can improve our product/project and solve some problems for us, and we know we have to update them someday. I personally think it's better to bump version by version than bumping from one version to another with several versions in the middle (which may result in a complicated process).

Then... How to get up-to-date with all of these? Can we manage to get notified every time a technology we use is updated? Sure we can do it!

## Approaches

There are different approaches to accomplish this. We are going to review some of the most used ones and the ones that I prefer.

## Using GitHub notifications

Nowadays with the [Open Source initiative](https://opensource.org/), the majority of projects we use to develop every day are open sourced and hosted in platforms like GitHub, GitLab and others (for example: [Node.js](https://github.com/nodejs/node), [Deno](https://github.com/denoland/deno), [Vue.js](https://github.com/vuejs/vue), [Microsoft projects](https://github.com/microsoft)...).

This projects usually manage their releases using GitHub releases, so we can use the built-in GitHub notifications to get notified on every release of the projects we want to track in a very simple way (just tap on watch and select releases):

<div align="center">

![Watch releases in a GitHub project](../../img/posts/notifications-new-releases-tech-stack/github_releases_notifications.png)
</div>

This way new releases will appear in our feed of notifications in our profile of GitHub. Depending in our notifications configuration, we can achieve to get this notifications in our mail too.

Simple.

Nevertheless, I found this process a little bit *confusing* sometimes and I missed some of the new releases of my used projects. This can be because, in my case, the GitHub notifications feed was plenty of notifications of mentions, PRs, reviews, and others. So, I tried to change this and organize myself better, moving this notifications to a RSS feed.


### GitHub release notifications in a RSS feed

GitHub provides an RSS feed for releases for every project, which follows the following URL structure:

`https://github.com/{USER}/{PROJECT}/releases.atom`

For example:

`https://github.com/nodejs/node/releases.atom`

[View the raw feed](https://github.com/nodejs/node/releases.atom)

Knowing this, we can use our favorite RSS reader/client to group RSS feeds of different releases and use it to read and be notified for the latest releases.
In my case, I use [Feedly](https://feedly.com/), to make a feed and group different sources naming and organizing them:

<div align="center">

![Feedly feed of different GitHub releases](../../img/posts/notifications-new-releases-tech-stack/feedly_github_releases_notifications.png)
</div>

In this way, I personally check the feed every day if new releases have been published or if some versions have went out of preview to an stable version.
Also note, that **it's always important to check the changelog** usually provided with each release, before attempting to use the last version (there could be breaking changes or deprecated functionalities you'll need to manage).

## Not on GitHub? No problem...

There could be some projects that are not open sourced, or using another Version Control platform like [GitLab](https://gitlab.com/).
In the case of GitLab, we can subscribe to release notifications like GitHub and manage them to get the notifications in our mail easily as explained with GitHub above:

<div align="center">

![Watch releases in a GitLab project](../../img/posts/notifications-new-releases-tech-stack/gitlab_releases_notifications.png)
</div>

**What if a project is not open sourced or not in any of the mentioned platforms?**

Well... There are also plenty of options to keep track of them. Usually largely used projects tend to have a Twitter account, a blog, or other resource we can watch and keep up-to-date.

In this case, to make all notifications came to the same place we could use some mechanism of automation to watch for us blog updates or twitter accounts and notify us on new releases.

Some tools like [IFTTT](https://ifttt.com/), provides us simple yet powerful workflows to automate this kind of things. For example, we can set up a workflow to get new releases information from a blog (via RSS) to our mail:

<div align="center">

![IFTTT Automation](../../img/posts/notifications-new-releases-tech-stack/ifttt_automation.png)
</div>

Other options could be to watch a Twitter account and send it to our mail, set up an RSS feed of a Twitter account updates which contains certain words (like "release"), and other workflows you could imagine.

Personally, I have not found a project whose releases I couldn't track.

## Conclusion

There are plenty of options to get up-to-date with your tech stack or favorite tooling. Simply use the most comfortable to you, or the one you find more productive.

I'm sure this process will help you out to keep you up-to-date and be a more informed and organized developer.

Do you use another way to keep up-to-date with new versions and releases?

**Happy coding!** 🎉🎉
