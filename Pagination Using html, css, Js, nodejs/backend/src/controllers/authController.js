const Users = require("../models/UserModel");

const authController = async (req, res) => {
  await Users.create(req.body);
  res.json({
    status: true,
    message: "User signed up successfully!",
  });
};

module.exports = authController;
