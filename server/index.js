require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const createBunyanLogger = require('./utils/bunyan-logger-util');
const globalErrorHandler = require('./utils/global-error-handler');

const app = new Koa();
const router = new Router();
const log = createBunyanLogger(path.basename(__filename));
const port = process.env.PORT || 3000;

app.use(globalErrorHandler);

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}

app.use(respond());
app.use(bodyParser());
require('./routes')(router);

app.use(router.routes());

const server = app
  .listen(port, () => log.info(`API server started on port: ${port}`))
  .on('error', (err) => {
    log.error(`Error starting API server on port: ${port}. Error: ${err}`);
  });

module.exports = server;
