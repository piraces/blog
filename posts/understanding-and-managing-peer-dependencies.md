---
title: Understanding and managing peer dependencies in your project
description: It's very common in JS projects when using several libraries with frameworks that we experience some type of peerDependencies warning in the console (using npm or yarn). These warnings are somewhat confusing are normally ignored. Let's learn more about peerDependencies and have our warnings gone from our projects.
date: 2020-01-19
tags:
  - dependencies
  - web
  - learning
  - javascript
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/understanding-and-managing-peer-dependencies/peerDependencies.png)
</div>

**Have you ever seen any similar warning to the ones in the image above?**

That is completely normal.
We usually install several libraries alongside our frameworks of choice in our projects. Each library and framework, has its own internal dependencies and other defined as *peerDependencies*.

## What are peer dependencies?

Well... a good definition can be found [in this Stack Overflow answer](https://stackoverflow.com/questions/26737819/why-use-peer-dependencies-in-npm-for-plugins/34645112#34645112):

> `peerDependencies` are for dependencies that are exposed to (and expected to be used by) the consuming code, as opposed to "private" dependencies that are not exposed, and are only an implementation detail.

Libraries and modules declare in their own `package.json` their own internal `dependencies` and `peerDependencies`.
These peer dependencies are dependencies that are exposed to the developer using the module, consuming the code. The module is telling us that it is a dependency we should take care about and install it. The module may expose an interface where the peer dependency is used, and then we should use a compatible version of the peer dependency to use the code in order to ensure a correct behavior with no errors.

For example some module, lets say `module-a`, has a peer dependency with `module-b`.
If we install `module-a` in our project, yarn or npm will warn us about a peer dependency on `module-b` that we should install.

If we do not use `module-b` in our project, the solution is pretty simple:
- Install the module as a dependency in the project. Depending if the module is for developing, testing, building our project or not; we should install it as a dev dependency or dependency correspondingly.

But what about if we are already using that `module-b` in our project?

## Conflicts...

Following the example above, if we have compatible versions of `module-b` then there is no problem.
For example, the module establish a peer dependency with `module-b` on version 2.0 and we are using the same version in our `package.json` (or declares a range of versions which our dependency is in).

If we use another version not the same of the peer dependency or not in the declared range, then npm or yarn will warn us about a conflict in peer dependencies in the installation process.

Then the approach should be adapt our dependency on `module-b` to a compatible version with the version used by the `module-a`:

- In some scenarios this can involve changing our code, because changing to that module version has breaking changes.
- In other scenarios, these can be simply solved without changing our code, only changing the dependency version.

## How do I solve this?

There are [some public projects of npm packages](https://www.npmjs.com/package/install-peerdeps) that solves this for us automatically, but I would personally not recommend these. Using them could cause us more problems than we previously have. Also, doing it manually as explained in the cases above, allows us to have more knowledge about our dependencies in our project and how the dependencies work.

The manual process involves tinkering with the package manager, installing/removing packages, adjusting versions and in some cases changing our code (as explained above).

With this two approaches choose the one that you think fits you the most.

## Conclusion

Sometimes is usual to ignore these warnings, but warnings are something we should care about. 
Knowing how peer dependencies work, we can get rid of these warnings, ensuring our project will work fine with all external dependencies.

It can be a little tricky to solve all warnings in certain scenarios, where it may imply changing our code and how we use certain modules, but for sure it is worth it. This makes our project more stable, resilient and ensures no unexpected errors when using some modules.

**Happy codding!**