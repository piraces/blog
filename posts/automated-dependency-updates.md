---
title: My way on automated dependency updates
description: In this post, I show how I manage to keep my dependencies up to date for my personal projects. For this purpose, I make use of Github Actions, Dependabot and CI/CD tools to fully automate the update of dependencies ensuring nothing breaks in the process.
date: 2019-12-15
tags:
  - dependencies
  - web
  - learning
  - showdev
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/automated-dependency-updates/Github_Dependabot.jpg)
</div>


In order to keep my dependencies updated in all my personal projects automatically, I use [Dependabot](https://dependabot.com/) in combination with [GitHub Actions](https://github.com/features/actions), [Travis CI](https://travis-ci.org/) and [Netlify](https://www.netlify.com/) deploy previews. 

Let's break into each step/tool of my workflow:

## Dependabot

Dependabot is the responsible of checking for package updates, open new PRs for the updates, and merge them automatically.

It has many options in order to adapt it to any project or desired behavior. In my case, I have set it to *Auto* bump all package versions specified in the *package.json*, scheduled daily and without any filters. I also set it to add a 'dependencies' label to each opened PR (in order to difference them from other PRs).

<div align="center">

![Dependabot main settings](../../img/posts/automated-dependency-updates/Dependabot_Settings.png)
</div>

There are other options regarding scheduling, pull request, merge and rate limiting options. These are configured as following for my personal repositories:
<div align="center">

![Dependabot Merge Options](../../img/posts/automated-dependency-updates/Dependabot_Merge_Options.png)
</div>

In my case, I have scheduled to run every day in the morning (except for weekends).

Regarding the PR options, I have specified to automatically rebase PRs if they have conflicts, which it is very useful when there are several PRs opened and merging one, generates conflicts with other.

I have also check the options to use directory branch names and to include security advisory details because I think they are useful and informative.

To configure Dependabot automatic merge, we have several options, filters and others.
<div align="center">

![Automatic Merge Settings](../../img/posts/automated-dependency-updates/Automatic_Merge_Settings.png)
</div>

Regarding automatic merge, I have set to treat PR approval as a request to merge (which I automate in the next section with a GitHub action).

I have also set to create a merge commit if the PR is merged by Dependabot to keep track of it.

The are other options for automatic PR merging, like enabling auto-merging to be enabled on projects. Then, Dependabot will auto-merge PR if there are no conflicts and checks for PRs passes (in projects with this option enabled).

**The only reason I have included the additional step of the GitHub action is to give more flexibility to my workflow in the future**, so I can add custom logic for each project and customize when the PRs should be merged (since by configuration, Dependabot PRs depend on my approval, which the GitHub action gives). But the action, could not be necessary at all.

## GitHub Actions

In my approach, I use GitHub actions to give the necessary approval to Dependabot PRs which is needed by Dependabot to auto-merge them (Dependabot treat the approval as a request to merge the PR).

Actually I approve every Dependabot PR without any additional logic. Nevertheless, I think this step could bring me more flexibility to add custom logic on when a specific Dependabot PR should be merged.

For example, if I have an specific library which I want to freeze (not upgrading it), or any other related logic, I can add this to the Github Action.

The base action I use for this right now is [hmarr/auto-approve-action](https://github.com/hmarr/auto-approve-action) (v2).

## Travis CI

I have set up Travis CI on my projects to check commits and provide additional PR checks to the Dependabot PRs.

In Travis CI, unit tests, the linter and other checks are run to check everything work as expected. Nevertheless, I consider this is not enough testing for the automated PRs... So I am considering to add e2e tests in the future (most probably using [Cypress](https://www.cypress.io/)).

If this check runs ok, Dependabot can continue with the automatic merging... but there is another additional check: Netlify.

## Netlify

My automated dependency updates projects are deployed on Netlify, so I added the option on Netlify to make a *preview* of the deploy and check if it does not fail to deploy and it looks and works as expected.

This is only an additional check to make sure the automation is enough covered.

## Workflow

After explaining each check and tool, let's get into the main workflow and what happens when Dependabot triggers.

My current automated workflow has the following steps:
- **Dependabot** checks Daily for available updates for packages listed in each *package.json* of my projects (currently I am only using it in JS projects, but it support other languages).
  - Whenever an update is available, **it opens a new pull request** to the project including the corresponding changes, estimated compatibility and the package changelog.

  - This pull request triggers all checks for pull requests, which includes one **GitHub Action** that approves the PR in my name ([hmarr/auto-approve-action](https://github.com/hmarr/auto-approve-action)), **Travis CI checks** to check the update does not break anything and a **Netlify deploy action** to preview the deploy and test there is no problem when deploying.

 - **Once all checks have successfully passed**, Dependabot automatically merges the PR to master which triggers the deploy to production (rebasing the branch if necessary).

 - **If one or more checks fail**, Dependabot comment on the PR explaining it won't merge the PR since some CI checks failed. Then we should analyze the problems and manually fix them to upgrade the package. Nevertheless, if we think it can be something related to the package itself, or it is not worth it to update, we can just close the PR or tell Dependabot (using the options available in the Dependabot PR description in the PR comments) to not upgrade that package or wait to other version.


This is the final result:
<div align="center">

![CI Workflow](../../img/posts/automated-dependency-updates/Flow_CI_Approval.png)
</div>
<div align="center">

![Final result](../../img/posts/automated-dependency-updates/Merge_Notifications.png)
</div>

Daily automated dependencies updates for my main personal projects, simple and without fear of breaking them.

How do you do in order to manage your dependencies their potential security vulnerabilities?

**Happy codding!**