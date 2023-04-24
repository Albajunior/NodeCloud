const express = require('express')
const app = express()
module.exports = app;

const db = require("./App/models/index.js");
db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));