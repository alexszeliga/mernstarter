const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// a user can create posts
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  { timestamps: true }
);
var User = mongoose.model("User", userSchema);
module.exports = User;
