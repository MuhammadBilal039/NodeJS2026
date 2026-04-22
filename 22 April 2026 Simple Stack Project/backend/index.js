const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcom to Home Page!!!");
});

app.get("/iftarmenu", (req, res) => {
  const users = [
    { id: 1, itemName: "Cholay" },
    { id: 2, itemName: "Dahibaray" },
    { id: 3, itemName: "Dahi" },
  ];

  res.json({
    status: true,
    message: "Users fetched!",
    users,
  });
});

app.post("/signup", (req, res) => {
  res.json({
    status: true,
    message: "User signed up successfully!",
  });
});

app.listen(5000, () => {
  console.log("Server is runing on the Port 5000");
});
