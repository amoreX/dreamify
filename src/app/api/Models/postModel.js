const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const postSchema=new Schema(
    {
        post: {type: String ,required: true},
        username: {type: String , required: true},
    },
    {timestamps: true}
);

module.exports=mongoose.models.Posts || mongoose.model("Posts",postSchema);