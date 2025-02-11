const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true },
		posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Posts" }],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.models.Users || mongoose.model("Users", userSchema);
