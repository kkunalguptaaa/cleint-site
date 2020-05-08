const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router loaded');

router.get('/', homeController.home);
router.get('/3dprinting',homeController.threeDPrint);
router.get('/laser',homeController.laser);
router.use('/users', require('./users'));
router.use('/post', require('./post'));

module.exports = router;
