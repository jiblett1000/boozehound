const recipes = require('./recipes/recipes.service.js');

module.exports = function () {
  app.configure(recipes);
};