import { Config } from 'protractor';
import { SpecReporter } from "jasmine-spec-reporter";

const specTimeout = 360000;
let AllureReporter = require('jasmine-allure-reporter');
export let config: Config = {
    allScriptsTimeout: specTimeout,
    getPageTimeout: specTimeout, // timeout for opening all pages
    framework: 'jasmine2',
    directConnect: true, // starts tests on local browser, not remote server
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {           
            args: [
                '--start-maximized',
                // '--headless',
                // '--window-size=1920,1080',
            ],
        },
        // seleniumAddress: 'http://localhost:4040/wd/hub',
        // shardTestFiles: true,
        // maxInstances: 3,
    },
    specs: ['./autotests/*.js'],

    SELENIUM_PROMISE_MANAGER: false,

    async onPrepare() {
        
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'test-results/allure-results'
          })); // add for allure report
        
        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true,    // display each suite number (hierarchical)
                },
                spec: {
                    displayDuration: true,
                    displayErrorMessages: true,
                    displaySuccessful: true,
                    displayFailed: true,
                    displayPending: false,
                    displayStacktrace: true,
                },
                summary: {
                    displayDuration: true,
                    displayErrorMessages: false,
                    displaySuccessful: true,
                    displayFailed: true,
                    displayPending: false,
                    displayStacktrace: false,
                },
                print: (log: string) => {
                    console.log(log);
                },
            })        
        )
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: specTimeout,
        print() { },
    },
    disableChecks: true,
    noGlobals: true,

};