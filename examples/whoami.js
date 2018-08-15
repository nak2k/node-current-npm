const npm = require('../');

npm.load((err, npm) => {
  if (err) {
    throw err;
  }

  npm.commands.whoami([], true, (err, username) => {
    if (err) {
      throw err;
    }

    console.log(username);
  });
});
