"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function DreamsThread() {
  const { data: session } = useSession();
  const [dreams, setDreams] = useState(null);
  const [geminiPrompt,setGeminiPrompt]=useState(null);
  
  useEffect(() => {
    const gettingDreams = async () => {
      const data = await axios.get("/api/getAll");
      console.log("Heres all the dreams!");
    //   console.log(data.data.allDreams);
      console.log(data.data.allDreams);
      setDreams(data.data.allDreams);
    };
    gettingDreams();
  }, []);
  useEffect(()=>{
    if(geminiPrompt!=null){
        console.log("Tabahi hogi ab");
    }
  },[geminiPrompt]);
  return (
    <div id="dreams-container" className="w-screen h-screen flex justify-center overflow-y-scroll no-scrollbar">
      {dreams == null ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col items-center w-screen gap-3  ">
          {dreams.map((dream, ind) => {
            return (
              <div id="each-dream-container" key={ind} className="w-1/2 h-fit bg-black">
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
                {dream.username}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
