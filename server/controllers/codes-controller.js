const path = require('path');
// const Joi = require('@hapi/joi');
const createBunyanLogger = require('../utils/bunyan-logger-util');
// const { asyncForEach } = require('../utils/async-for-each');
const log = createBunyanLogger(path.basename(__filename));

async function postcodes(ctx) {
  if (Object.keys(ctx.request.body).length === 0) {
    log.error(`Request body is null, Please check body parameters`);
    ctx.badRequest(`Request body is null, Please check body parameters`);
    return;
  }

  const response = await validateAndInsertData(ctx.request.body);
  ctx.ok(response);
}

function validateAndInsertData() {
  //validate data use JOI validator
  //send data to db service to insert data into table
  return 'success';
}
module.exports = {
  postcodes,
};
