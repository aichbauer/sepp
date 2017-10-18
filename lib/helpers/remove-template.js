import fs from 'fs-extra';
import path from 'path';

const removeTemplate = (pathToTemplate, name) => {
  if (fs.existsSync(path.join(pathToTemplate, name))) {
    fs.removeSync(path.join(pathToTemplate, name));
    return true;
  }

  console.info(`No sepp templates found for: "${name}"`);
  return false;
};

export default removeTemplate;
