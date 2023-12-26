const PORT = 8000;
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routeHandler");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors("*"));
app.use("/", router);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
