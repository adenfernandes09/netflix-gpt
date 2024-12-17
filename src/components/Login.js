import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isLogin, setIsLogin] = useState(true);

  const toggleSignIn = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      <Header />
      <div className="bg-black absolute bg-opacity-70">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IE-en-20241209-TRIFECTA-perspective_adb9da5e-2fb8-47fe-ac98-f0cbb7fb73c0_medium.jpg"
          alt="login-background"
        />
      </div>

      <form className="w-1/4 absolute p-8 px-10 bg-black bg-opacity-80 mx-auto my-40 right-0 left-0 rounded-md">
        <h2 className="text-white text-3xl font-semibold">{isLogin ? "Sign In" : "Sign Up"}
        </h2>
        {!isLogin && <input type="text" className="p-2 my-5 w-full rounded-lg bg-gray-700" placeholder="Enter Full Name"/>}
        <input
          type="email"
          className="p-2 my-5 w-full rounded-lg bg-gray-700"
          placeholder="Enter email"
        />
        <input
          type="password"
          className="p-2 my-5 w-full rounded-lg bg-gray-700"
          placeholder="Enter password"
        />
        <button className="rounded-lg bg-red-500 w-full py-2 mb-2 font-bold text-xl text-white hover:bg-opacity-70">
        {isLogin ? "Sign In" : "Sign up"}
        </button>
        <p onClick={toggleSignIn} className="text-white text-sm mb-3">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;