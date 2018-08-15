const npm = require('../');
const { dirname } = require('path');

npm.load((err, npm) => {
  if (err) {
    throw err;
  }

  npm.config.set('production', true);
  npm.config.set('dry-run', true);

  npm.commands.install(`${__dirname}/tmp`, ['debug'], function (err) {
    console.dir(arguments, { depth: null });

    if (err) {
      throw err;
    }
  });
});
