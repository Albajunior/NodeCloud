const express = require('express');
const router = express();
const woodCtrl = require('../controllers/wood');


router.get('/list', woodCtrl.readAll);
router.get('/findBy/:hardness', woodCtrl.findByHardness);
module.exports = router;