import readDirNames from 'read-dir-names';

const getLocalTemplates = (path) => {
  const projects = readDirNames(path);
  return projects;
};

export default getLocalTemplates;
