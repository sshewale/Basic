import config from '../config/config.json';
import development from '../config/development.json';
import production from '../config/production.json';
import test from '../config/test.json';

const { NODE_ENV: nodeEnv } = process.env;
let env = config;

if (nodeEnv) {
  switch (nodeEnv) {
    case 'development':
      env = Object.assign(config, development);
      break;
    case 'production':
      env = Object.assign(config, production);
      break;
    case 'test':
      env = Object.assign(config, test);
      break;
    default:
      break;
  }
}
const environment = env;

export default environment;
