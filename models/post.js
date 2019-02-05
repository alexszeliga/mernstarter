const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// a post is created by a user
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);
var Post = mongoose.model("Post", postSchema);
module.exports = Post;
