import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LangConstant";
import client from "../utils/openAIConfig"
import search from "../assets/search-logo.svg";
import { useRef } from "react";
import { options } from "../utils/Constants";
import { addGptMovieSuggestions } from "../utils/gptSlice";

const GptInput = () => {
  const searchText = useRef(null);  
  const dispatch = useDispatch();
  const setLanguage = useSelector((store) => store.config?.lang);

  const moviesSuggestedInfo = async(movie) => {
    const movies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
    const moviesList = await movies.json()
    return moviesList.results;
    
  }
  const handleGPTMovieGeneration = async() => {
    const movieString = searchText.current.value;
    const movieQuery = `Generate 5 recommendations for ${movieString} movies and they should be comma separated like the following example: The Dark Knight, Mission Impossible, Inception, The Matrix, The Avengers`;
    const gptMovieRecommedations = await client.chat.completions.create({
        messages: [{ role: 'user', content: movieQuery }],
        model: 'gpt-3.5-turbo',
      });

      const moviesNameList = gptMovieRecommedations.choices[0]?.message?.content.split(",")

      const movieData = moviesNameList.map((movie) => moviesSuggestedInfo(movie));
      
      const movieInfoResults = await Promise.all(movieData);
      const movieInfoResultsList = movieInfoResults.map((arr) => arr[0]);
      
      dispatch(addGptMovieSuggestions({movies: movieInfoResultsList, movieNames: moviesNameList}))
      
  }

  return (
      <div className="w-1/2">
        <div className="relative">
    <form onSubmit={(e) => e.preventDefault()}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img className="w-[18px]" src={search} alt="search-logo" />
          </div>
          <input
            ref={searchText}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={lang[setLanguage].placeholder}
          />
          <button
            type="submit"
            onClick={handleGPTMovieGeneration}
            className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
          >
            {lang[setLanguage].search}
          </button>
    </form>
        </div>
        </div>
  );
};

export default GptInput;
