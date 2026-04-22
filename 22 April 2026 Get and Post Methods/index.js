const express = require("express");

const app = express();

const users = [];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json({
    status: true,
    message: "User Fetched Successfully!",
    data: users,
  });
});

app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  res.send({
    status: true,
    message: "User Added Successfully!",
    data,
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
