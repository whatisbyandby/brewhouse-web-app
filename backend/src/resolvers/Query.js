const { forwardTo } = require("prisma-binding");

const Query = {
  recipes: forwardTo("db"),
  recipe: forwardTo("db")
};

module.exports = Query;
