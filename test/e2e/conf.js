var istanbulPlugin = require('protractor-istanbul-plugin');

exports.config = {
    framework: 'custom',
    frameworkPath:'../../node_modules/protractor-cucumber-framework',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: 'features/**/*.feature',
    /*plugins : [{
      path: 'node_modules/protractor-istanbul-plugin'
    }],*/
    baseUrl: 'http://localhost:8080/',
    plugins: [{ inline: istanbulPlugin }],
    cucumberOpts: {
        require: 'steps/**/*.steps.js',
        format: 'pretty' // or summary
    }
};
