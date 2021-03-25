---
title: Project Bicep, the new ARM DSL from Microsoft
description: Bicep is a new DSL (Domain Specific Language) for deploying Azure resources in a declarative way. It aims to simplify the experience we are currently having with ARM templates for deploying Azure resources, with a cleaner syntax, modularity and re-usability.
date: 2021-03-24
tags:
  - dotnet
  - azure
  - learning
  - github
image: ../../img/posts/project-bicep-introduction/bicep_logo_image.png
canonical: https://www.plainconcepts.com/project-bicep-introduction/
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/project-bicep-introduction/bicep_logo_image.png)
</div>
<div align="center"><em>Project Bicep logo</em></div>

[Bicep](https://github.com/Azure/bicep) is a new DSL (Domain Specific Language) for deploying Azure resources in a declarative way. It aims to simplify the experience we are currently having with ARM templates for deploying Azure resources, with a cleaner syntax, modularity and re-usability.

It provides a transparent abstraction over ARM templates (we know ARM templates are **not** the easiest to author), all the things we can do with ARM templates until now (and in the future), can be done with bicep (excepting [known limitations](https://github.com/Azure/bicep#known-limitations) that Microsoft expects to solve in further versions). However, **Bicep is ready for production use**. Using Bicep and some of the tooling in this post, **it is now much easier to build out ARM templates**.

Therefore, I wanted to make a simple introduction, because I find useful to know about this new DSL, its simplicity and features it will have over traditional ARM templates to deploy Azure resources. It will allow devs to build ARM templates quicker and easier than ever.

## Why I should care about Bicep?

There already are alternatives like [Terraform](https://www.terraform.io/), [Pulumi](https://www.pulumi.com/), and other IaC offerings to avoid the complexity of ARM templates... Well, I would like to admit I have used Terraform for Azure in some projects and I am very happy with it, its Azure provider is really awesome, but in some cases, with new Azure features, products or configurations [we will have to wait to the provider to implement this changes](https://github.com/terraform-providers/terraform-provider-azurerm/issues).

Instead of this, Bicep is going to be covered in all [Azure support plans](https://azure.microsoft.com/en-us/support/plans/) starting on the 0.3 version. As it compiles down directly to standard ARM template JSON files and its supported and backed-up by Microsoft, we should have all the new features, products and configurations available out-of-the-box (which is reassuring).

<div align="center">

![ARM Architecture Schema](../../img/posts/project-bicep-introduction/arm.png)
</div>
<div align="center"><em>Azure Resource Manager architecture schema (Extracted from "Project Bicep Demo at Ignite 2020 by Mark Russinovich")</em></div>


In my opinion, after trying bicep, I think it deserves a try for devs deploying resources to Azure. However, it is important to highlight that there is no reason to switch to Bicep if you are already using terraform or other IaC provider, since there is so much effort after its providers to make them work great with Azure, and Microsoft itself it is backing up this effort. The reality is that there are so many projects using ARM templates and Microsoft is trying to make it easier to manage this and to provide its own tooling to start with IaC (without having to depend on third sources).

## Getting started with Bicep

It is very simple getting started with Bicep. We only need to install the necessary tooling (CLI and optionally, the VS Code extension). The process is simple and [documented in the Bicep repository](https://github.com/Azure/bicep/blob/main/docs/installing.md). Note that is also a [Bicep PowerShell Module](https://github.com/StefanIvemo/BicepPowerShell), if we want to have a great wrapper for the Bicep CLI in PowerShell.

The next step is to learn about Bicep and its syntax. A good start point its the official [bicep tutorial](https://github.com/Azure/bicep/blob/main/docs/tutorial/01-simple-template.md). There are also great resources to try Bicep, such as the [Bicep Playground](https://aka.ms/bicepdemo) and the [Visual Studio Code Devcontainer/Codespaces repo](https://github.com/Azure/vscode-remote-try-bicep).

After this process, and after playing with bicep for a while, we should be ready to use it and ease our Azure deployment templates.

<div align="center">

![Project Bicep Schema](../../img/posts/project-bicep-introduction/bicep_schema.png)
</div>
<div align="center"><em>Project Bicep schema (Extracted from "Project Bicep Demo at Ignite 2020 by Mark Russinovich")</em></div>


Interpreting the schema above, the process would be as simple as:

```bash
bicep build my-deployment.bicep # Just this extra step
az deployment group create my-deployment.json
```

Only with this extra step, we are simplifying the process of creating ARM templates a lot, and getting a lot of benefits. One of them I found very interesting is the possibility of making separate bicep files to generate a single ARM file, its modularity feature.

Let's take a quick look in differences between a bicep and an ARM file (which are equivalent), [from a simple quickstart template from the Azure repo](https://github.com/Azure/bicep/tree/main/docs/examples/101/sql-database):


<div align="center">

![Bicep VS ARM](../../img/posts/project-bicep-introduction/code_comparision.png)
</div>
<div align="center"><em>Deploying a simple SQL Database in just half the lines lines much more readable (Left: Bicep, Right: ARM)</em></div>


Looks simple and it is...

## But how do I convert my ARM templates to the Bicep format?

There are two different approaches:

- There is [a cheat-sheet available to compare](https://github.com/Azure/bicep/blob/main/docs/arm2bicep.md) the ARM template syntax an the native Bicep equivalent. This document should allow us to start converting existing ARM templates to its Bicep equivalent and starting to simplify them and using its features.

- The ***'decompile'*** option available in the Bicep CLI. This option is really great and usually works very well. It is important to note that because there is no guaranteed conversion from JSON to Bicep, decompilation may fail, or you may be left with errors/warnings in the generated Bicep file to fix up. However, is the most easy way to get bicep files out of our ARM ones. 
Just as simple as executing:

```bash
bicep decompile my-arm-template.json
```

Nevertheless, it is important to highlight that, since Bicep compiles down to ARM templates, we could also have Bicep and ARM templates coexisting at the same time, and incrementally convert the templates or let the old stay as standard ARM templates (as the developer wants).

The approach in our deployment process will almost be the same, since we only introduce one extra step in our deployment process: the compilation of Bicep files down to its JSON ARM template equivalent before deploying the ARM templates.

## Supporting Bicep in our Continuous Deployment Pipelines

Since Bicep its "only" tooling, we could easily implement compilation of Bicep files in almost every environment. A simple and generic approach would be to download the binary from the GitHub releases and execute the binary with our Bicep files to JSON. 

While being simple to implement this generic approach, the community and Microsoft itself its starting to provide us the neccessary tooling to include an step for Bicep in our pipelines.

### Azure DevOps Pipelines

For Azure DevOps Pipelines, I have already some implemented tasks to abstract and simplify the process for Bicep in a pair of tasks, which can be found in the README of the official project or in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=piraces.bicep-tasks).

Nevertheless, if you do not like to include third-party extensions in your Azure DevOps organization, we can do our own pipeline ([a simple GitHub Action sample](https://github.com/Azure/bicep/blob/main/docs/cicd-with-bicep.md) in the official repository, could be used as a base).

### GitHub Actions

There is a community developed [GitHub Action to include Bicep in our deployment process](https://github.com/marketplace/actions/bicep-build) when using GitHub Actions. As said in the Azure DevOps Pipelines section, we could implement our own action (there is [a simple GitHub Action sample](https://github.com/Azure/bicep/blob/main/docs/cicd-with-bicep.md) in the official repository).

### Other CI/CD environments

Bicep it is only a binary itself that can run cross-platform. So nowadays, I think there would be no problem in any CI/CD environment to introduce a extra step to compile '.bicep' files...

It would only be an executable that could be downloaded in every run or saved in our environment, that we need to run agains a series of '.bicep' files.

There is really no reason to start embracing Microsoft Bicep...

There is much more about Project Bicep to discover (and features to come!), for now, we wanted to give you this series of initial concepts so you can start testing what Project Bicep can offer.

---

**Originally published at [plainconcepts.com](https://www.plainconcepts.com/):**
- **English version**: [https://www.plainconcepts.com/project-bicep-introduction/](https://www.plainconcepts.com/project-bicep-introduction/)
- **Spanish version**: [https://www.plainconcepts.com/es/project-bicep-introduccion/](https://www.plainconcepts.com/es/project-bicep-introduccion/)