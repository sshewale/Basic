const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/info-controller');

router.get('/', Ctrl.getInfo);

module.exports = router.routes();
