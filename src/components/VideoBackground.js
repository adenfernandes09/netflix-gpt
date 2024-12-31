import { useSelector } from "react-redux";
import useNowPlayingTrailer from "../hooks/useNowPlayingTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movie?.movieTrailerPlaying);
  useNowPlayingTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId?.key}?autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
