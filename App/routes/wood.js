const express = require('express');
const router = express();
const woodCtrl = require('../controllers/wood');
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')


router.get('/',auth, woodCtrl.readAll);
router.get('/:hardness', auth, woodCtrl.findByHardness);
router.post('/',auth, multer, woodCtrl.createWood);
router.delete('/delete/:id', woodCtrl.deleteWood);
router.put('/update/:id', multer, woodCtrl.updateWood);
module.exports = router;