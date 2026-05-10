const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 50,
  },
});

const UsersModel = mongoose.model("Users", UserSchema);

module.exports = UsersModel;
