import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getPopularMovies();
	}, []);

	const getPopularMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular",
			API_OPTIONS
		);

		const json = await data.json();
		console.log(json);
		dispatch(addPopularMovies(json.results));
	};
};

export default usePopularMovies;
