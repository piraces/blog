---
title: Improving your code for style, quality, maintainability, design... with Roslyn Analyzers
description: Learn how Roslyn analyzers analyze your code for style, quality and maintainability, design and other issues.
date: 2021-05-31
tags:
  - dotnet
  - programming
  - csharp
  - utils
image: ../../img/posts/improve-your-code-using-roslyn-analyzers/banned_symbols_overview.png
layout: layouts/post.njk
---

<div align="center">

![Cover image](../../img/posts/improve-your-code-using-roslyn-analyzers/banned_symbols_overview.png)
</div>

[Roslyn Analyzers](https://github.com/dotnet/roslyn-analyzers) analyze your code for style, quality and maintainability, design and other issues.

I stumbled upon Roslyn Analyzers while contributing to an issue to the [Microsoft Bicep repository](https://github.com/Azure/bicep), where I found a [`BannedSymbols.txt` file](https://github.com/Azure/bicep/blob/main/src/BannedSymbols.txt) where it appeared that `System.Console.Write` and `System.Console.WriteLine` where being targeted and pointing to not use them for logging purposes.

That triggered my interest, as I tried to put a simple `Console.WriteLine` statement and an alert similar as the image above appeared in Visual Studio.

I thought that these kind of "custom rules" combined with the `csproj` `TreatWarningsAsErrors` option (`<TreatWarningsAsErrors>true</TreatWarningsAsErrors>`) could be a very great solution to maintain dotnet projects code quality, maintainability, design and style in a nice way. In my opinion, more useful and necessary in OSS projects or projects with lots of people working on it.

## Using BannedApiAnalyzers in a dotnet project

Using BannedApiAnalyzers in a dotnet project is easy:

1. First of all, install the [`Microsoft.CodeAnalysis.BannedApiAnalyzers`](https://www.nuget.org/packages/Microsoft.CodeAnalysis.BannedApiAnalyzers) NuGet in the project you want to use this feature.

2. Place a `BannedSymbols.txt` file in the project and mark to include it in the project. For example modifying the `csproj`:

```xml
<ItemGroup>
  <AdditionalFiles Include="BannedSymbols.txt" />
</ItemGroup>
```

Or with Visual Studio, specifying the file properties:
<div align="center">

![BannedSymbols.txt properties in Visual Studio](../../img/posts/improve-your-code-using-roslyn-analyzers/banned_symbols_properties.png)
</div>


3. Include your own custom rules to ban a symbol with the following format (description text is optional and will be displayed as description in diagnostics):

```
{Documentation Comment ID string for the symbol}[;Description Text]
```

4. **That's all!** The fields in the `BannedSymbols.txt` file will be processed and mark as warnings the use of the specified banned symbols. These warnings are of type `RS0030`, `RS0031` or `RS0035`. More info can be found in [the roslyn analyzers repo](https://github.com/dotnet/roslyn-analyzers/blob/main/src/Microsoft.CodeAnalysis.BannedApiAnalyzers/Microsoft.CodeAnalysis.BannedApiAnalyzers.md).


Take into account that we could use a `BannedSymbols.txt` file per project or a Solution wide one, including the same `BannedSymbols.txt` file in all projects.

## How to specify the rules

As explained above, the entries in `BannedSymbols.txt` must have the following format:
```
{Documentation Comment ID string for the symbol}[;Description Text]
```
For details on the ID string format, they recommend to take a look at ["Documentation Comments" docs](https://github.com/dotnet/csharplang/blob/main/spec/documentation-comments.md#id-string-format).

Nevertheless, we have a awesome example in the ["How to use Microsoft.CodeAnalysis.BannedApiAnalyzers" docs](https://github.com/dotnet/roslyn-analyzers/blob/main/src/Microsoft.CodeAnalysis.BannedApiAnalyzers/BannedApiAnalyzers.Help.md).

Taking this example, considering the following code:
```csharp
namespace N
{
    class BannedType
    {
        public BannedType() {}

        public int BannedMethod() {}

        public void BannedMethod(int i) {}

        public void BannedMethod<T>(T t) {}

        public void BannedMethod<T>(Func<T> f) {}

        public string BannedField;

        public string BannedProperty { get; }

        public event EventHandler BannedEvent;
    }

    class BannedType<T>
    {
    }
}
```

We can ban different symbols regarding the code above, taking a look to the following table:


| Symbol in Source                      | Sample Entry in BannedSymbols.txt
| -----------                           | -----------
| `class BannedType`                    | `T:N.BannedType;Don't use BannedType`
| `class BannedType<T>`                 | ``T:N.BannedType`1;Don't use BannedType<T>``
| `BannedType()`                        | `M:N.BannedType.#ctor`
| `int BannedMethod()`                  | `M:N.BannedType.BannedMethod`
| `void BannedMethod(int i)`            | `M:N.BannedType.BannedMethod(System.Int32);Don't use BannedMethod`
| `void BannedMethod<T>(T t)`           | ```M:N.BannedType.BannedMethod`1(``0)```
| `void BannedMethod<T>(Func<T> f)`     | ```M:N.BannedType.BannedMethod`1(System.Func{``0})```
| `string BannedField`                  | `F:N.BannedType.BannedField`
| `string BannedProperty { get; }`      | `P:N.BannedType.BannedProperty`
| `event EventHandler BannedEvent;`     | `E:N.BannedType.BannedEvent`


One of the main caveats which I found when using this feature and banning symbols was the use of wildcards... For example if you want to ban all `System.Console.Write` methods in a project, you must specify all variants of the methods, as you can see in [the Project Bicep example](https://github.com/Azure/bicep/blob/main/src/BannedSymbols.txt).

I made a demo project where I played around in a project with these banning tools, so you can watch how to use them and you can try things:

<div align="center">

[![piraces/BannedApiAnalyzersDemo - GitHub](https://gh-card.dev/repos/piraces/BannedApiAnalyzersDemo.svg)](https://github.com/piraces/BannedApiAnalyzersDemo)
</div>

## How this work when working with IDEs or without them

In Visual Studio, this analyzer works out-of-the-box, as you can see in the following image:

<div align="center">

![Warning in Visual Studio](../../img/posts/improve-your-code-using-roslyn-analyzers/banned_symbols_alert.png)
</div>

And if we enable the `TreatWarningsAsErrors` option:

<div align="center">

![Warnings as errors in Visual Studio](../../img/posts/improve-your-code-using-roslyn-analyzers/banned_symbols_as_errors.png)
</div>

Regarding other IDEs, [JetBrains Rider](https://www.jetbrains.com/rider/) also works out-of-the-box with this analyzer:

<div align="center">

![Rider support](../../img/posts/improve-your-code-using-roslyn-analyzers/banned_symbols_overview_rider.png)
</div>

Regardless of the IDE, the dotnet CLI will show the warnings (or errors) when building or running the project, which is also awesome:

<div align="center">

![dotnet CLI warnings/errors](../../img/posts/improve-your-code-using-roslyn-analyzers/console_error.png)
</div>

## More on Roslyn Analyzers

Microsoft created a set of analyzers called [`Microsoft.CodeAnalysis.FxCopAnalyzers`](https://www.nuget.org/packages/Microsoft.CodeAnalysis.FxCopAnalyzers) (which is now deprecated) that contains the most important ["FxCop"](https://en.wikipedia.org/wiki/FxCop) rules from static code analysis, converted to Roslyn analyzers. These analyzers check your code for security, performance, and design issues, among others. Check out [how to use them](https://docs.microsoft.com/en-us/visualstudio/code-quality/install-net-analyzers?view=vs-2019).

These analyzers have been consolidated in different packages.

The `BannedApiAnalyzers` is one of them, but there are others also as useful as this one:

- `Microsoft.CodeAnalysis.NetAnalyzers`: Included by default for .NET 5+. For earlier targets [see this](https://github.com/dotnet/roslyn-analyzers#microsoftcodeanalysisnetanalyzers).

- `Microsoft.CodeAnalysis.PublicApiAnalyzers`: Helps library authors monitor changes to their public APIs ([more info](https://github.com/dotnet/roslyn-analyzers#microsoftcodeanalysispublicapianalyzers)).

Check out [the Roslyn Analyzers repository](https://github.com/dotnet/roslyn-analyzers) for more information.

## Conclusion

I found this analyzer very useful and I personally will make use of it in my projects to improve the code quality and maintainability.

I think Roslyn analyzers are very powerful and can provide very useful features in our dotnet projects. It is worth trying it out in my opinion.

What do you think?

**Happy coding!** 🎉🎉
