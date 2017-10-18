import test from 'ava';

import searchTemplates from '../../lib/helpers/search-templates';

test('HELPERS | SEARCH TEMPLATE | false', async (t) => {
  const value = await searchTemplates('a-template-that-does-not-exist', 'topic&that&does&not&exist');

  t.false(value);
});

test('HELPERS | LIST INSTALLED TEMPLATES | true', async (t) => {
  const value = await searchTemplates('test-template', 'sepp&template');

  t.true(value);
});

test('HELPERS | LIST INSTALLED TEMPLATES | true', async (t) => {
  const value = await searchTemplates('', 'sepp&template');

  t.true(value);
});
