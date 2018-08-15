const npm = require('../');

npm.load((err, npm) => {
  if (err) {
    throw err;
  }

  console.log('init.license=%s', npm.config.get('init.license'));
});

