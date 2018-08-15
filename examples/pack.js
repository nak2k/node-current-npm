const npm = require('../');
const { dirname } = require('path');

npm.load((err, npm) => {
  if (err) {
    throw err;
  }

  npm.config.set('production', true);
  npm.config.set('dry-run', true);

  npm.commands.pack([ dirname(__dirname) ], true, (err, tarballs) => {
    if (err) {
      throw err;
    }

    console.dir(tarballs, { depth: null });
  });
});
