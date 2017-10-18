import getLocalTemplates from '../helpers/get-local-templates';

const questions = (path) => {
  const questionsList = [
    {
      type: 'list',
      name: 'project',
      message: 'Choose a project: ',
      choices: getLocalTemplates(path),
    },
  ];

  return questionsList;
};

export default questions;
