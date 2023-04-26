var path = require("path");
const express = require("express");
const router = require("./App/routes/index.js");
const app = express();

const db = require("./App/models/index.js");
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(err));

//Ajout des routes
app.use(express.json());
app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;
