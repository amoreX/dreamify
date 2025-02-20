"use client";

import { LikePost, updatedPost } from "./Utils/LikePost";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function DreamsThread() {
	const { data: session } = useSession();
	const [dreams, setDreams] = useState(null);
	const refs = useRef({});

	const setRef = (id, ele) => {
		if (ele) {
			refs.current[id] = {
				container: ele,
				likes: ele.querySelector("#likes"),
			};
		}
	};

	const checkLiked = useCallback(
		async (dreamId) => {
			const res = await updatedPost(dreamId, session?.user?.email);
			return res.Message;
		},
		[session?.user?.email]
	);

	useEffect(() => {
		const gettingDreams = async () => {
			const data = await axios.get("/api/getAll");
			// console.log("Heres all the dreams!");
			// console.log(data.data.allDreams);

			// Check liked status for each dream after setting dreams
			if (data.data.allDreams && session?.user?.email) {
				data.data.allDreams.forEach(async (dream) => {
					const isLiked = await checkLiked(dream._id);
					if (refs.current[dream._id]?.likes) {
						refs.current[dream._id].likes.style.backgroundColor = isLiked ? "red" : "white";
					}
				});
			}
			setDreams(data.data.allDreams);
		};
		gettingDreams();
	}, [session?.user?.email, checkLiked]);

	const handleLike = async (dreamId) => {
		await LikePost(dreamId, session?.user?.email);
		let update = await updatedPost(dreamId, session?.user?.email);

		if (refs.current[dreamId]?.likes) {
			refs.current[dreamId].likes.textContent = `Likes:${update.Likes}`;
		}
		if (update?.Message == true) {
			refs.current[dreamId].likes.style.backgroundColor = "red";
		} else {
			refs.current[dreamId].likes.style.backgroundColor = "white";
		}
		console.log(update);
	};

	return (
		<div
			id="dreams-container"
			className="w-screen h-screen flex justify-center overflow-y-scroll no-scrollbar"
		>
			{dreams == null ? (
				<div>Loading...</div>
			) : (
				<div className="flex flex-col items-center w-screen gap-3  ">
					{dreams.map((dream, ind) => {
						return (
							<div
								id="each-dream-container"
								key={dream._id}
								ref={(el) => setRef(dream._id, el)}
								className="w-1/2 h-fit relative bg-indigo-600 box-border p-3 rounded-md flex flex-col justify-center items-center"
							>
								<span> {dream.post}</span>
								<div
									className="text-black cursor-pointer"
									onClick={() => handleLike(dream._id)}
									id="likes"
								>
									Likes : {dream.likes}
								</div>
								<div id="username" className="absolute bottom-0 right-0 bg-black">
									{dream.username}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
