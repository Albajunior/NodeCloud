const express = require('express');
const router = express();
const woodCtrl = require('../controllers/wood');


router.get('', woodCtrl.readAll);
router.get('/:hardness', woodCtrl.findByHardness);
module.exports = router;