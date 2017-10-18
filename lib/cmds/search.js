import searchTemplates from '../helpers/search-templates';

const command = 'search [name]';

const builder = {
  name: {
    default: '',
  },
};

const desc = 'Search for sepp templates on github';

/* istanbul ignore next */
const handler = (argv) => searchTemplates(argv.name, 'sepp&template');

export {
  command,
  builder,
  desc,
  handler,
};
