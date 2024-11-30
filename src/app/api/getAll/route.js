import postModel from '../Models/postModel';
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const GET = async (req, res) => {
    await connecting();
    try {
        const allDreams= await postModel.find();

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