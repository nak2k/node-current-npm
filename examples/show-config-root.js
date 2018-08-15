const npm = require('../');

npm.load((err, npm) => {
  if (err) {
    throw err;
  }

  console.dir(npm.config.root);
});

