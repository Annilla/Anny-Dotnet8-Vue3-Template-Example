# Anny-Dotnet8-Vue3-Template-Example

## 1. Pack nupkg file

Use cmd to pack nupkg file using `AnnyChang.Dotnet.Template.csproj`.

```
dotnet pack
```

File will be generated in `bin\Release\AnnyChang.Dotnet.Template.1.0.0.nupkg`.

## 2. Install a template package from a local nupkg file

Go to where nupkg file is location.

```
cd bin\Release\
```

Install package.

```
dotnet new install AnnyChang.Dotnet.Template.1.0.0.nupkg
```

## 3. Use Template

Go to where you want to put new project. Using `-n` to set new project name.

```
dotnet new annydotnet8vue3 -n testweb
```

Congratulations! You created a new project using custom template.

## 4. Uninstall Template

```
dotnet new uninstall AnnyChang.Dotnet.Template
```