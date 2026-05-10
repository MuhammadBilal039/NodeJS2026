require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UsersModel = require("./models/UserSchema");

const app = express();
const PORT = 8000;

app.use(express.json())

app.get("/health", (req, res) => {
  res.json({
    status: true,
    message: "API is fetched!",
    data: [
      {
        name: "Muhammad",
        age: 21,
        city: "Karachi",
      },
    ],
  });
});

app.post("/addUser", async (req, res) => {
  const user = req.body;
  try {
    const user = await UsersModel.create(user);

    res.send({
      status: true,
      message: "User Added Successfully!",
      user,
    });
  } catch (error) {
    console.log(error, "error");
    res.send({
      status: false,
      message: error.message,
    });
  }
});

main().catch((error) => console.log(error));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB is connected");
}

app.listen(PORT, () => {
  console.log("Application is running on PORT number " + PORT);
});
