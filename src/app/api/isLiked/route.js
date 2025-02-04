import userModel from "../Models/userModel";
import postModel from "../Models/postModel";
const mongoose = require("mongoose");
import { connecting } from "../connect/route";

export const POST= async(req,res)=>{
    await connecting();
    try{

        const {postId,email}=await req.json();
        const post = await postModel.findById(postId);
        let res=post.likedby.includes(email);
        let number=post.likes;
        return Response.json({
            Message:res,
            Likes:number,
        })

    }catch(err){
        return Response.json({
            Message:err,
            Status:"Chud gaye guru"
        })
    }
}