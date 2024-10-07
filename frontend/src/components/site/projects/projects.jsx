import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import useProjects from "../../../hooks/panel/useProjects";

function Projects() {
  const { showDropdown, toggleDropdown, projectsData } = useProjects();

  return (
    <div className="md:w-4/5 w-[90%] mx-auto">
      <div className="min-w-screen font-sans overflow-hidden">
        <div className="w-full lg:w-6/6 overflow-hidden">
          <div className="bg-white rounded my-6">
            <div className="table-container">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-black text-white uppercase text-[10px] md:text-sm leading-normal">
                    <th className="py-3 px-2 md:px-6 text-left">Project</th>
                    <th className="py-3 px-2 md:px-6 text-left">Client</th>
                    <th className="py-3 px-2 md:px-6 text-left">Status</th>
                    <th className="py-3 px-2 md:px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-black text-sm font-light">
                  {projectsData.map((project, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <Link to="/project-panel">
                        <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap cursor-pointer">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <img
                                className="object-cover w-full h-[20px] md:h-[40px]"
                                src={project.image}
                                alt=""
                              />
                            </div>
                            <span className="font-medium text-[8px] md:text-[14px] overflow-hidden">
                              {project.projectName}
                            </span>
                          </div>
                        </td>
                      </Link>
                      <td className="py-3 md:px-6 text-center overflow-hidden">
                        <div className="flex text-[8px] md:text-[14px] items-center justify-center overflow-hidden font-medium">
                          {project.clientName}
                        </div>
                      </td>
                      <td className="py-3 md:px-6 text-center">
                        <span
                          className={`text-[8px] md:text-[12px] text-white py-1 px-2 md:px-3 rounded-full text-xs ${
                            project.status === "Active"
                              ? "bg-green-400"
                              : "bg-red-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>

                      <td className="py-3 md:px-6 text-center overflow-hidden">
                        <div className="flex item-center justify-center overflow-hidden">
                          <Link
                            to="/project-panel"
                            className="w-5 md:mr-2 transform hover:text-[#2563eb] hover:scale-110 cursor-pointer"
                          >
                            <MdEdit className="md:h-5 md:w-5 h-3 w-3" />
                          </Link>
                          <Link
                            to="/project"
                            className="w-5 md:mr-2 transform hover:text-[#2563eb] hover:scale-110 cursor-pointer"
                          >
                            <FaRegEye className="md:h-5 md:w-5 h-3 w-3" />
                          </Link>
                          <div className="w-5 md:mr-2 transform hover:text-[#2563eb] hover:scale-110 cursor-pointer">
                            <LuTrash2 className="md:h-5 md:w-5 h-3 w-3" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
