import userModel from '../Models/userModel'
import postModel from '../Models/postModel'
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const POST = async (req, res) => {
    const { username, email, post } = await req.json();
    await connecting();
    try {

        console.log(username);
        console.log(post);
        const newPost = await postModel.create({ username, post });

        const userUpdate = await userModel.updateOne(
            { username },
            { $push: { posts: newPost._id } }
          );
        if (userUpdate.modifiedCount === 0) {
            return Response.json({
                Message:"Error hogaya"
            });
        }

        return Response.json({
            Message:"Dream Added!"
        });
    } catch (err) {
        console.log(err);
        return Response.json({
            Message:"Error hogaya"
        });
    }
};