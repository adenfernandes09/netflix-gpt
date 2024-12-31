import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/Constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovieFetchHandler = async() => {
        const topRatedMovieFetch = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const topRatedMoviesList = await topRatedMovieFetch.json();
        dispatch(addTopRatedMovies(topRatedMoviesList.results));
    }

    useEffect(() => {
        topRatedMovieFetchHandler();
    }, [])
}

export default useTopRatedMovies;