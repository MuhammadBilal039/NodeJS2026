const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dns = require("node:dns");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/usersRoutes");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://muhammadbilal2021pk_db_user:I0Y8w23QTRinMfnE@cluster0.rgyuwrt.mongodb.net/",
  );
  console.log("Connect to DB");
};

connectDB();

app.get("/health", (req, res) => {
  res.json({
    status: true,
    message: "Backend is working!",
  });
});

// auth route
app.use("/api/v1/auth", authRoutes);

// users route
app.use("/api/v1/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is working on Port number :", process.env.PORT);
});
