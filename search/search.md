---
layout: layouts/base.njk
title: Search
description: Search for any content in this page.
date: Last Modified
image: ../../img/search.png
templateClass: tmpl-post
eleventyNavigation:
  key: Search
  order: 6
---

<form action="https://www.google.com/search" method="get" class="search">
  <input type="hidden" name="q" id="q" value="site:https://piraces.dev">
  <label for="search-str">Search <small></label>
  <input type="text" name="q" id="search-str"></p>
  <button type="submit" class="submit">Search with Google</button>
</form>
