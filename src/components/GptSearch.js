import { SIGN_IN_BG } from "../utils/Constants";
import GptInput from "./GptInput";
import GptSugesstions from "./GptSugesstions";

const GptSearch = () => {
  return (
    <div className="relative">
        <img src={SIGN_IN_BG} alt="Netflix Background"/>
      <div className="flex justify-center items-center absolute w-screen top-[calc(100vh-50%)]">
        <GptInput />
      </div>
      <GptSugesstions />
    </div>
  );
};

export default GptSearch;
