import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      {/* NAVBAR */}
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 md:mb-20 bg-white/30 backdrop-blur-md rounded-2xl px-4 sm:px-6 md:px-8 py-4 shadow-md">
        <div className="text-2xl font-bold text-[#6B4F4F] text-center md:text-left">
          <NavLink
            to="/"
            className="hover:text-[#6B4F4F]/80 transition-colors duration-300"
          >
            Tanikala
          </NavLink>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-[#6B4F4F]/80 font-medium">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "bg-white/20 backdrop-blur-md text-[#6B4F4F] shadow-sm"
                  : "hover:bg-white/10 hover:backdrop-blur-sm hover:text-[#6B4F4F]"
              }
              `
            }
          >
            Community
          </NavLink>

          <NavLink
            to="/safespaces"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "bg-white/20 backdrop-blur-md text-[#6B4F4F] shadow-sm"
                  : "hover:bg-white/10 hover:backdrop-blur-sm hover:text-[#6B4F4F]"
              }
              `
            }
          >
            Safe Spaces
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "bg-white/20 backdrop-blur-md text-[#6B4F4F] shadow-sm"
                  : "hover:bg-white/10 hover:backdrop-blur-sm hover:text-[#6B4F4F]"
              }
              `
            }
          >
            Resources
          </NavLink>
          <select
            onChange={(e) => navigate(e.target.value)}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#6B4F4F] cursor-pointer"
          >
            <option value="/">Home</option>
            <option value="/SignIn">Sign In</option>
            <option value="/Profile">Profile (To be Deleted)</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
