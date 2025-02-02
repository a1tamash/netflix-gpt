import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing",
			API_OPTIONS
		);

		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};
};

export default useNowPlayingMovies;
