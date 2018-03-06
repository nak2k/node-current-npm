const { accessSync, constants, realpathSync } = require('fs');
const { delimiter, join, dirname } = require('path');

function findNpm() {
  const paths = process.env.PATH.split(delimiter);

  const dir = paths.find(path => {
    try {
      accessSync(join(path, 'npm'), constants.X_OK);
      return true;
    } catch(err) {
      return false;
    }
  });

  if (dir === undefined) {
    throw new Error('npm not found');
  }

  return join(dir, 'npm');
}

function requireNpm() {
  try {
    return require('npm');
  } catch (err) {
    return require(dirname(dirname(realpathSync(findNpm()))));
  }
}

/*
 * Exports.
 */
module.exports = requireNpm();
