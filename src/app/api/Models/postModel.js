const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post: { type: String, required: true },
    username: { type: String, required: true },
    likes: { type: Number, required: true },
    likedby:[
      {
        type: String, // Add email of the nigga who likes the post 
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.models.Posts || mongoose.model("Posts", postSchema);
