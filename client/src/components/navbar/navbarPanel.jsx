import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import LogoIndex from "../../images/logo.svg";

function navbarPanel() {
  return (
    <div className="bg-black">
      <div className="h-16 flex mx-auto px-2 sm:px-6 lg:px-8 flex-wrap justify-between items-center overflow-hidden">
        <Link to="/panel">
          <img className="h-[30px] my-auto cursor-pointer" src={LogoIndex} />
        </Link>
        <span className="overflow-hidden text-white mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
          Geovane Monteiro
          <IoMdArrowDropdown className="ml-3 text-[10px]" />
        </span>
      </div>
    </div>
  );
}

export default navbarPanel;
