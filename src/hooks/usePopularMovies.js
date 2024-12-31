import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const popularMoviesFetch = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const popularMoviesList = await popularMoviesFetch.json();
    console.log(popularMoviesList.results);
    dispatch(addPopularMovies(popularMoviesList.results));
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
