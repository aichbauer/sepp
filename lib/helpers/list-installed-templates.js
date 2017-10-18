import cliColumns from 'cli-columns';

import getLocalTemolates from './get-local-templates';

const listInstalledTemplates = (path) => {
  if (getLocalTemolates(path).length > 0) {
    console.info(cliColumns(getLocalTemolates(path)));
    return true;
  }

  console.info('No sepp templates found');
  return false;
};

export default listInstalledTemplates;
