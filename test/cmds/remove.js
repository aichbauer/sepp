import test from 'ava';

import {
  command,
  aliases,
  desc,
} from '../../lib/cmds/remove';

test('CMDS | REMOVE | check command name, aliases, and desc', (t) => {
  const value = {
    command,
    aliases,
    desc,
  };
  const expected = {
    command: 'remove <templateName>',
    aliases: ['rm'],
    desc: 'Remove a installed sepp template',
  };

  t.deepEqual(value, expected);
});
