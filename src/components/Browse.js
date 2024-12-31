import Header from "./Header"
import useNowMoviesPlaying from "../hooks/useNowMoviesPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  //Custom Hook to fetch Movie Data
  useNowMoviesPlaying();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse