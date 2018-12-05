# PROTRACTOR-TestAutomation

Automation framework based on TypeScript, Protractor and Jasmine technologies.

## Pre-setup

1. Install **Node.js 11.0.0** from <https://nodejs.org/dist/v11.0.0/node-v11.0.0-x64.msi>
2. Install **Chrome Browser** from <https://www.google.com/chrome/browser/desktop/index.html>
3. Install VS Code

## Base setup project from scratch instruction

1. Create test directory and opened it via VS Code
2. Make sure that all pre-setup conditions are satisfy
3. In VS Code terminal perform next commands:
  
```powershell
npm init -y - added package.json to folder
npm install typescript - added node_module
npm install -g protractor  - added locked file
npm install jasmine
npm run webdriver:update
npm install jasmine-spec-reporter --save-dev
npm install @types/jasmine
npm install @types/node
```

4. Set-up next important files (see examples):
   - [tsconfig.json](tsconfig.json);
   - [protractor.conf.ts](protractor.conf.ts);
   - [package.json](package.json);

If something missed just added it from files

## Run tests

Restore nuget packages:

```powershell
npm install
```

Compile typescript files:

```powershell
tsc
```

From VS Code in terminal:

```powershell
protractor protractor.conf.js
```

## Notes

1. First of all, when you create autotests for application using protractor, make sure that your application client has written
on AngularJS or Angular 2+.

2. Before all commits add to your local repository .gitignore file. Because in other case, it is not gonna work
and you can solve the [problems](https://www.git-tower.com/learn/git/faq/ignore-tracked-files-in-git) here.

```powershell
protractor.conf.ts
```

This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). It will use the defaults for all other configuration. Chrome is the default browser.

```powershell
tsconfig.json
```

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.
Here in include block we specify from witch folders we want to perform tsc command.

```powershell
package.json
```

Contains all the information of your web app.It contains all the metadata : set of data which describes and gives info about all other data.Package.json provides a simple way to keep track of packages that are being used in application.

```powershell
.vscode -> settings.json
```

This file allows you to configure your code style displaying, colors, size and so on.

## Useful commands

This is going to monitor the folder for any changes in our TypeScript files and compile them behind the scenes.
```
tsc *.ts --watch
```