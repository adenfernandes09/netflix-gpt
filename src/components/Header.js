import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase" 
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useSelector } from "react-redux";
import userFallBack from "../assets/user-logo-fallback.png"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className="absolute p-5 z-10 w-screen flex justify-between">
        <img src={logo} alt="Logo" className="w-40"/>

        {user && (<div className="flex">
          <img className="w-10 mr-2" src={userFallBack}  alt="User Logo"/>
          <button onClick={signOutHandler}>Sign out</button>
        </div>)}
    </div>
  )
}

export default Header