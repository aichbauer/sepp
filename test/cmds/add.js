import test from 'ava';

import {
  command,
  aliases,
  desc,
} from '../../lib/cmds/add';

test('CMDS | ADD | check command name, aliases, and desc', (t) => {
  const value = {
    command,
    aliases,
    desc,
  };
  const expected = {
    command: 'add <url>',
    aliases: ['a'],
    desc: 'Add a new sepp template from a git remote repository',
  };

  t.deepEqual(value, expected);
});
