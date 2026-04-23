const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello bai this is script creating file....");
});

app.get("/users", (req, res) => {
  res.send({
    status: true,
    message: "Users fetched successfully!",
    data: [{ name: "Bilal Khan" }],
  });
});



app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
