const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/message", (req, res) => {
  res.send({ msg: "Hello Bilal API Working!" });
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
  ];

  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
  ];

  const id = +req.params.id;
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.send("404 User not Found!");
  }

  res.send(user);
});



app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
