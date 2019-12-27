const jwt = require("jsonwebtoken");

function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
}

function generateJWTandSetCookie(context, userId) {
  const token = jwt.sign({ userId }, process.env.APP_SECRET);
  context.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
}

exports.hasPermission = hasPermission;
exports.generateJWTandSetCookie = generateJWTandSetCookie;
