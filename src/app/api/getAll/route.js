import userModel from '../Models/userModel'
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const POST = async (req, res) => {
    await connecting();
    try {

        //Get all the documents from database
        //Sort them date wise
        //Return the data
        const allDreams= await userModel.find();
        // console.log(allDreams);

        // return Response.json({allDreams:allDreams});
        // console.log(JSON.stringify({allDreams}));
        return new Response(
            JSON.stringify({ allDreams }), // Stringify the object to prepare it for HTTP response
            { status: 200, headers: { "Content-Type": "application/json" } } // Set Content-Type to JSON
          );
        // return new Response(JSON.stringify({ allDreams }), { status: 200 });
    } catch (err) {
        console.log(err);
        return Response.json({
            Message:"Error hogaya"
        });
    }
};