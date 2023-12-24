const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Aaryak!");
});

router.post("/code", (req, res) => {
  const { sessionId, language, code, input } = req.body;
  if (!sessionId || !language || !code) {
    res.status(400);
    res.send("Not all fields there");
  }

  axios.post(`http://localhost:9000/code/${language}`, req.body).then(
    (response) => {
      res.json(response.data);
    },
    (error) => {
      res.status(500);
      console.error(error);
      res.send("JNL");
    }
  );
});

module.exports = router;
