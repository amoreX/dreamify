"use client"
import { motion } from "framer-motion"
import { useState,useEffect,useRef } from "react"
import axios from "axios"
import { useSession } from "next-auth/react";
export default function DreamsThread(){
    const { data: session } = useSession();
    const [dreams,setDreams]=useState(null);
    useEffect(()=>{
        const gettingDreams=async()=>{
            const data=await axios.post("/api/getAll");
            console.log("Heres all the dreams!");
            console.log(data.data.allDreams);
            setDreams(data.data.allDreams);
        }
        gettingDreams();
    },[]);
    return(
        <div
          id="dreams-container"
          className="w-screen h-full flex justify-center "
        >
          {/* {dreams} */}
        </div>
    )
}