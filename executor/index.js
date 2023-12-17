const PORT = 9000;

const express = require("express");
const app = express();
const router = require("./routeHandler");

app.use("/", router);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
