const express = require("express");
const multer = require("multer");
const { createPost, getAllPosts } = require("../controllers/postsController");

const postRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/create-post", upload.single("image"), createPost);

postRouter.get("/feed", getAllPosts);

module.exports = postRouter;
