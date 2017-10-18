import path from 'path';
import os from 'os';

import listInstalledTemplates from '../helpers/list-installed-templates';

const pathToTemplates = path.join(
  os.homedir(),
  '.sepp',
  'templates',
);

const command = 'list';

const aliases = ['l'];

const desc = 'List all installed sepp templates';

/* istanbul ignore next */
const handler = () => listInstalledTemplates(pathToTemplates);

export {
  command,
  aliases,
  desc,
  handler,
};
