import { FaUser } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/Authcontext";

export default function Navbar() {
  const { isLogged, toggleLogin } = useAuth();
  return (
    <div className="flex justify-between items-center w-4/5 h-24 mt-5 px-5 bg-black rounded-2xl">
      <NavLink to="/" className="w-20 h-20">
        <img
          src="/assets/images/Gaminatorium_logo.jpg"
          className="rounded-full"
          alt="Gaminatorium logo"
        />
      </NavLink>

      <div className="flex gap-6">
        <NavLink to="/" className="flex gap-2 cursor-pointer hover:text-red" onClick={toggleLogin}>
          <FaUser className="w-6 h-6"/>
          {isLogged ? <span className="text-xl">Account</span> : <span className="text-xl">Login</span>}
        </NavLink>

        <NavLink to="/about" className="flex gap-2 cursor-pointer hover:text-red">
          <BsInfoCircleFill className="w-6 h-6" />
          <span className="text-xl">About</span>
        </NavLink>
      </div>
    </div>
  )
}
