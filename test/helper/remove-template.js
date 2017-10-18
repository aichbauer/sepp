import test from 'ava';
import fs from 'fs-extra';
import path from 'path';

import removeTemplate from '../../lib/helpers/remove-template';

test('HELPERS | REMOVE TEMPLATE | false', (t) => {
  const cwd = process.cwd();
  const pathToTemplates = path.join(cwd, 'test', 'fixtures');

  const value = removeTemplate(pathToTemplates, 'template-that-does-not-exist');

  t.false(value);
});

test('HELPERS | LIST INSTALLED TEMPLATES | true', (t) => {
  const cwd = process.cwd();
  const pathToTemplates = path.join(cwd, 'test', 'fixtures');

  const value = removeTemplate(pathToTemplates, 'remove-templates');

  fs.mkdirSync(path.join(pathToTemplates, 'remove-templates'));
  fs.createFileSync(path.join(pathToTemplates, 'remove-templates', '.gitkeep'));

  t.true(value);
});
