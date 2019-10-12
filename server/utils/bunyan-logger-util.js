const bunyan = require('bunyan');

function createBunyanLogger(name) {
  const level = process.env.BUNYAN_LOG_LEVEL || 'info';
  const log = bunyan.createLogger({ name, level });
  return log;
}

module.exports = createBunyanLogger;
