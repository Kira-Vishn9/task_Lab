import { browser } from '@wdio/globals';
import { ReportGenerator } from 'wdio-html-nice-reporter'; 

let reportAggregator;

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
        ['html-nice', {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            linkScreenshots: true,
            showInBrowser: true,
            collapseTests: false,
            useOnAfterCommandForScreenshot: false
        }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000,
        retries: 0,
    },

    onPrepare: function(config, capabilities) {
        reportAggregator = new ReportGenerator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName: capabilities.browserName,
            collapseTests: true
        });
    },
    onComplete: async function (exitCode, config, capabilities, results) {
        console.log('Results:', JSON.stringify(results, null, 2));
        if (reportAggregator) {
            try {
                await reportAggregator.createReport();
            } catch (error) {
                console.error('Failed to create report:', error);
            }
        } else {
            console.error('ReportAggregator is not defined');
        }
    },
};
