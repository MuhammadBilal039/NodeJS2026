const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./config/db");
const dns = require("node:dns");

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  if (err == "Bilal") {
    res.json({
      status: false,
      err: "Error bilal ke side se hai",
    });
  }

  if (err == "Database timeout") {
    res.json({
      status: false,
      err: "Error database ke side se hai",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running at PORT: ", process.env.PORT);
});
