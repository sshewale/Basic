import bunyan from 'bunyan';
import environment from './environment-config';

function createBunyanLogger(name) {
  let level = environment.logLevel;
  // To disable noise/logs when running tests
  if (process.env.NODE_ENV === 'test') {
    level = bunyan.FATAL + 1;
  }
  const log = bunyan.createLogger({ name, level });
  return log;
}

export default createBunyanLogger;
