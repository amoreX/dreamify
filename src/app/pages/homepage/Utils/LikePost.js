
import axios from "axios";
export const LikePost=async(dreamId,email)=>{

    const result= await axios.post("/api/addLike",{
        email:email,
        postId:dreamId,
    });
    return result.status;

};


export const isLiked=async(dreamId,email)=>{
    
    //check if post is liked by user or not 
    //supposed to run this function every time LikePost function is called as well
     
};