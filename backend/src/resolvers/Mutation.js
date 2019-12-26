const Mutations = {
  async createRecipe(parent, args, context, info) {
    //TODO Check if they are logged in
    const recipe = await context.db.mutation.createRecipe(
      { data: { ...args } },
      info
    );
    return recipe;
  },
  async updateRecipe(parent, args, context, info) {
    const updates = { ...args };
    delete updates.id;
    return await context.db.mutation.updateRecipe({
      data: updates,
      where: { id: args.id }
    });
  },
  async deleteManyRecipes(parent, args, context, info) {
    console.log(args);
    return await context.db.mutation.deleteManyRecipes({
      where: { id_in: args.ids }
    });
  }
};

module.exports = Mutations;
