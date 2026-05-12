const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./config/db");
const dns = require("node:dns");
const cors = require("cors");
const authRouter = require("./routes/authRoutes");

dotenv.config();

const app = express();

dns.setServers(["1.1.1.1", "8.8.8.8"]);
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running at PORT number : ", process.env.PORT);
});
