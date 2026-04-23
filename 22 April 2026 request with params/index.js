const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json({
    status: true,
    message: "User Fetched Successfully!",
    data: users,
  });
});

app.get("/users/:username", (req, res) => {
  const { username } = req.params;
  const user = users.find((user) => user.username == username);
  console.log(user);
  res.json({
    status: true,
    message: "Single User Fetched Successfully!",
    data: user,
  });
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({
    status: true,
    message: "User Added Successfully!",
    data: user,
  });
});

app.put("/users/:username", (req, res) => {
  const { username } = req.params;

  users = users.map((user) => {
    if (user == username) {
      user = req.body;
      return user;
    }
    return user;
  });

  res.json({
    status: true,
    message: "User Updated Successfully!",
  });
});

app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
