const npm = require('../');

npm.load((err, npm) => {
  if (err) {
    throw err;
  }

  npm.config.set('production', true);
  npm.config.set('dry-run', true);

  npm.commands.prune([], (err, _, result) => {
    console.dir(result, { depth: 2 });

    if (err) {
      throw err;
    }
  });
});
