# protractorDirectConnectToRunningChromedriver
This is a prototype for running protractor tests with directConnect and connecting to a running chromedriver instead of protractor starting it

## How to run

### 1. Start chromedriver
In `StartChromeDriver` folder open and build `StartChromeDriver.sln` solution. (Modify code if needed to customize prosess startup)

Start it and keep it running.

(You can check that it is running by sending GET to `http://127.0.0.1:9515/sessions`)

### 2. Run the test

In `test` folder run `npm install`

Clone and build https://github.com/Orekhov/protractor/tree/directConnect_to_running_chromedriver in a separate folder. (`npm install` and `npm run prepublish`)

Link to the built version of protractor (`npm link` in protractor folder, `npm link protractor` in test folder)

run `webdriver-manager update` (Even though these drivers wouldn't be used, there are various checks in the protractor/selenium code that check their existence. Removing them would require a lot of code changes in the prototype)

run `Run.ps1` (it should connect to a running instance of chromedriver)
