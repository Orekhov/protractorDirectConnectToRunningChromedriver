exports.config = {
    framework: 'jasmine',

    directConnect: true,

    // Do not start chromedriver, use existing
    directConnectDriverAddress : 'http://127.0.0.1:9515/',

    specs: ['spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }