import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Logo from "./Logo";

function NavBar() {

const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("token")
);
  const navigate = useNavigate();
  const navcontents = [
    { name: "Home", link: "/" },
    { name: "Community", link: "/Community" },
    { name: "Resources", link: "/Resources" },
    { name: "Contacts", link: "/Contacts" },
    { name: "About", link: "/About" },
    {
      name: isLoggedIn ? "Profile" : "Login",
      link: isLoggedIn ? "/profile" : "/signin",
    },
  ];

  // Matched background color combinations derived from your community tags
  const navColors = [
    { active: "bg-[#E9BFD7]", hover: "hover:bg-[#E9BFD7]" },
    { active: "bg-[#E2BADB]", hover: "hover:bg-[#E2BADB]" },
    { active: "bg-[#DDB7E1]", hover: "hover:bg-[#DDB7E1]" },
    { active: "bg-[#D1B3E9]", hover: "hover:bg-[#D1B3E9]" },
    { active: "bg-[#C9B3EC]", hover: "hover:bg-[#C9B3EC]" }, 
    { active: "bg-[#B9B3F4]", hover: "hover:bg-[#B9B3F4]" },
  ];

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white backdrop-blur-md px-4 sm:px-6 md:px-8 py-4 shadow-md">

      <div className="flex items-center gap-3"> 
          
        <Logo />
        
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-[#4B3573]/80 font-medium">
          
          {navcontents.map((item, index) => {
            const colors = navColors[index % navColors.length];
            return (
              <Nav 
                key={index} 
                link={item.link} 
                name={item.name} 
                activeColor={colors.active}
                hoverColor={colors.hover}
              />
            );
          })}

        </div>
      </nav>
    </div>
  );
}

export default NavBar;