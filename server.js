require("dotenv").config();
const app = require("./app.js");
const port = process.env.PORT;
var cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello Worldrrr!");
});
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
