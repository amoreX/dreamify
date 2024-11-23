const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [postSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Users", userModel);
