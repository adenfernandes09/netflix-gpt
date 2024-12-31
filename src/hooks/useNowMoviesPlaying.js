import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/Constants";

const useNowMoviesPlaying = () => {
    const dispatch = useDispatch();

    const moviesNowPlaying = async() => {
      const movieFetchCall = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const movieJson = await movieFetchCall.json()
      dispatch(addNowPlayingMovies(movieJson.results));
    }
  
    useEffect(() => {
      moviesNowPlaying();
    }, [])
  
}

export default useNowMoviesPlaying;