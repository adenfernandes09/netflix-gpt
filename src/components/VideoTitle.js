import moreInfo from "../assets/more-info.svg";
import play from "../assets/play-button.svg";


const VideoTitle = ({title, description}) => {
  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-r from-black to-transparent">
    <h1 className="text-6xl pt-[20%] pl-10 mb-5 font-bold text-white">{title}</h1>
    <p className="text-lg pl-10 w-1/3 mb-5 text-white">{description}</p>
    <div className="more-info pl-10">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-4"><img alt="play-icon" src={play} className="w-4 mr-2"/>Play</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"><img alt="play-icon" src={moreInfo} className="w-4 mr-2"/>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle