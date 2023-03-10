const promptDirectory = require('inquirer-directory');
const { join } = require('path');

const projectSrc = join(__dirname, '../../src');

module.exports = function runPlop(plop) {
  plop.setPrompt('directory', promptDirectory);

  require('./helpers/upperSnakeCase')(plop);

  require('./generators/pageComponent')(plop, projectSrc);
};
