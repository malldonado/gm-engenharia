import React, { useState } from "react";
import Image from "../../images/banner.jpg";
import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";

function projectsPanel() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="min-w-screen font-sans overflow-hidden">
        <div className="w-full lg:w-6/6 overflow-hidden">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-black text-white uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Project</th>
                  <th className="py-3 px-6 text-center">Client</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-black text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="object-cover w-full h-[40px]"
                          src={Image}
                          alt=""
                        />
                      </div>
                      <span className="font-medium overflow-hidden">
                        Architecture Plan
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center overflow-hidden">
                    <div className="flex items-center justify-center overflow-hidden font-medium">
                      Mercado Bom Dia
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-green-400 text-white py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center overflow-hidden">
                    <div className="flex item-center justify-center overflow-hidden">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <FaRegEye className="h-4 w-4" />
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <MdEdit className="h-4 w-4" />
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <LuTrash2 className="h-4 w-4" />
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Outros itens da tabela aqui */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectsPanel;
