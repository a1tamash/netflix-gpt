import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getUpcomingMovies();
	}, []);

	const getUpcomingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming",
			API_OPTIONS
		);

		const json = await data.json();
		dispatch(addUpcomingMovies(json.results));
	};
};

export default useUpcomingMovies;
