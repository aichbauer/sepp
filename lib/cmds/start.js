import createProject from '../helpers/create-project';

const command = 'start';

const aliases = ['s'];

const desc = 'Create a new project';

/* istanbul ignore next */
const handler = () => createProject();

export {
  command,
  aliases,
  desc,
  handler,
};
