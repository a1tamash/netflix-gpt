import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	return (
		movies && (
			<div className="">
				<div className="bg-black">
					<div className="-mt-40 relative z-10">
						<MovieList
							title={"Now Playing"}
							movies={movies?.nowPlayingMovies}
						/>
						<MovieList title={"Popular"} movies={movies?.popularMovies} />
						<MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
						<MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
					</div>
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
