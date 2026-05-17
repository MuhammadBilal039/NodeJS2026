const PostModel = require("../models/post.models");
const uploadFile = require("../services/storage.service");

const createPost = async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  const post = await PostModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    status: true,
    message: "Post created successfully!",
    post,
  });
};

const getAllPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json({
    status: true,
    message: "All Posts fetched successfully!",
    posts,
  });
};

module.exports = {
  createPost,
  getAllPosts,
};
