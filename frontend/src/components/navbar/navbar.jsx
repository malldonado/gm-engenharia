// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoIndex from "../../images/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black">
      <div className="h-16 flex mx-auto px-2 md:px-6 lg:px-8 flex-wrap justify-between items-center overflow-hidden">
        <Link to="/">
          <img
            className="h-[30px] my-auto cursor-pointer"
            src={LogoIndex}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex">
            {/* Menu items */}
            <MenuItem label="Home" />
            {/* <MenuItem label="Services" /> */}
            <MenuItem label="Projects" />
            <MenuItem label="About us" />
            <MenuItem label="Contact" />
            <MenuItem label="Login" />
          </div>
          <div className="md:hidden">
            {/* Hamburger Menu */}
            <span className="cursor-pointer" onClick={toggleMenu}>
              <RxHamburgerMenu className="ml-3 text-[20px] text-white" />
            </span>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col justify-end bg-black text-left w-full">
            {/* Menu items */}
            <MenuItem label="Home" /> <MenuItem label="Projects" />
            <MenuItem label="About us" />
            <MenuItem label="Contact" />
            <MenuItem label="Login" />
          </div>
        </div>
      )}
    </div>
  );
}

// Componente para os itens do menu
function MenuItem({ label }) {
  return (
    <Link to={`/${label.toLowerCase().split(" ")[0]}`}>
      <span className="overflow-hidden md:justify-end text-lg md:text-[16px] justify-started md:mb-0 mb-3 pl-3 md:pl-0 w-full text-white mr-10 flex items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
        {label}
        <IoMdArrowDropdown className="ml-3 text-[10px] md:block hidden" />
      </span>
    </Link>
  );
}

export default Navbar;
