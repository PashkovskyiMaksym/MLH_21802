exports.config = {
    runner: 'local',

    specs: [
         './test/smoke/*.js',
         './test/extended/*.js'
    ],
    exclude: [
        // './test/extended/gender.js',
        // './test/extended/image.js',
        // './test/extended/story.js',
        //'./test/smoke/elementsExist*.js',
        // './test/smoke/labelsCorrect*.js',
        //'./test/smoke/smokeFunctional*.js'
    ],

    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'silent',

    bail: 0,

    baseUrl: 'https://qa-apps.netlify.app/hero/fix',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'mocha',

    reporters: ['spec', 'dot',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],

    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        if (error) {
            browser.takeScreenshot();
        }
    }

}
