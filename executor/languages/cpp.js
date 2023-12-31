const { execute } = require("../utils");

module.exports = async (req, res) => {
  const { sessionId, language, code, input } = req.body;

  const codeFile = `./temp/${sessionId}_code.${language}`;
  const inputFile = `./temp/${sessionId}_input`;
  const binaryFile = `./temp/${sessionId}_binary.out`;

  const result = await execute(
    `g++ ${codeFile} -o ${binaryFile} && ${binaryFile} < ${inputFile}`,
    [codeFile, inputFile, binaryFile]
  );
  res.json(result);
};
