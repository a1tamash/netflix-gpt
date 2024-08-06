import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
			<h1 className="font-bold text-6xl">{title}</h1>
			<p className="py-6 text-base w-4/12">{overview}</p>
			<div>
				<button className="bg-white text-black hover:bg-opacity-80 rounded-lg text-base px-12 py-3 ">
					▶️ Play
				</button>
				<button className="bg-gray-500 hover:bg-opacity-25 mx-2 rounded-lg text-base px-10 py-3 bg-opacity-50">
					<span className="font-bold">!</span> More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
