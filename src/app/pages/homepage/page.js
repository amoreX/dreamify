"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import PostComp from "./PostComp";
import SparklesBG from "./SparklesBG";
import DreamsThread from "./DreamsThread";

export default function Homepage() {
  const { data: session } = useSession();

  useEffect(() => {
    const register = async () => {
      await axios.post("/api/createUser", {
        username: session?.user?.name,
        email: session?.user?.email,
      });
    };
    if (session?.user?.name && session?.user?.email) {
      register();
    }
  }, [session?.user?.name, session?.user?.email]);

  return (
    <>
      <SparklesBG />

      <div
        id="landing-container"
        className="w-screen h-screen bg-gradient-to-b from-indigo-950 from-50%   to-violet-950/30 to-100% flex justify-between items-center flex-col gap-2 overflow-hidden box-border p-2"
      >
        <div
          id="title"
          className="w-screen h-16 flex justify-center items-center text-[42px] bg-clip-text text-transparent bg-gradient-to-tr from-fuchsia-300 via-violet-400 to-purple-400 font-semibold cursor-default"
        >
          Dreamy
        </div>

        <DreamsThread />
        <PostComp />
      </div>
    </>
  );
}
