const express = require("express");
const router = express.Router();
const fs = require("fs");
const { makeFilesMiddleware } = require("./middleware");

router.post("/cpp", makeFilesMiddleware, require("./languages/cpp"));
router.post("/py", makeFilesMiddleware, require("./languages/py"));
router.post("/js", makeFilesMiddleware, require("./languages/js"));

module.exports = router;
