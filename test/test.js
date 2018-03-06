const test = require('tape');

test('test', t => {
  t.plan(2);

  const npm = require('..');

  t.equal(typeof npm, 'object');
  t.equal(typeof npm.commands, 'object');
});
