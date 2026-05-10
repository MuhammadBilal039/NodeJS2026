const express = require("express");
const {
  successResponse,
  errorResponse,
} = require("../helperFunctions/responseHandler.js");
const Users = require("../models/UserSchema.js");
const signupController = require("../controllers/authController.js");

const authRouter = express.Router();

// signup route
authRouter.post("/signup", signupController);

// login route
authRouter.post("/login", (req, res) => {
  return successResponse(200, true, "User Logged In successfully!", [], res);
});

module.exports = authRouter;
