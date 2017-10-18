import test from 'ava';

import {
  command,
  aliases,
  desc,
} from '../../lib/cmds/list';

test('CMDS | LIST | check command name, aliases, and desc', (t) => {
  const value = {
    command,
    aliases,
    desc,
  };
  const expected = {
    command: 'list',
    aliases: ['l'],
    desc: 'List all installed sepp templates',
  };

  t.deepEqual(value, expected);
});
