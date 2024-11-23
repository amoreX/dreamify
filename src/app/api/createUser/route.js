import userModel from "../Models/userModel";
const mongoose = require("mongoose");
import { connecting } from "../connect/route";

export const POST = async (req, res) => {
  const { username, email } = await req.json();
  await connecting();
  try {
    const checkingUser = await userModel.findOne({ email: email });
    if (!checkingUser) {
      const userInfo = {
        username: username,
        email: email,
      };

      const newUser = new userModel(userInfo);

      await newUser.save();
      return Response.json({
        Message: "User Created Successfully",
        userId: newUser._id,
        authStatus: "True",
      });
    }
    else{
      return Response.json({
        Message: "User Exists",
      });
    }
  } catch (err) {
    console.log(err);
    return Response.json({
      Message: "Error hogaya",
    });
  }
};
