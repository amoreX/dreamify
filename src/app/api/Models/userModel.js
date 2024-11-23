const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
    username: { type: String },
    email: { type: String, required: true },
    post: { type: String, required: true },
})

module.exports= mongoose.models.Users || mongoose.model("Users", userModel)