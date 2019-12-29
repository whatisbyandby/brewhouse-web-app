const bcrypt = require("bcryptjs");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { generateJWTandSetCookie } = require("../utils");
const { hasPermission } = require("../utils");
const { transport, makeANiceEmail } = require("../mail");
const { seedStyleData } = require("../../test-data/seedStyleData");

const Mutations = {
  async createRecipe(parent, args, context, info) {
    //TODO Check if they are logged in
    if (!context.request.userId) {
      throw new Error("You Must be Logged in to do that");
    }
    const recipe = await context.db.mutation.createRecipe(
      {
        data: {
          ...args,
          user: { connect: { id: context.request.userId } },
          style: { connect: { id: args.style } }
        }
      },
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
  async deleteRecipe(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.recipe({ where }, `{ id name user {id} }`);
    //2. Check if they own that item, or have the permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    // 3. Delete it!
    return ctx.db.mutation.deleteRecipe({ where }, info);
  },
  async deleteManyRecipes(parent, args, context, info) {
    return await context.db.mutation.deleteManyRecipes({
      where: { id_in: args.ids }
    });
  },
  async createStyle(parent, args, context, info) {
    const style = await context.db.mutation.createStyle(
      { data: { ...args } },
      info
    );
    return style;
  },
  async signup(parent, args, context, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.db.mutation.createUser(
      { data: { ...args, password, permissions: { set: ["USER"] } } },
      info
    );
    generateJWTandSetCookie(context, user.id);
    return user;
  },
  async signin(parent, { email, password }, context, info) {
    //Check to see if the user exists
    const user = await context.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No User Exists with email ${email}`);
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Incorrect Password Entered");
    }
    generateJWTandSetCookie(context, user.id);
    return user;
  },
  signout(parent, args, context, info) {
    context.response.clearCookie("token");
    return { message: "Goodbye" };
  },
  async requestReset(parent, args, context, info) {
    const user = await context.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No User Exsits with email ${args.email}`);
    }
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await context.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });

    const mailRes = await transport.sendMail({
      from: "test@test.com",
      to: user.email,
      subject: "Your password reset from Pery Brew",
      html: makeANiceEmail(
        `Your Password Reset Token is Here \n\n <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`
      )
    });
    return { message: "Thanks" };
  },
  async resetPassword(parent, args, context, info) {
    // 1. Check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords don't match");
    }
    // 2. Check if it's a valid reset token
    const [user] = await context.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is with invalid or expired");
    }
    // 4. Hash thier new password
    const password = await bcrypt.hash(args.password, 10);
    // 5. Save their new password and remove the resetToken and token expriation
    const updatedUser = await context.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password: password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // 6. Generate the JWT
    // 7. Set the JWT Cookie
    generateJWTandSetCookie(context, updatedUser.id);
    // 8. return the user
    return user;
  },
  async updatePermissions(parent, args, context, info) {
    // 1. Check if they are logged in
    if (!context.request.userId) {
      throw new Error("You must be logged in");
    }
    // 2. Check if they have the correct permissions
    hasPermission(context.request.user, ["PERMISSIONUPDATE"]);
    // 3. Check if it's a valid user id by getting the User
    const user = await context.db.query.user(
      { where: { id: args.userId } },
      info
    );
    if (!user) {
      throw new Error("This User doesn't exist");
    }
    // 5. Update the user
    const updatedUser = await context.db.mutation.updateUser(
      {
        where: { id: user.id },
        data: { permissions: { set: args.permissions } }
      },
      info
    );
    // 6. Return the user
    return updatedUser;
  },
  async seedStyleData(parent, args, context, info) {
    const seedData = await seedStyleData();
    const mappedData = seedData.map(style => ({
      data: {
        name: style.name,
        category: style.category,
        categoryNumber: parseInt(style.categoryNumber),
        styleLetter: style.styleLetter,
        styleGuide: style.styleGuide,
        type: style.type !== "" ? style.type.toUpperCase() : null,
        OGMin: parseFloat(style.ogMin),
        OGMax: parseFloat(style.ogMax),
        FGMin: parseFloat(style.fgMin),
        FGMax: parseFloat(style.fgMax),
        IBUMin: parseFloat(style.ibuMin),
        IBUMax: parseFloat(style.ibuMax),
        colorMin: parseFloat(style.colorMin),
        colorMax: parseFloat(style.colorMax),
        carbMin: parseFloat(style.carbMin),
        carbMax: parseFloat(style.carbMax),
        ABVMin: parseFloat(style.abvMin),
        ABVMax: parseFloat(style.abvMax),
        notes: style.notes,
        profile: style.profile,
        ingredients: style.ingredients,
        example: style.example
      }
    }));
    const styleList = await Promise.all(
      mappedData.map(style => context.db.mutation.createStyle(style))
    );
    return { message: "Worked!" };
  }
};

module.exports = Mutations;
