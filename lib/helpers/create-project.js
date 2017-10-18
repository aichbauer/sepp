import path from 'path';
import inquirer from 'inquirer';
import os from 'os';

import questions from '../questions/start-questions';
import fillTemplates from './fill-templates';
import createQuestions from './create-questions';

const startProject = () => {
  const pathToTemplates = path.join(os.homedir(), '.sepp', 'templates');
  const questionsList = questions(pathToTemplates);

  return inquirer
    .prompt(questionsList)
    .then((answer) => {
      const pathToProject = path.join(pathToTemplates, answer.project);
      const pathToQuestions = path.join(pathToProject, 'sepp', 'sepp-questions.json');
      const projectQuestions = createQuestions(pathToQuestions);

      if (projectQuestions) {
        return inquirer
          .prompt(projectQuestions)
          .then((answers) => fillTemplates(pathToProject, answers));
      }

      return fillTemplates(pathToProject, {});
    });
};

export default startProject;
