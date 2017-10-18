import os from 'os';
import url from 'url';
import fs from 'fs-extra';
import path from 'path';
import inputIs from 'input-is';
import isGitRemote from 'is-git-remote';
import gitCloneRepo from 'git-clone-repo';

const cloneTemplate = (repoURL) => {
  const homedir = os.homedir();
  const remoteExists = isGitRemote(repoURL);
  let repoName = '';

  if (inputIs.url(repoURL)) {
    if (!inputIs.valid(repoURL, /http[s]?:\/\//)) {
      repoName = url.parse(`https://${repoURL}`).pathname;
    } else {
      repoName = url.parse(repoURL).pathname;
    }

    repoName = repoName.split('/')[2];
  } else {
    repoName = repoURL.split('/')[1];
  }

  const destination = path.join(homedir, '.sepp', 'templates', repoName);
  const seppDirectory = path.join(homedir, '.sepp');
  const seppTemplateDirectory = path.join(homedir, '.sepp', 'templates');

  const seppDirectoryExists = fs.existsSync(seppDirectory);
  const seppTemplateDirectoryExiss = fs.existsSync(seppTemplateDirectory);

  /* istanbul ignore if */
  if (!seppDirectoryExists) {
    fs.mkdirSync(seppDirectory);

    if (!seppTemplateDirectoryExiss) {
      fs.mkdirSync(seppTemplateDirectory);
    }
  }

  if (remoteExists) {
    gitCloneRepo(repoURL, { destination });
    fs.removeSync(path.join(destination, '.git'));
    return true;
  }

  return false;
};

export default cloneTemplate;
