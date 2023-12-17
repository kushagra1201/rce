const util = require("util");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs");

module.exports.execute = async (command, cleanupFiles) => {
  let result;
  try {
    result.stdout = await exec(command, {
      timeout: 1000,
      maxBuffer: 1024 * 1024 * 5,
    });
  } catch (err) {
    result.stderr = err;
  } finally {
    await Promise.all(
      cleanupFiles.map(async (file) => {
        await fs.promises.unlink(file);
      })
    );
  }
  return result;
};
