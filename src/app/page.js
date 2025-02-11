"use client";
import { useState, useEffect } from "react";
import SparklesBG from "./pages/homepage/SparklesBG";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
export default function Home() {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(true);
		setTimeout(() => {
			signIn("google", { callbackUrl: "/pages/homepage" });
		}, 2000);
	};

	return (
		<>
			<SparklesBG />
			<div
				id="landing-container"
				className="w-screen h-screen bg-gradient-to-b from-indigo-950 from-50%   to-violet-950/30 to-100% flex justify-center items-center flex-col gap-2 overflow-hidden "
			>
				<div
					id="title"
					className="text-[58px] bg-clip-text text-transparent bg-gradient-to-tr from-fuchsia-300 via-violet-400 to-purple-400 font-semibold cursor-default"
				>
					Dreamy
				</div>
				<div
					id="signin"
					className="bg-violet-600 relative w-48 h-fit px-16 py-2 flex justify-center rounded-md font-bold anim ate-bounce cursor-pointer transition-all overflow-hidden hover:w-24 hover:rounded-3xl"
				>
					<div
						id="box-container"
						className={` absolute flex m-auto w-screen  inset-0  bg-purple-950/90 z-10 ${
							click == true ? "h-10" : "h-0"
						} transition-all`}
					></div>
					<div id="text" className="z-30" onClick={() => handleClick()}>
						signin
					</div>
				</div>
			</div>
		</>
	);
}
