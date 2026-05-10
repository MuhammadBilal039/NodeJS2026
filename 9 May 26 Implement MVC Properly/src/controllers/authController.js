const {
  successResponse,
  errorResponse,
} = require("../helperFunctions/responseHandler");
const Users = require("../models/UserSchema");

const signupController = async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return errorResponse(400, false, "All Fields are requireds!", res);
  }

  if (password.length < 8) {
    return errorResponse(
      400,
      false,
      "Your Password should be minimum 8 characters long",
      res,
    );
  }

  try {
    await Users.create({
      email: email,
      password: password,
      username: username,
    });

    return successResponse(200, true, "User Signed Up successfully!", [], res);
  } catch (error) {
    return errorResponse(400, false, error.message, res);
  }
};

module.exports = signupController;
