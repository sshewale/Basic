const info = require('./info');
const codes = require('./codes');

module.exports = (router) => {
  router.use('/api/info', info);
  router.use('/api/codes', codes);
};
