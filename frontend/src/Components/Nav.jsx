import { NavLink } from "react-router-dom"

function Nav({ link, name, activeColor, hoverColor }) {
    return (
            <NavLink
                to={link}
                className={({ isActive }) =>
                `
                px-4 py-2 rounded-full transition-all duration-300 font-semibold text-[1.2rem]
                ${
                    isActive
                    ? `${activeColor} backdrop-blur-md text-white shadow-sm`
                    : `hover:backdrop-blur-sm hover:text-white ${hoverColor}`
                }
                `
                }
            >
                {name}
            </NavLink>
    )
}

export default Nav