import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoDark from "../assets/LogoDark.png";

function NavBar() {
  const navigate = useNavigate();

  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);
  return (
    <div>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white backdrop-blur-md px-4 sm:px-6 md:px-8 py-4 shadow-md">

      <div className="flex items-center gap-3"> 
          
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

        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-[#4B3573]/80 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-[1.2rem] bg-[#E9BFD7] backdrop-blur-md text-white shadow-sm"
                  : "text-[1.2rem] hover:bg-[#E9BFD7] hover:backdrop-blur-sm hover:text-white"
              }
              `
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Community"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-[1.2rem] bg-[#E2BADB] backdrop-blur-md text-white shadow-sm"
                  : "text-[1.2rem] hover:bg-[#E2BADB] hover:backdrop-blur-sm hover:text-white"
              }
              `
            }
          >
            Community
          </NavLink>

          <NavLink
            to="/Resources"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-[1.2rem] bg-[#DDB7E1] backdrop-blur-md text-white shadow-sm"
                  : "text-[1.2rem] hover:bg-[#DDB7E1] hover:backdrop-blur-sm hover:text-white"
              }
              `
            }
          >
            Resources
          </NavLink>

          <NavLink
            to="/Contacts"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-[1.2rem] bg-[#D3B3E8] backdrop-blur-md text-white shadow-sm"
                  : "text-[1.2rem] hover:bg-[#D3B3E8] hover:backdrop-blur-sm hover:text-white"
              }
              `
            }
          >
            Contacts
          </NavLink>

                    <NavLink
            to="/About"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-[1.2rem] bg-[#C7B3EE] backdrop-blur-md text-white shadow-sm"
                  : "text-[1.2rem] hover:bg-[#C7B3EE] hover:backdrop-blur-sm hover:text-white"
              }
              `
            }
          >
            About
          </NavLink>

          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-[1.2rem] bg-[#B9B3F4] backdrop-blur-md text-[white] shadow-sm"
                  : "text-[1.2rem] hover:bg-[#B9B3F4] hover:backdrop-blur-sm hover:text-white"
              }
              `
            }
          >
            Account
          </NavLink>


          {/* <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              navigate(e.target.value);
            }}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#6B4F4F] cursor-pointer"
          >
            <option value="/">Home</option>
            <option value="/SignIn">Sign In</option>
            <option value="/Profile">Profile (To be Deleted)</option>
          </select> */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
