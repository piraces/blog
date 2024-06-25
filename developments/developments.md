---
layout: layouts/base.njk
title: Developments
description: I love contributing to open source software... Here is a short brief about my contributions
image: ../../img/developments/development.png
templateClass: tmpl-post
eleventyNavigation:
  key: Developments
  order: 5
---

* [ Shortalink ](#shortalink)

* [ tldr pages browser extension ](#tldr-pages-browser-extension)

* [ Azure DevOps Bicep Tasks ](#azure-devops-bicep-tasks)

* [ dotnex ](#dotnex)

* [ guid-ts ](#guid-ts)

* [ kube-score check ](#kube-score-check)

* [ developer.li ](#developerli)

* [ Process Mining for Security ](#process-mining-for-security)

-----------

## Shortalink

**Custom link shortener service using Cloudflare Workers + KV store one of my domains (privacy first focused)**

This project is privacy friendly, nothing but the URL and necessary data for rate limit are collected, and after a time discarded (except for the URL if it is fair usage).

This API is easily consumed programmatically, such as through shell functions, making it trivial to shorten links on the fly. It is console / cURL friendly.
The browser frontend is available in GitHub Pages in [https://go.shorta.link/](https://go.shorta.link/).

[View source code](https://github.com/piraces/shorta.link)
[View the project live in shorta.link](https://shorta.link/)

-----------

## tldr pages browser extension

**📚 A browser extension for [tldr-pages](https://github.com/tldr-pages/tldr). Compatible with Chromium based browsers and Firefox.**

How it works:
- Highlight and right click a command (or right click a link) on your webpage and select "tldr-pages" in the dropdown a tooltip should appear with information fetched from the "tldr-pages" project (https://github.com/tldr-pages/tldr).

The extension is published in the official marketplaces for the following browsers:

- For Edge: [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tldr-pages/hbplonhehblpcghgkhnjepdbohbpkoak)
- For Chrome: [in the Chrome Store](https://chrome.google.com/webstore/detail/tldr-pages/fcccijijdgmmcjnifgdhcmepnkcdingf).
- For Firefox: [Firefox Browser Add-ons](https://addons.mozilla.org/es/firefox/addon/tldr-pages/).

[View project](https://github.com/piraces/dotnex)

-----------

## Azure DevOps Bicep Tasks

**Azure DevOps set of tasks that allow to install and run Microsoft Bicep CLI commands**

This is a simple yet useful Azure DevOps set of tasks that allow to install and run [Microsoft Bicep CLI](https://github.com/Azure/bicep) commands in Azure Pipelines (cross-platform).


[View project](https://github.com/piraces/azure-devops-bicep-task/)
[**View in Marketplace**](https://marketplace.visualstudio.com/items?itemName=piraces.bicep-tasks)

-----------

## dotnex

**.NET tool to execute other dotnet tools without installing them globally or in a project**

A simple .NET tool to execute other dotnet tools without installing them globally or in a project (a similar approach to [npx](https://www.npmjs.com/package/npx) from [npm](https://www.npmjs.com/)).

**Note**: This project was previously named `dotnet-tool-run`, but it was renamed to simplify and provide a shorter name. You can see the older package [here](https://www.nuget.org/packages/dotnet-tool-run/).

[View project](https://github.com/piraces/dotnex)
[**View in Nuget.org**](https://www.nuget.org/packages/dotnex/)

-----------

## guid-ts

**Package for generating and managing globally unique identifiers (GUIDs) v4 in Typescript**

Package for generating and managing globally unique identifiers (GUIDs) v4 in Typescript.

Lightweight, simple, dependency free, and reliable package.

This package provides a class which can parse and generate a GUID based on the [RFC4122](https://www.ietf.org/rfc/rfc4122.txt).
The package also expose methods to manage GUIDs.


[View project](https://github.com/piraces/guid-ts)
[**View in npmjs.com**](https://www.npmjs.com/package/guid-ts)

-----------

## kube-score check

**Performing static code analysis of your Kubernetes object definitions with a Github Action**

![kube-score check](../img/developments/kube-score-check.png)

GitHub Action that executes [kube-score](https://kube-score.com/) with selected manifests (with support for YAML, Helm or Kustomize manifests).

[View project](https://github.com/marketplace/actions/kube-score-check)

-----------

## developer.li

**Subdomains for free using the domain developer.li (built in Angular)**

![developer.li](../img/developments/developerli.png)

Simple subdomain availability check web which helps you to configure a free subdomain in the developer.li domain (made with the NES.css awesome style).

[View project](https://developer.li/)

-----------

## Process Mining for Security

**Process Mining, Data Mining, Model Driven Software Engineering, Web Information Systems**

![Process Mining for Security](../img/developments/pms.png)

Approach for detecting new threats in Web information systems before they materialize and produce some kind of damage. This approach is based on process mining techniques and semiautomatic creation of formal models, from the diagrams produced during the design and development phases of the system to be protected and its log files.

[View project](http://sid.cps.unizar.es/PMS/)
