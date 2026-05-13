const Users = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const signupController = async (req, res) => {
  try {
    const { userName, email, password, age } = req.body;

    if (!userName || !email || !password || !age) {
      return res.json({
        status: false,
        message: "All Fields are required!",
      });
    }

    await Users.create(req.body);

    res.json({
      status: true,
      message: "User Signed up successfully!",
    });
  } catch (error) {
    console.log(error, "==>> error");
    res.json({
      status: false,
      message: error.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const myUser = await Users.findOne({
      email: email,
    });

    if (!myUser)
      return res.json({
        status: false,
        message: "User not found!",
      });

    if (myUser.password != password)
      return res.json({
        status: false,
        message: "Wrong Password",
      });

    const token = jwt.sign(
      {
        email: myUser.email,
        userName: myUser.userName,
        id: myUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: 2 * 60 },
    );

    res.json({
      status: true,
      message: "User logged in successfully!",
      token: token,
    });
  } catch (error) {
    console.log(error, "=>> Error");
    res.json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = { signupController, loginController };
