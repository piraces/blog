---
title: Performing static code analysis of your Kubernetes object definitions with a Github Action
description: My submission to the GitHub Actions x DEV Hackathon! (2020)
date: 2020-09-14
tags:
  - opensource
  - github
  - showdev
  - automation
image: ../../img/posts/kube-score-github-action/Cover_Image.webp
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/kube-score-github-action/Cover_Image.webp)
</div>

Nowadays, [Kubernetes](https://kubernetes.io/) is one of the [most popular and loved platforms](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms) used by the community, to run and orchestrate container workloads.

It is present in several open-source and private projects as the base of its infrastructure. They trust to use Kubernetes as a platform.

## The problem

The world of Kubernetes can be sometimes very complex and if we make use of it, we need to ensure we are doing it right.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">One time I tried to explain Kubernetes to someone.<br>Then we both didn&#39;t understand it.</p>&mdash; SwiftOnSecurity (@SwiftOnSecurity) <a href="https://twitter.com/SwiftOnSecurity/status/1158764816426840064?ref_src=twsrc%5Etfw">August 6, 2019</a></blockquote>

There are lots of tools that can ease that work for us to simplify the process to get Kubernetes working correctly as our platform.

As you may know, the Kubernetes workloads are most commonly defined as YAML formatted documents. Sometimes, it is rather hard to express constraints or relationships between manifests files.

### What can be done to help ease the process of using Kubernetes correctly?

There are existing tools to integrate static checking allowing catching errors and policy violations closer to the development lifecycle.

These tools gives us the guarantee around the validity and safety of the resource definitions is improved, therefore you can trust that production workloads are following best practices (which [is a must nowadays](https://www.sentinelone.com/blog/kubernetes-security-challenges-risks-and-attack-vectors/)).

As developers, we need to guarantee the validity and safety of our Kubernetes manifests to ensure the security and integrity of our production environments.

Here comes when the tool [kube-score](https://kube-score.com/) can help us.

Kube-score is an [open-source](https://github.com/zegl/kube-score) tool that performs Kubernetes object analysis with recommendations for improved reliability and security.

How can we introduce kube-score in our CI/CD processes?

**[GitHub Actions](https://github.com/features/actions) to the rescue!**

### My Workflow

My developed GitHub action ([kube-score check](https://github.com/marketplace/actions/kube-score-check)), allows GitHub users to execute `kube-score` in their workflows along other actions and guarantee the validity and safety of their Kubernetes manifests. 

It is very simple to use, you only have to perform a checkout of the project repository and execute the action, which takes as input an array of manifests (or directories with manifests) which you want to validate and test (wildcards supported):

<div align="center">

![How to use the action](../../img/posts/kube-score-github-action/carbon_use_action.jpg)
</div>

Read [the full Readme of the project](https://github.com/piraces/kube-score-ga/blob/master/README.md) to see all options.

### Submission Category:
**Maintainer Must-Haves** / **DIY Deployments**


### Yaml File or Link to Code

Please take a look at the action repository, and give any feedback if you want! 

Contributions are welcomed too!

[![piraces/kube-score-ga - GitHub](https://gh-card.dev/repos/piraces/kube-score-ga.svg)](https://github.com/piraces/kube-score-ga)


See the YAML file for the action: [action.yml](https://github.com/piraces/kube-score-ga/blob/master/action.yml)

### Additional Resources / Info

In the links below, you can see the GitHub action running with different forks of popular projects, such as the **[Application Gateway Ingress Controller](https://docs.microsoft.com/en-us/azure/application-gateway/ingress-controller-overview) (AGIC) of Azure**, or the examples provided in the **official repo of Kubernetes**.

Take a look and see how AGIC [Custom Resource Definitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions) (CRDs), [are passing all validations and recommendations](https://github.com/piraces/application-gateway-kubernetes-ingress/runs/1113739099?check_suite_focus=true) (as is a ready to use in production controller).

- See the GitHub Action in use: 
  - [Kubernetes/examples](https://github.com/kubernetes/examples) repository (fork): https://github.com/piraces/examples/actions

  - [Azure/application-gateway-kubernetes-ingress](https://github.com/Azure/application-gateway-kubernetes-ingress) repository (fork): https://github.com/piraces/application-gateway-kubernetes-ingress/actions

- GitHub Repository: https://github.com/piraces/kube-score-ga

- GitHub Marketplace: https://github.com/marketplace/actions/kube-score-check
