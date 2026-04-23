const express = require("express");

const app = express();

require("dotenv").config();

// const dotenv = require("dotenv").config
// dotenv()

// const dotenv = require("dotenv");

// dotenv.config({
//   path: "testing.env",
// });

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port:" + process.env.PORT);
});
