const express = require('express');
const router = express();
const woodCtrl = require('../controllers/wood');


router.get('/list', woodCtrl.list);

module.exports = router;