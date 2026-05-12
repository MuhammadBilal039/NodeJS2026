const express = require("express");
const {
  signupController,
  loginController,
} = require("../controllers/AuthController");

const authRoutes = express.Router();

// signup
authRoutes.post("/signup", signupController);

// login
authRoutes.post("/login", loginController);

module.exports = authRoutes;
