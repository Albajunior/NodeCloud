const express = require("express");
const router = express();
const userCtrl = require("../controllers/user.js");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/:email", userCtrl.findOne);

module.exports = router;
