// const {existsSync, mkdirSync} = require('fs');
// const allure = require('allure-commandline');


export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.e2e.js'
    ],
    exclude: [],
    maxInstances: 2,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1280,800']
            }
        },
        // {
        //     browserName: 'firefox',
        //     'moz:firefoxOptions': {
        //         args: ['-headless']
        //     }
        // },
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        retries: 2,
    },
    // before: function() {
    //     browser.maximizeWindow();
    // },
    // afterTest: async function(test, context, { error }) {
    //     if (error) {
    //         const dirPath = './artifacts/screenshots/';
    //         const fileName = `${test.title}.png`;
    //         if (!existsSync(dirPath)) mkdirSync(dirPath, { recursive: true });
    //         await browser.saveScreenshot(dirPath + fileName);
    //     }
    // },
    // onComplete: function() {
    //     const generation = allure(['generate', 'allure-results', '--clean']);
    //     return new Promise((resolve, reject) => {
    //         const timeout = setTimeout(() => reject(new Error('Allure report generation failed')), 5000);
    //         generation.on('exit', function(exitCode) {
    //             clearTimeout(timeout);
    //             exitCode === 0 ? resolve() : reject(new Error('Allure report generation failed'));
    //         });
    //     });
    // }
};
