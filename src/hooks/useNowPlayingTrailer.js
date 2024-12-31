import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/Constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useNowPlayingTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchVideoData = async () => {
    const videoData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const videoJson = await videoData.json();

    const filterVideoTrailer = videoJson.results.filter(
      (video) => video.type === "Trailer"
    );
    const videoTrailer = filterVideoTrailer.length
      ? filterVideoTrailer[0]
      : videoJson.results[0];
    dispatch(addMovieTrailer(videoTrailer));
  };
  
  useEffect(() => {
    fetchVideoData();
  }, []);
};

export default useNowPlayingTrailer;
