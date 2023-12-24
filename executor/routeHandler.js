const express = require("express");
const router = express.Router();
const fs = require("fs");
const { makeFilesMiddleware } = require("./middleware");

router.post("/cpp", makeFilesMiddleware, require("./languages/cpp"));

module.exports = router;
