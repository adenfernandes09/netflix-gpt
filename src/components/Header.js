import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase" 
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"
import userFallBack from "../assets/user-logo-fallback.png"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
;  const user = useSelector(store => store.user);

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
    <div className="absolute p-5 z-10 w-screen flex justify-between">
        <img src={logo} alt="Logo" className="w-40"/>

        {user && (<div className="flex">
          <img className="w-10 mr-2" src={userFallBack}  alt="User Logo"/>
          <button onClick={signOutHandler} className="text-white">Sign out</button>
        </div>)}
    </div>
  )
}

export default Header;