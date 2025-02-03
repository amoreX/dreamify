import userModel from "../Models/userModel";
import postModel from "../Models/postModel";
const mongoose = require("mongoose");
import { connecting } from "../connect/route";

export const POST = async (req, res) => {
  const { email, postId } = await req.json();
  await connecting();

  try {
    const post = await postModel.findById(postId);

    let isPresent = post.likedby.includes(email);

    if (!isPresent) {
      const postLikeUpdate = await postModel.updateOne(
        { _id: postId },
        { $inc: { likes: 1 } }
      );

      const postArrayUpdate = await postModel.updateOne(
        { _id: postId },
        { $push: { likedby: email } }
      );
    } else {
      const postLikeUpdate = await postModel.updateOne(
        { _id: postId },
        { $inc: { likes: -1 } }
      );

      const postArrayUpdate = await postModel.updateOne(
        { _id: postId },
        { $pull: { likedby: email } }
      );
    }

    return Response.json({
      Message: "Modified",
      Status: true,
    });
  } catch (err) {
    console.log(err);
    return Response.json({
      Message: "Error hogya",
      Status: false,
    });
  }
};
