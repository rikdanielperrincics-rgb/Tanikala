import { NavLink } from "react-router-dom"

function Nav({ link, name } ) {
    return (
            <NavLink
                to={link}
                className={({ isActive }) =>
                `
                px-4 py-2 rounded-full transition-all duration-300 font-semibold
                ${
                    isActive
                    ? "text-[1.2rem] bg-[#E9BFD7] backdrop-blur-md text-white shadow-sm"
                    : "text-[1.2rem] hover:bg-[#E9BFD7] hover:backdrop-blur-sm hover:text-white"
                }
                `
                }
            >
                {name}
            </NavLink>
    )
}

export default Nav
