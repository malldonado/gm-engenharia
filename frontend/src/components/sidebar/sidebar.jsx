import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiMiniWallet, HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoBusiness, IoArrowBackSharp, IoCloseSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMessageFill } from "react-icons/ri";
import "../../App.css";

function Sidebar() {
  const location = useLocation();
  const meRoute = location.pathname.split("-")[0] === "/project";
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false); // estado para controlar a abertura e fechamento da barra lateral

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const items = meRoute
    ? [
        {
          id: 1,
          label: "Project",
          route: "/project-panel",
          emoji: <FaFileAlt className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 2,
          label: "Back",
          route: "/projects-panel",
          emoji: <IoArrowBackSharp className="w-5 h-5 text-white mr-2" />,
        },
      ]
    : [
        {
          id: 1,
          label: "Posts",
          route: "/panel",
          emoji: <HiMiniWallet className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 2,
          label: "Projects",
          route: "/projects-panel",
          emoji: <HiMiniSquare3Stack3D className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 3,
          label: "About",
          route: "/about-panel",
          emoji: <IoBusiness className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 4,
          label: "Message",
          route: "/message-panel",
          emoji: <RiMessageFill className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 5,
          label: "Settings",
          route: "/settings-panel",
          emoji: <IoMdSettings className="w-5 h-5 text-white mr-2" />,
        },
      ];

  return (
    <>
      {!isMobile ? (
        <div className="p-6 h-full w-[20%] mt-2">
          <div className="max-w-[300px] h-full rounded-[10px] border-[1px] bg-white panel-cards">
            <div className="md:flex">
              <ul className="flex-column space-y space-y-1 text-sm font-medium text-white md:me-4 mb-4 md:mb-0 w-full mx-4 mt-5">
                {items.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.route}
                      className={
                        location.pathname === item.route
                          ? "inline-flex items-center px-4 py-3 my-1 text-white bg-[#000] rounded-lg active w-full dark:bg-blue-600"
                          : "inline-flex items-center px-4 py-3 my-1 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {item.emoji}
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <button
            className={`absolute w-10 h-10 text-2xl m-auto left-0 z-50 bg-black text-white p-2 ${
              isOpen ? "top-[0px] left-64 bg-red-500 transition-all duration-300" : "top-[12px] transition-all duration-300"
            }`}
            onClick={toggleSidebar}
          >
            {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>

          <div
            className={`z-40 fixed top-0 left-0 bottom-0 bg-black text-white w-64 overflow-y-auto transition-transform duration-300 ease-in-out ${
              isOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <div className="p-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.route}
                      className="flex items-center py-2 px-4 rounded-md hover:bg-gray-700"
                      activeClassName="bg-gray-900"
                    >
                      <span className="mr-2">{item.emoji}</span>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
