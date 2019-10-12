### end to end Testing documentation

### WebdriverIO with Jest

WebdriverIO - Nodejs webdriver language bindings unofficial implementation developed by SauceLabs. Has own handling of async actions using FibersJS and rich set of features. https://webdriver.io/docs/pageobjects.html

This is the simplest possible example of a WebdriverIO test written with the Jest framework.

Because WebdriverIO doesn't support Jest as a first-class citizen, this test suite leverages the WebdriverIO remote API. This means that we need to do a few things ourselves, such as starting up Selenium server as well as the browser. It also means that we must use async/await statements.

Runners Jest - Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases.

Editors, IDE, consoles- Visual Studio Code - Cross platform editor from Microsoft, with integrated Node.js debugger and hooks for taskrunners.

Prerequisite-

The Standalone Selenium Server-
import \* as selenium from 'selenium-standalone';
https://www.npmjs.com/package/selenium-standalone/v/6.16.0#available-browsers

The standalone Selenium Server acts as a proxy between your script and the browser-specific drivers. The server may be used when running locally, but it's not recommend as it introduces an extra hop for each request and will slow things down. The server is required, however, to use a browser on a remote host (most browser drivers, like the IEDriverServer, do not accept remote connections).

Before starting make sure you have JDK installed.-
https://www.npmjs.com/package/selenium-standalone/v/6.16.0#ensure-you-have-the-minimum-required-java-version

Set test.json - go to config folder and set appropriate application url -
for eg-
localhost url-
"baseUrl": "http://localhost:3000"

(Note- on local environment testing (http://localhost:3000) make sure application and npm json server is up and running if not run these commands in bash (npm run json:server and npm start))

Picking a different browser-
The browser is chosen based on the BROWSER_NAME config environment variable, defaulting to chrome headless.

Set required BROWSER_NAME into config file (src/config/config.json)-

if you want to run browser in headless mode use -

BROWSER_NAME=chromeHeadless

BROWSER_NAME=firefoxHeadless

for browser mode use-

BROWSER_NAME=chrome
BROWSER_NAME=safari
BROWSER_NAME=firefox
BROWSER_NAME=MicrosoftEdge

Examples: npm run test:e2e

Screenshot folder- src/tests/e2e/screenshot/testcase-codess.png
After excuting script test case, it will capture full window screenshot and put into screenshot folder.
here using saveScreenshot function.
