import test from 'ava';
import path from 'path';

import createQuestions from '../../lib/helpers/create-questions';

test('HELPERS | CREATE QUESTIONS | read sepp-questions', (t) => {
  const cwd = process.cwd();
  const pathToQuestions = path.join(cwd, 'test', 'fixtures', 'templates', 'node-cli', 'sepp', 'sepp-questions.json');

  const value = createQuestions(pathToQuestions);
  const expected = [
    {
      type: 'input',
      name: 'projectName',
      message: 'The name of your project: ',
    },
    {
      type: 'input',
      name: 'projectDesc',
      message: 'The secription of your project: ',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'The github user name: ',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Your real name: ',
    },
    {
      type: 'input',
      name: 'website',
      message: 'Your website: ',
    },
  ];

  t.deepEqual(value, expected);
});

test('HELPERS | CREATE QUESTIONS | non existing sepp-questions.json', (t) => {
  const cwd = process.cwd();
  const pathToQuestions = path.join(cwd, 'test', 'not-existsting.json');

  const value = createQuestions(pathToQuestions);
  const expected = {};

  t.deepEqual(value, expected);
});
