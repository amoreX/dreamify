"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function PostComp() {
  const { data: session } = useSession();
  const [userpost, setUserpost] = useState("");

  const postData = async () => {
    console.log("post was clicked");
    const diddy = await axios.post("/api/MakePost", {
      username: session?.user?.name,
      email: session?.user?.email,
      post: userpost,
    });
    setUserpost("");
  };
  return (
    <div
      id="footer-container"
      className="w-screen h-16  flex justify-center items-center gap-2 z-20"
    >
      <div
        id="user-dream-container"
        className="bg-indigo-950 w-1/2 h-full rounded-full flex justify-center items-center box-border p-5 relative"
      >
        <input
          type="text"
          placeholder="Enter Dream"
          className="bg-transparent w-full h-9 border-none outline-none rounded-full box-border p-2"
          onChange={(e) => setUserpost(e.target.value)}
          value={userpost}
        />
        <div
          id="post-button"
          className="cursor-pointer"
          onClick={() => postData()}
        >
          post
        </div>
      </div>
      <div id="ai-modify" className="cursor-pointer">
        mod
      </div>
    </div>
  );
}
