import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getTopRatedMovies();
	}, []);

	const getTopRatedMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated",
			API_OPTIONS
		);

		const json = await data.json();
		dispatch(addTopRatedMovies(json.results));
	};
};

export default useTopRatedMovies;
