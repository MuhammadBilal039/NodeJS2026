const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.send({
    status: true,
    message: "Users fetched successfully!",
    data: [{ name: "Bilal Khan" }, { name: "Muhammad Bilal" }],
  });
});

app.post("/users", (req, res) => {
  res.send({
    status: true,
    message: "User Added Successfully!",
  });
});

app.put("/users", (req, res) => {
  res.send({
    status: true,
    message: "User Updated Successfully!",
  });
});

app.patch("/users", (req, res) => {
  res.send({
    status: true,
    message: "User Field Updated Successfully!",
  });
});

app.delete("/users", (req, res) => {
  res.send({
    status: true,
    message: "User Deleted Successfully!",
  });
});

app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
