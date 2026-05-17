require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on Port 3000");
});
