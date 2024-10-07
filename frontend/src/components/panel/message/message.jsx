import { FaRegEye } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useMessage from "../../../hooks/panel/useMessage";

function Message() {
  const {
    projectsData,
    selectedContact,
    popupOpen,
    openPopup,
    closePopup,
    deleteProject,
  } = useMessage();

  return (
    <div className="md:w-4/5 w-[90%] mx-auto">
      <div className="min-w-screen font-sans overflow-hidden">
        <div className="w-full lg:w-6/6 overflow-hidden">
          <div className="bg-white rounded my-6">
            <div className="table-container">
              <table className="min-w-max w-full table-auto">
                {/* Table Header */}
                <thead>
                  <tr className="bg-black text-white uppercase text-[10px] md:text-sm leading-normal">
                    <th className="py-3 px-2 md:px-6 text-left">Date</th>
                    <th className="py-3 px-2 md:px-6 text-left">Name</th>
                    <th className="py-3 px-2 md:px-6 text-left">Email</th>
                    <th className="py-3 px-2 md:px-6 text-left">Phone</th>
                    <th className="py-3 px-2 md:px-6 text-left">Actions</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="text-black text-sm font-light">
                  {projectsData.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Não há contatos enviados.
                      </td>
                    </tr>
                  ) : (
                    projectsData.map((contact, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap cursor-pointer">
                          <Link
                            to="/project-panel"
                            className="font-medium text-[8px] md:text-[14px] overflow-hidden"
                          >
                            {new Date(contact.createdAt).toLocaleString(
                              "pt-BR"
                            )}
                          </Link>
                        </td>
                        <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap cursor-pointer">
                          <Link
                            to="/project-panel"
                            className="font-medium text-[8px] md:text-[14px] overflow-hidden"
                          >
                            {contact.name}
                          </Link>
                        </td>
                        <td className="py-3 md:px-6 text-left overflow-hidden">
                          <div className="flex text-[8px] md:text-[14px] items-center justify-start overflow-hidden font-medium">
                            {contact.email}
                          </div>
                        </td>
                        <td className="py-3 md:px-6 text-center overflow-hidden">
                          <div className="flex text-[8px] md:text-[14px] items-center justify-start overflow-hidden font-medium">
                            {contact.phone}
                          </div>
                        </td>
                        <td className="py-3 md:px-6 text-center overflow-hidden">
                          <div className="flex item-center justify-start overflow-hidden">
                            {/* Open Popup */}
                            <div
                              className="w-5 md:mr-2 transform hover:text-[#2563eb] hover:scale-110 cursor-pointer"
                              onClick={() => openPopup(contact)}
                            >
                              <FaRegEye className="md:h-5 md:w-5 h-3 w-3" />
                            </div>
                            {/* Delete Contact */}
                            <div
                              className="w-5 md:mr-2 transform hover:text-[#2563eb] hover:scale-110 cursor-pointer"
                              onClick={() => deleteProject(contact._id)}
                            >
                              <LuTrash2 className="md:h-5 md:w-5 h-3 w-3" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md relative w-[500px]">
            <h2 className="text-lg font-bold mb-4">Contact Details</h2>
            <p>Name: {selectedContact.name}</p>
            <p>Email: {selectedContact.email}</p>
            <p>Phone: {selectedContact.phone}</p>
            <p>Message: {selectedContact.message}</p>
            <IoCloseSharp
              className="absolute text-[25px] top-[15px] right-3 text-black cursor-pointer"
              onClick={closePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
