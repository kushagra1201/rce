const { execute } = require("../utils");

module.exports = (req, res) => {
  const { sessionId, language, code, input } = req.body;

  const codeFile = `./temp/${sessionId}_code.${language}`;
  const inputFile = `./temp/${sessionId}_input`;
  const outputFile = `./temp/${sessionId}_output.out`;

  const result = execute(
    `g++ ${codeFile} -o ${outputFile} && ${outputFile} < ${inputFile}`
  );
  res.json(result);
};
