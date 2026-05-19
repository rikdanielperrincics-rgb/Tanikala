import { NavLink } from "react-router-dom"
import LogoDark from "../assets/LogoDark.png";

function Logo() {
    return (
        <>
         {/* Logo */}
            <img src={LogoDark} className="w-[4rem] h-auto" alt="Tanikala Logo" />

            {/* Text */}
            <div className="text-[2.4rem] font-bold text-[#4B3573] text-center md:text-left">
                <NavLink
                to="/"
                className="hover:text-[#4B3573]/80 transition-colors duration-300"
                >
                Tanikala
                </NavLink>
            </div>
        </>
    )
}

export default Logo
