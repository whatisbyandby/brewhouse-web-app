const Mutations = {
  async createRecipe(parent, args, context, info) {
    //TODO Check if they are logged in
    const recipe = await context.db.mutation.createRecipe(
      { data: { ...args } },
      info
    );
    return recipe;
  }
};

module.exports = Mutations;
