const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/users", (req, res) => {
  res.send({
    status: true,
    message: "Users fetched successfully!",
    data: [{ name: "Bilal Khan" }, { name: "Muhammad Azan" }],
  });
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
