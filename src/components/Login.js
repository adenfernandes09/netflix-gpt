import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/ValidateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const[isLogin, setIsLogin] = useState(true);
  const[errorMessage, setErrorMessage] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSignIn = () => {
    setIsLogin(!isLogin);
  }

  const signInHandler = () => {
    const validateMessage = ValidateData(email.current.value, password.current.value);
    setErrorMessage(validateMessage);

    if(validateMessage) return; 

    if(!isLogin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocI-a0ymdoDIxpUMPaBfcXHQ8tyiLxOg5-BIWkGeDUgCEp5yNFJF=s576-c-no"
        }).then(() => {
          console.log(auth);
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate("/browse")
        }).catch((error) => {
          setErrorMessage(error.messsage)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Sign In
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
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

      <form onSubmit={(e) => e.preventDefault()} className="w-1/4 absolute p-8 px-10 bg-black bg-opacity-80 mx-auto my-40 right-0 left-0 rounded-md">
        <h2 className="text-white text-3xl font-semibold">{isLogin ? "Sign In" : "Sign Up"}
        </h2>
        {!isLogin && <input ref={name} type="text" className="p-2 my-5 w-full rounded-lg bg-gray-700 text-white" placeholder="Enter Full Name"/>}
        <input
          ref={email}
          type="email"
          className="p-2 my-5 w-full rounded-lg bg-gray-700 text-white"
          placeholder="Enter email"
        />
        <input
          ref={password}
          type="password"
          className="p-2 mt-5 mb-3 w-full rounded-lg bg-gray-700 text-white"
          placeholder="Enter password"
        />
        <p className="text-red-500 mb-4">{errorMessage}</p>
        <button onClick={signInHandler} className="rounded-lg bg-red-500 w-full py-2 mb-2 font-bold text-xl text-white hover:bg-opacity-70">
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