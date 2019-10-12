import * as webdriverio from 'webdriverio';
import homepageElements from '../pages/data-table.pages';
import environment from '../../../utils/environment-config';
import {
  customBrowserName,
  seleniumInstall,
  seleniumProcessKill,
} from '../custom-browser';

let browser;
jest.setTimeout(60000);

beforeAll(async () => {
  await seleniumInstall();
});

afterAll(async () => {
  await seleniumProcessKill();
});

beforeEach(async () => {
  browser = webdriverio.remote({
    desiredCapabilities: customBrowserName(),
    waitforTimeout: 10000,
  });

  await browser.init();
});

afterEach(async () => {
  await browser.end().pause(1000);
});

describe('React App Launch', () => {
  it('Verify codesTable header', async () => {
    const screenshotPath= 'src/tests/e2e/screenshot/testcase-codess.png';
    await browser.url(`${environment.baseUrl}/videos/codess`);
    await browser.windowHandleSize({ width: 1280, height: 800 });

    expect (await browser.waitForVisible(homepageElements.QR_HEADER));
    expect(await browser.getText(homepageElements.QR_HEADER)).toEqual('QR Codes');
    await browser.saveScreenshot(screenshotPath);
  });
});
