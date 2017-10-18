import test from 'ava';

import {
  command,
  aliases,
  desc,
} from '../../lib/cmds/start';

test('CMDS | START | check command name, aliases, and desc', (t) => {
  const value = {
    command,
    aliases,
    desc,
  };
  const expected = {
    command: 'start',
    aliases: ['s'],
    desc: 'Create a new project',
  };

  t.deepEqual(value, expected);
});
