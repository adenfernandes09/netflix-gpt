import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase" 
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"
import userFallBack from "../assets/user-logo-fallback.png"
import { toggleGptState } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/Constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
;  const user = useSelector(store => store.user);
const gptToggleState  = useSelector(store => store.gpt?.showGptStateValue)

  const handleToggleState = () => {
    dispatch(toggleGptState());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const signOutHandler = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
        if(user){
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
            navigate("/browse");
        }
        else {
            dispatch(removeUser());
            navigate("/");
        }
    })

    return () => unsubscribe();
},[])

  return (
    <div className="absolute p-5 z-10 w-screen flex justify-between bg-gradient-to-b from-black to-transparent">
        <img src={logo} alt="Logo" className="w-40"/>

        {user && (<div className="flex">
          {gptToggleState && (
          <select className="px-3 mr-3 rounded-lg" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>)
          }
          <button onClick={handleToggleState} type="button" className="mr-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center">{gptToggleState ? "HomePage" : "GPT Search"  }</button>
          <img className="w-12 mr-2" src={userFallBack}  alt="User Logo"/>
          <button onClick={signOutHandler} className="text-white">Sign out</button>
        </div>)}
    </div>
  )
}

export default Header;