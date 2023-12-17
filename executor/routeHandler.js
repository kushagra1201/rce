const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res, next) => {
  const { sessionId, language, code, input } = req.body;
  if (!sessionId || !language || !code) {
    res.status(400);
    res.send("Not all fields there");
  }

  fs.writeFile(`./temp/${sessionId}_code.${language}`, code, (err) => {
    if (err) {
      res.status(500);
      res.send("Failed to execute code");
    }
  });
  fs.writeFile(`./temp/${sessionId}_input`, input ? input : "", (err) => {
    if (err) {
      res.status(500);
      res.send("Failed to execute code");
    }
  });

  req.body.next();
});

router.post("/cpp", require("./languages/cpp"));

module.exports = router;
