import path from 'path';
import templateDir from 'template-dir';

const fillTemplates = (pathToTemplate, answers) => {
  const srcProject = path.join(pathToTemplate);
  const destination = process.cwd();
  const onlyDirProject = false;

  templateDir({
    source: srcProject,
    destination,
    onlyFiles: onlyDirProject,
    exclude: ['sepp'],
  }, answers);
};

export default fillTemplates;
