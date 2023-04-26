const express = require('express');
const router = express();
const woodCtrl = require('../controllers/wood');
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')


router.get('/',auth, woodCtrl.readAll);
router.get('/:hardness', auth, woodCtrl.findByHardness);
router.post('/',auth, multer, woodCtrl.createWood);
router.post('/delete/:id', woodCtrl.deleteWood);

module.exports = router;