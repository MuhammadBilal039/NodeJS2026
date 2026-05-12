const express = require("express");
const getUsersControllers = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", getUsersControllers);

module.exports = userRouter;
