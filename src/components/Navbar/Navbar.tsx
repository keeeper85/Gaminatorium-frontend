import { FaUser } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { isLogged } = useAuth();
  return (
    <div className="fixed z-10 flex justify-between items-center w-4/5 h-24 mt-5 px-5 bg-black rounded-2xl">
      <NavLink to="/">
        <img
          src="/assets/images/Logo_GAM.svg"
          className="rounded-full w-64 h-auto"
          alt="Gaminatorium logo"
        />
      </NavLink>
            <div className="flex items-center gap-6">
                {isLogged ?
                    <NavLink to="/myAccount" className="flex items-center gap-2 cursor-pointer hover:text-red hover:scale-90 transition-all ease-in-out duration-300">
                        <RiAccountCircleFill className="w-4 h-4" />
                        <span className="text-base">Account</span>
                    </NavLink>
                    :
                    <NavLink to="/login" className="flex items-center gap-2 cursor-pointer hover:text-red hover:scale-90 transition-all ease-in-out duration-300">
                        <FaUser className="w-4 h-4" />
                        <span className="text-base">Login</span>
                    </NavLink>
                }

                <NavLink to="/about" className="flex items-center gap-2 cursor-pointer hover:text-red hover:scale-90 transition-all ease-in-out duration-300">
                    <BsInfoCircleFill className="w-4 h-4" />
                    <span className="text-base">About</span>
                </NavLink>
            </div>
        </div>
    )
}
