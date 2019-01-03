# PROTRACTOR-TestAutomation

Automation framework based on TypeScript, Protractor and Jasmine technologies.

## Pre-setup

1. Install **Node.js** from <https://nodejs.org>
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
   - [tsconfig.json](tsconfig.json)
   - [protractor.conf.ts](protractor.conf.ts)
   - [package.json](package.json)

If something missed just added it from files

## Run tests

We can run autotests in two ways:

1. The first one is on the type script files level compile `tsc`, then navigate to `cd tmp` and than run `protractor protractor.conf.js` command.

2. The second way is on the level of typescript files run command `npm run test` (command from package.json). In this case all file paths (for ex. app.config should have way like app.conf.json).

In case of first run - paths will be executed from tmp folder, so you need add ../app.conf.json

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

1. First of all, when you create autotests for application using protractor, make sure that your application client has written on AngularJS or Angular 2+ (SPA).

2. Before all commits add to your local repository `.gitignore` file. Because in other case, it is not gonna work and you can solve the [problems](https://www.git-tower.com/learn/git/faq/ignore-tracked-files-in-git) here.

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
.vscode settings.json
```

This file allows you to configure your code style displaying, colors, size and so on.

## Keep eyes on versions:

1. chromedriver (for updating in terminal run command: `npm run webdriver:update`)
2. node.js (`node -v` - checks current version, for updating - download tha latest directly from site)
3. npm (`npm -v`)

## Useful commands

This is going to monitor the folder for any changes in our TypeScript files and compile them behind the scenes.

```powershell
tsc *.ts --watch
```

## Debug configuration in VS Code

Configuration of debug is a part of VS Code settings (in is a launch.json file in .vscode folder):

1. Click on Debug button on left menu 
2. Add configuration - node.js - it is adds launch.json file into .vscode folder
3. Configure [launch.json](.vscode/launch.json) as on example
