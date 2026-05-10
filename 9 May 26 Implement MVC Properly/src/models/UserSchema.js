const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    require: true,
    unique: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
    minlength: 8,
  },
  username: {
    require: true,
    unique: true,
    type: String,
  },
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
