const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

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
  },
  async users(parent, args, context, info) {
    // 1. Check if they are logged in
    if (!context.request.userId) {
      throw new Error("You must be logged in");
    }
    // 2. Check if they have the correct permissions
    hasPermission(context.request.user, ["ADMIN", "UPDATEPERMISSIONS"]);
    // 3. Query All Users
    const users = await context.db.query.users({}, info);
    return users;
  },
  styles: forwardTo("db")
};

module.exports = Query;
