import Header from "./Header"
import useNowMoviesPlaying from "../hooks/useNowMoviesPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  //Custom Hook to fetch Movie Data
  useNowMoviesPlaying();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse