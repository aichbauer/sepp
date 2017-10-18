import test from 'ava';

import {
  command,
  builder,
  desc,
} from '../../lib/cmds/search';

test('CMDS | REMOVE | check command name, aliases, and desc', (t) => {
  const value = {
    command,
    builder,
    desc,
  };
  const expected = {
    command: 'search [name]',
    builder: {
      name: {
        default: '',
      },
    },
    desc: 'Search for sepp templates on github',
  };

  t.deepEqual(value, expected);
});
