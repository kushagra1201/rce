const PORT = 9000;

const express = require("express");
const app = express();
const router = require("./routeHandler");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/code", router);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
