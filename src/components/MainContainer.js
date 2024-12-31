import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movieData = useSelector(store => store.movie?.nowPlayingMovies);
    if(movieData === null) return; 

    const {original_title, overview, id} = movieData[0];
  return (
    <>
    <VideoTitle title={original_title} description={overview} />
    <VideoBackground movieId={id} />
    </>
  )
}

export default MainContainer