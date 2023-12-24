const { execute } = require("../utils");

module.exports = async (req, res) => {
  const { sessionId, language, code, input } = req.body;

  const codeFile = `./temp/${sessionId}_code.${language}`;
  const inputFile = `./temp/${sessionId}_input`;

  const result = await execute(`python ${codeFile} < ${inputFile}`, [
    codeFile,
    inputFile,
  ]);
  res.json(result);
};
