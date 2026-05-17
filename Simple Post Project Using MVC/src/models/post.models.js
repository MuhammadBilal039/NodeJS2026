const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
     image: {
          type: String,
     },
     caption: {
          type: String,
     }
})

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;