const getDataFromDB = require('../services/db-service');

async function getInfo(ctx) {
  const response = await getDataFromDB();
  if (response.length === 0) {
    ctx.notFound(response);
    return;
  }
  ctx.ok(response);
}

module.exports = {
  getInfo,
};
