import * as selenium from 'selenium-standalone';
import environment from '../../utils/environment-config';

function customBrowserName() {
 
  let customName;
  if (environment.BROWSER_NAME === 'chromeHeadless') {
    customName = {
      browserName: 'chrome',
      chromeOptions: {args:['--headless', '--disable-gpu', '--window-size=1280,800']
    },
        };
  } 
  else if(environment.BROWSER_NAME === 'firefoxHeadless') {
    customName = {
      browserName: 'firefox',
      chromeOptions: {args:['--headless', '--disable-gpu', '--window-size=1280,800']
    },
  };
  }
     
  else {
    customName = {
      browserName: environment.BROWSER_NAME,
    };
  }
  return customName;
}

async function seleniumInstall() {
  let seleniumProcess;
  await new Promise((resolve) => {
    selenium.install(resolve);
  });
  seleniumProcess = await new Promise((resolve, reject) =>
    selenium.start((error, childProcess) => {
      if (error) {
        reject(error);
      } else {
        resolve(childProcess);
      }
    }),
  );
  return seleniumProcess;
}

async function seleniumProcessKill() {
  const process = await seleniumInstall();
  await process.kill();
}

export { seleniumInstall, seleniumProcessKill, customBrowserName };
