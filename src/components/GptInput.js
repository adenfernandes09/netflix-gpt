import { useSelector } from "react-redux";
import lang from "../utils/LangConstant";
import search from "../assets/search-logo.svg";

const GptInput = () => {
  const setLanguage = useSelector(store => store.config?.lang);
  console.log(setLanguage);
  return (
    <div className="w-1/2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <img className="w-[18px]" src={search} alt="search-logo" /> 
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={lang[setLanguage].placeholder}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
        >
          {lang[setLanguage].search}
        </button>
      </div>
      </div>
  );
};

export default GptInput;
