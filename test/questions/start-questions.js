import test from 'ava';
import path from 'path';

import questions from '../../lib/questions/start-questions';

test('QUESTIONS | filled with templates', (t) => {
  const cwd = process.cwd();
  const pathToTemplates = path.join(cwd, 'test', 'fixtures', 'templates');

  const value = questions(pathToTemplates);
  const expected = [
    {
      type: 'list',
      name: 'project',
      message: 'Choose a project: ',
      choices: [
        'node-cli',
      ],
    },
  ];

  t.deepEqual(value, expected);
});
