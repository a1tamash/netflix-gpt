import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useNowPlayingMovies();

	{
		/*
		* Main Container
			- Video Background 
			- Video Title
		* Secondary Container
			- MovieList * n
			- cards * n
		*/
	}

	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
