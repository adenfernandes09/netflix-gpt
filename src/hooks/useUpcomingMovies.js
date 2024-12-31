import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/Constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovieFetchHandler = async() => {
        const upcomingMovieFetch = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const upcomingMovieList = await upcomingMovieFetch.json();
        dispatch(addUpcomingMovies(upcomingMovieList.results));
    }

    useEffect(() => {
        upcomingMovieFetchHandler();
    }, [])
}

export default useUpcomingMovies;