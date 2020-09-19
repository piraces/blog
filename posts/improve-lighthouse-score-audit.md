---
title: Notes on my way to improve my Lighthouse score in my blog
description: In this post I explain my journey attempting to optimize my blog to the maximum, in order to achive the maximum score in Lighthouse audit tool.
date: 2019-06-20
tags:
  - showdev
  - performance
  - web
  - pwa
  - learning
layout: layouts/post.njk
---

![Final result on LightHouse](../../img/posts/improve-lighthouse-score-audit/LightHouse_100.png)

Half a year ago, I started this blog project in an attempt to learn new things, write them, and hopefully provide some people with great content.

I started giving a try [Github Pages](https://pages.github.com/) with some [Jekyll](https://jekyllrb.com/) stater theme, but in a short period I switched to [GatsbyJS](https://www.gatsbyjs.org) using the starter theme [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) because I felt more comfortable with React and It feels like more customizable in my opinion. Also switched the deployment to [Netlify](https://netlify.com) to try something new.

Gatsby is lightning fast since it generates only static content to serve and comes with great features that make sites by default with great performance. The simply starter theme that I used, also came with great SEO and accesibility features that made my journey easier.

Nevertheless, when I first ran an audit to my new blog using [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=en), this was my initial score:

![Initial result from starter theme](../../img/posts/improve-lighthouse-score-audit/Initial_LightHouse.png)

It is a great result to start with, but I felt I could do more, get reported issues fixed and get to the maximum score. It was a challenge for me where I could get more knowledge about web best practices (and also new concepts).

I got started looking carefully to every section of the report and improving each main category.

## Performance

![Details on performance by Lighthouse tool](../../img/posts/improve-lighthouse-score-audit/LightHouse_Performance.png)

Performance was one of the worst scores reported by the tool... the first contentful paint ([FCP](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint)) was not great, time to first interaction could be improved, images were not optimized and Javascript execution got several seconds to finish (and it's a very simple site).

First, I started getting my images optimized. I was only using one image in the landing page (my profile picture), all the other images are loaded from 3rd parties.
The image was uploaded in original resolution and quality, which it's not great to ending using it in a small profile picture box...
I used the default image editor on my PC to change the resolution and then [Squoosh](https://squoosh.app/) to convert the file to WebP and optimize the final size of the asset ([taking into account the web browsers that allows the format](https://caniuse.com/#feat=webp)). It was reduced in size by several KBs as expected...

Second, I realized that the theme was using a custom font ([which could affect site performance](https://developers.google.com/web/updates/2016/02/font-display)), and changed some CSS properties to allow the browser to *swap* from default system font to custom font when it was available. Only by applying `font-display: swap;` where the custom font was being applied was enough. This improved performance more than expected!

About this point, my performance score was about 98 out of 100.
Finally, using Google Chrome Dev tools I realized that the compression algorithm which the server was using to serve the files was *gz*. Then I thought about some article I read about [*brotli*](https://github.com/google/brotli) and other compression algorithms that improve the size and (de)compression speed of served files.

Switching to brotli algorithm for compression (via [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-brotli/)) and updating all project packages (to get latest improvements) were the last things to do for the 100 out of 100 score in performance and reduce times and sizes of served files.

- Note: nowadays Netlify does not offer support for brotli. Nevertheless running in Nginx (or supported servers), gives best results.

## Accesibility

The only concern about accessibility shown in the report was about using `aria-label` attribute in links to give them more info about the purpose/meaning of the link.

It was mostly contact links and social media links, which I provided with the recommended attribute and then all issues were resolved.

## Best practices

For achieving 100 out of 100 in "Best practices", I changed the site to use HTTPS by default, and not to load anything (images, scripts, assets) using only HTTP, as they are considered insecure resources. I also had to check images to be displayed with the [correct aspect ratio](https://developers.google.com/web/tools/lighthouse/audits/aspect-ratio).

Finally I checked the entire app looking for deprecated functions and some functions that [Google recommend to avoid](https://developers.google.com/web/tools/lighthouse/audits/appcache) and changing them.

## SEO

My main problem with the SEO score, was some [links that didn't have descriptive text](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text) and some [tap targets that were not sized appropriately](https://developers.google.com/web/tools/lighthouse/audits/tap-targets).

The first issue was easy to fix. The main problem was with links to contact me on social media accounts that didn't have descriptive text... So I added some descriptive text like 'Follow me on Twitter' and so to get this solved.

Finally, some buttons for navigating between posts and pages appeared to be without the necessary size to allow mobile users to tap them correctly without any problems. This was solved increasing the size of the reported buttons and tap targets and increasing the margin for them.

## Progressive Web App (PWA)

The Gatsby started theme that I use, match the criteria for a PWA, so I get the PWA score without any change.
Gatsby offers great resources for implementing a PWA and met the three criteria for them:

- Must run under HTTPS ✔️ 
- Must include a Web App Manifest ✔️ (gatsby-plugin-manifest)
- Must implement a service worker ✔️ (gatsby-plugin-offline)

## Conclusion

![The final prize](../../img/posts/improve-lighthouse-score-audit/LightHouse_100.png)

I have learned a lot about web best practices along the way. Knowledge that I will apply in further web developments, that could make my web faster, more accesible and better in general.

I will continue with the challenge to audit my websites and improving them to get the most out of them, because I think it's a great way to learn in this field.

How about you? What are you doing to improve your metrics?
