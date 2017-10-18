import test from 'ava';
import path from 'path';

import getLocalTemplates from '../../lib/helpers/get-local-templates';

test('HELPERS | GET LOCAL TEMPLATES | return an array of folder names', (t) => {
  const cwd = process.cwd();
  const pathToTemplates = path.join(cwd, 'test', 'fixtures', 'templates');

  const value = getLocalTemplates(pathToTemplates);
  const expected = [
    'node-cli',
  ];

  t.deepEqual(value, expected);
});
