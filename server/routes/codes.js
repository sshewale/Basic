const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/codes-controller');

router.post('/', Ctrl.postcodes);

module.exports = router.routes();
