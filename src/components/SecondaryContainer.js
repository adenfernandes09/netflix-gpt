import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie);
  // console.log(movies)
  return movies && (
    <div className="bg-black">
      <div className="relative -mt-32">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
      <MovieList title="Upcoming movies" movies={movies?.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer