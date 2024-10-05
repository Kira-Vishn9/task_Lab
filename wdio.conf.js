import { browser } from '@wdio/globals';

export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.e2e.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1280,800']
            }
        }
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        ['html-nice', {
            outputDir: './reports/html',
            filename: 'report.html',
            reportTitle: 'Test Report'
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000,
        retries: 0,
    },
};
