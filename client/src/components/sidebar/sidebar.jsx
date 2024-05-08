import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import {
  HiMiniWallet,
  HiMiniRectangleStack,
  HiMiniSquare3Stack3D,
} from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { IoBusiness } from "react-icons/io5";

import "../../App.css";

function Sidebar() {
  const location = useLocation();

  const items = [
    {
      id: 1,
      label: "Postagens",
      route: "/panel",
      emoji: <HiMiniWallet className="w-5 h-5 text-white mr-2" />,
    },
    {
      id: 2,
      label: "Services",
      route: "/services-panel",
      emoji: (
        <HiMiniRectangleStack className="w-5 h-5 text-white mr-2" />
      ),
    },
    {
      id: 3,
      label: "Projects",
      route: "/projects-panel",
      emoji: (
        <HiMiniSquare3Stack3D className="w-5 h-5 text-white mr-2" />
      ),
    },
    {
      id: 4,
      label: "About",
      route: "/about-panel",
      emoji: <IoBusiness className="w-5 h-5 text-white mr-2" />,
    },
    {
      id: 5,
      label: "Settings",
      route: "/settings-panel",
      emoji: <IoMdSettings className="w-5 h-5 text-white mr-2" />,
    },
  ];

  return (
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
  );
}

export default Sidebar;