const express = require("express");
const postRouter = require("./routes/post.route");

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRouter);

module.exports = app;
