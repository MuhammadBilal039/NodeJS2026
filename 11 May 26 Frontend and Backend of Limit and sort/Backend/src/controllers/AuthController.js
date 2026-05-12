const Users = require("../models/UserSchema");

const signupController = async (req, res) => {
  // Users signup
  try {
    const { userName, email, password, age } = req.body;

    if (!userName || !email || !password || !age) {
      res.json({
        status: false,
        message: "All Fields are required!",
      });
    }

    await Users.create(req.body);

    res.json({
      status: true,
      message: "User Signed Up Successfully!",
    });
  } catch (error) {
    console.log(error, "=>> Error");
    res.json({
      status: false,
      message: error.message,
    });
  }
};

const loginController = async (req, res) => {
  res.json({
    status: true,
    message: "User Logged In Successfully!",
  });
};

module.exports = {
  signupController,
  loginController,
};
