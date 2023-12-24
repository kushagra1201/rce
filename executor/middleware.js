const makeFilesMiddleware = (req, res, next) => {
  const { sessionId, language, code, input } = req.body;
  if (!sessionId || !language || !code) {
    res.status(400);
    res.send("Not all fields there");
    return;
  }

  fs.writeFile(`./temp/${sessionId}_code.${language}`, code, (err) => {
    if (err) {
      if (!sessionId || !language || !code) {
        res.status(400);
        res.send("Not all fields there");
        return;
      }
      res.status(500);
      res.send("Failed to execute code");
      return;
    }
  });
  fs.writeFile(`./temp/${sessionId}_input`, input ? input : "", (err) => {
    if (err) {
      res.status(500);
      res.send("Failed to execute code");
      return;
    }
  });

  next();
};

module.exports.makeFilesMiddleware = makeFilesMiddleware;
