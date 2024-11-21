"use client"
import axios from "axios";
import { useSession } from "next-auth/react"
import { useState,useEffect } from "react";
export default function Homepage (){
    const {data: session}=useSession();

    useEffect(()=>{
        const getData=async()=>{
            const diddy=await axios.get("/api/connect");
        };
        getData();
    },[]);

    return(
        <div>{session?.user?.name}</div>
    )
}