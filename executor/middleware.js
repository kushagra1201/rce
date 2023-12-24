const fs = require("fs");

const makeFilesMiddleware = (req, res, next) => {
  const { sessionId, language, code, input } = req.body;
  if (!sessionId || !language || !code) {
    res.status(400);
    res.send("Not all fields there");
    return;
  }

  try {
    fs.writeFile(`./temp/${sessionId}_code.${language}`, code, (err) => {
      if (err) {
        throw err;
      }
    });
    fs.writeFile(`./temp/${sessionId}_input`, input ? input : "", (err) => {
      if (err) {
        throw err;
      }
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send("Failed to execute.");
  }
};

module.exports.makeFilesMiddleware = makeFilesMiddleware;
