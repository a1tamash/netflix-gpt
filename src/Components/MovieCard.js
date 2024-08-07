import React from "react";
import { POSTER } from "../utils/constants";

const MovieCard = ({ poster_path, original_title }) => {
	return (
		<div>
			<div className="w-[200px] ">
				<img src={POSTER + poster_path} alt={original_title}></img>
			</div>
		</div>
	);
};

export default MovieCard;
