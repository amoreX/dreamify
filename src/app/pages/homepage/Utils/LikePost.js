
import axios from "axios";
export const LikePost=async(dreamId,email)=>{

    const result= await axios.post("/api/addLike",{
        email:email,
        postId:dreamId,
    });
    return result.status;

};