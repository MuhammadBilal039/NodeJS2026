const express = require("express");
const getUsersControllers = require("../controllers/UsersControllers");

const userRoutes = express.Router();

// users
// get , post, put, patch, delete
userRoutes.get("/", getUsersControllers);
// userRoutes.post("/", getUsersControllers);
// userRoutes.put("/", getUsersControllers);
// userRoutes.delete("/", getUsersControllers);

module.exports = userRoutes;
