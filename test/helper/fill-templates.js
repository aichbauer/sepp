import test from 'ava';
import fs from 'fs-extra';
import path from 'path';

import fillTemplates from '../../lib/helpers/fill-templates';

test.before(async () => {
  await process.chdir(path.join('test', 'fixtures', 'test-templates'));
});

test.after.always(async () => {
  await process.chdir(path.join('..', '..', '..'));
});

test('HELPERS | FILL TEMPLATES | recursivly copy filled templates to destination', (t) => {
  const cwd = process.cwd();
  const templatePath = path.join(cwd, '..', 'templates');

  fillTemplates(templatePath, {
    project: 'node-cli',
    name: 'lukas',
    lastname: 'aichbauer',
    country: 'austria',
  });

  const valueTemplate1 = fs.readFileSync(path.join(cwd, 'node-cli', 'node-template-1'), 'utf-8');
  const expectedTemplate1 = 'lukas\naichbauer\n\naustria\n';

  const valueTemplate3 = fs.readFileSync(path.join(cwd, 'node-cli', 'lib', 'node-cli-folder-1', 'node-cli-template-1'), 'utf-8');
  const expectedTemplate3 = 'lukas\naichbauer\n\naustria\n';

  const valueTemplate2 = fs.readFileSync(path.join(cwd, 'node-cli', 'lib', 'node-cli-template-2'), 'utf-8');
  const expectedTemplate2 = 'lukas\naichbauer\n\naustria\n';

  const valueDir1 = fs.readdirSync(path.join(cwd, 'node-cli', 'lib'));
  const expectedDir1 = [
    'node-cli-folder-1',
    'node-cli-template-2',
  ];

  const valueDir2 = fs.readdirSync(path.join(cwd, 'node-cli', 'lib', 'node-cli-folder-1'));
  const expectedDir2 = ['node-cli-template-1'];

  t.is(valueTemplate1, expectedTemplate1);
  t.is(valueTemplate2, expectedTemplate2);
  t.is(valueTemplate3, expectedTemplate3);
  t.deepEqual(valueDir1, expectedDir1);
  t.deepEqual(valueDir2, expectedDir2);

  fs.removeSync(path.join(cwd, 'node-cli'));
});
