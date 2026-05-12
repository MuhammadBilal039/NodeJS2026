const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./helperFunctions/db");
const authRouter = require("./Routes/authRoute");

dotenv.config();

const app = express();

app.use(express.json());


app.get("/health", (req, res) => {
  res.json({
    status: true,
    message: "Server is working fine",
  });
});

// authRoute
app.use("/api/auth", authRouter);

// uesrsRoute
// app.use("/api/users", usersRoute);

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is working at PORT:", process.env.PORT);
});
