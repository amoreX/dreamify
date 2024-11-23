import userModel from '../Models/userModel'
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const POST = async (req, res) => {
    const { username, email, post } = await req.json();
    await connecting();
    try {
        
        const data = await userModel.updateOne(
            { email: email },
            { $push: { posts: {post} } }
        );

        if (data.modifiedCount === 0) {
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