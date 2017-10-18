import fs from 'fs';
import json from 'json-extra';

const createQuestions = (path) => {
  const exists = fs.existsSync(path);
  if (exists) {
    const seppQuestion = json.readToObjSync(path);

    return seppQuestion.questions;
  }

  return {};
};

export default createQuestions;
