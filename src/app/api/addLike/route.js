import userModel from "../Models/userModel";
import postModel from "../Models/postModel";
const mongoose = require("mongoose");
import { connecting } from "../connect/route";

export const POST = async (req, res) => {
  const { email, postId } = await req.json();
  await connecting();

  try {
    const post = await postModel.findById(postId);
    // console.log(post.likes);
    const postLikeUpdate= await postModel.updateOne(
        {_id:postId},
        {$inc :{likes: 1 }}
    );

    const postArrayUpdate=await postModel.updateOne(
        {_id:postId},
        {$push:{likedby:email}}
    );

    if (postLikeUpdate.modifiedCount === 0 || postArrayUpdate.modifiedCount===0) {
        return Response.json({
          Message: "Error hogaya",
          Status:false,
        });
      }

    return Response.json({
      Message: "Liked",
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
