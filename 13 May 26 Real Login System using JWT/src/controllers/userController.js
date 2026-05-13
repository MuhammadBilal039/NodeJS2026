const jwt = require("jsonwebtoken");
const Users = require("../models/UserModel");

const getUsersController = (req, res) => {
  if (false) {
    throw "Bilal";
  } else {
    throw "Database timeout";
  }

  res.json({
    status: true,
    message: "All users fetched successfully!",
  });
};

const updateUsersController = async (req, res) => {
  try {
    const updateDetails = req.body;

    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await Users.findByIdAndUpdate(decoded.id, updateDetails);

    res.json({
      status: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUsersController,
  updateUsersController,
};
