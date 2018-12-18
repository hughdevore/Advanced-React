const Mutations = {
  // TODO: Check the user is authenticated
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);
    return item;
  }
};

module.exports = Mutations;
