import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <div className="absolute p-5 m-3 z-10">
        <img src={logo} alt="Logo" className="w-44"/>
    </div>
  )
}

export default Header