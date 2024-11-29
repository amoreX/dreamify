"use client"
import { motion } from "framer-motion"
import { useState,useEffect,useRef } from "react"
import axios from "axios"
import { useSession } from "next-auth/react";
export default function DreamsThread(){
    const { data: session } = useSession();
    
    return(
        <div
          id="dreams-container"
          className="w-screen h-full flex justify-center "
        >
          will work after backend is done
        </div>
    )
}