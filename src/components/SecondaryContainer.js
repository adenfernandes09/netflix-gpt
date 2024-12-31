import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie);
  // console.log(movies)
  return movies && (
    <div className="bg-black">
      <div className="relative -mt-20">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Trending" movies={movies?.popularMovies} />
      <MovieList title="Popular" movies={movies?.nowPlayingMovies} />
      <MovieList title="Upcoming movies" movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer