import test from 'ava';
import path from 'path';

import listInstalledTemplates from '../../lib/helpers/list-installed-templates';

test('HELPERS | LIST INSTALLED TEMPLATES | true', (t) => {
  const cwd = process.cwd();
  const pathToTemplates = path.join(cwd, 'test', 'fixtures', 'templates');

  const value = listInstalledTemplates(pathToTemplates);

  t.true(value);
});

test('HELPERS | LIST INSTALLED TEMPLATES | false', (t) => {
  const cwd = process.cwd();
  const pathToTemplates = path.join(cwd, 'test', 'fixtures', 'empty-templates');

  const value = listInstalledTemplates(pathToTemplates);

  t.false(value);
});
