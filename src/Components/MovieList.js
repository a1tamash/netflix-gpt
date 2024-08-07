import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	if (movies === null) return;

	return (
		<div className="px-6 ">
			<h1 className="text-3xl py-4 text-white">{title}</h1>
			<div className="flex overflow-x-scroll px-6 ">
				<div className="flex space-x-4 ">
					{movies.map((movie) => (
						<MovieCard
							key={movie.id}
							poster_path={movie.poster_path}
							original_title={movie.original_title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
