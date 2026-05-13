const express = require("express");
const {
  getUsersController,
  updateUsersController,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", getUsersController);
userRouter.put("/", updateUsersController);

module.exports = userRouter;
