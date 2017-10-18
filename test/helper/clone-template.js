import test from 'ava';
import path from 'path';
import os from 'os';
import fs from 'fs-extra';

import cloneTemplate from '../../lib/helpers/clone-template';

test('HELPERS | CLONE TEMPLATE | existing github repo, "www"', (t) => {
  const pathToTemplates = path.join(
    os.homedir(),
    '.sepp',
    'templates',
  );

  cloneTemplate('www.github.com/aichbauer/test-public');

  const value = fs.readdirSync(pathToTemplates);

  fs.removeSync(path.join(pathToTemplates, 'test-public'));

  t.true(value.includes('test-public'));
});

test('HELPERS | CREATE QUESTIONS | existing github repo, "https://"', (t) => {
  const pathToTemplates = path.join(
    os.homedir(),
    '.sepp',
    'templates',
  );

  cloneTemplate('https://www.github.com/aichbauer/test-public');

  const value = fs.readdirSync(pathToTemplates);

  fs.removeSync(path.join(pathToTemplates, 'test-public'));

  t.true(value.includes('test-public'));
});

test('HELPERS | CREATE QUESTIONS | existing github repo, "username/reponame"', (t) => {
  const pathToTemplates = path.join(
    os.homedir(),
    '.sepp',
    'templates',
  );

  cloneTemplate('aichbauer/test-public');

  const value = fs.readdirSync(pathToTemplates);

  fs.removeSync(path.join(pathToTemplates, 'test-public'));

  t.true(value.includes('test-public'));
});

test('HELPERS | CREATE QUESTIONS | non existing repository', (t) => {
  const value = cloneTemplate('aichbauer/non-existing-repository');

  t.false(value);
});

