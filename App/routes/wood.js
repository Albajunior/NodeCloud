const express = require('express');
const router = express();
const woodCtrl = require('../controllers/wood');


router.get('/list', woodCtrl.readAll);

module.exports = router;