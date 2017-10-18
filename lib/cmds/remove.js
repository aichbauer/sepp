import path from 'path';
import os from 'os';

import removeTemplate from '../helpers/remove-template';

const command = 'remove <templateName>';

const aliases = ['rm'];

const desc = 'Remove a installed sepp template';

/* istanbul ignore next */
const handler = (argv) => {
  const pathToTemplate = path.join(
    os.homedir(),
    '.sepp',
    'templates',
  );

  return removeTemplate(pathToTemplate, argv.name);
};

export {
  command,
  aliases,
  desc,
  handler,
};
