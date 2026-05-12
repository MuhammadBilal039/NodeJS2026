const Users = require("../models/UserModel");

const getUsersControllers = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.currentPage - 1;

  const User = await Users.find()
    .limit(limit)
    .skip(page * limit);

  res.json({
    status: true,
    message: "Users Fetched Successfully",
    data: User,
  });
};

module.exports = getUsersControllers;
