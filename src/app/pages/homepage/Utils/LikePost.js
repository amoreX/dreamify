
import axios from "axios";
export const LikePost=async(dreamId,email)=>{

    const result= await axios.post("/api/addLike",{
        email:email,
        postId:dreamId,
    });
    return result.status;

};


export const updatedPost=async(dreamId,email)=>{
    const res = await axios.post("/api/isLiked",{
        email:email,
        postId:dreamId,
    });
    // console.log(res);
    return res.data;
};