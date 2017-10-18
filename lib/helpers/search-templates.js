import axios from 'axios';
import cliColumns from 'cli-columns';

const searchTemplates = (name, topic) => {
  const availableTemplates = [];
  const apiUrl = `https://api.github.com/search/repositories?q=${name}+topic:${topic}`;

  return new Promise((resolve) => (
    resolve(axios.get(apiUrl)
      .then((res) => {
        if (res.data.total_count > 0) {
          res.data.items.forEach((item) => {
            if (item.full_name !== 'aichbauer/test-template') {
              availableTemplates.push(item.full_name);
            }
          });

          console.info(cliColumns(availableTemplates));
          return true;
        }

        console.info(`No sepp templates found for: "${name}"`);
        return false;
      }),
    )
  ))
    .then((result) => result);
};

export default searchTemplates;
