const { forwardTo } = require("prisma-binding");

const Query = {
  recipes: forwardTo("db"),
  recipe: forwardTo("db"),
  me(parent, args, context, info) {
    if (!context.request.userId) {
      return null;
    }

    return context.db.query.user(
      { where: { id: context.request.userId } },
      info
    );
  }
};

module.exports = Query;
