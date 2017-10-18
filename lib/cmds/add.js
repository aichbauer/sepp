import cloneTemplate from '../helpers/clone-template';

const command = 'add <url>';

const aliases = ['a'];

const desc = 'Add a new sepp template from a git remote repository';

/* istanbul ignore next */
const handler = (argv) => cloneTemplate(argv.url);

export {
  command,
  aliases,
  desc,
  handler,
};
