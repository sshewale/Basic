const path = require('path');
const createBunyanLogger = require('./bunyan-logger-util');

const log = createBunyanLogger(path.basename(__filename));

async function globalErrorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || err.statusCode || 500;
    ctx.body = err.message;
    log.error(err);
  }
}

module.exports = globalErrorHandler;
