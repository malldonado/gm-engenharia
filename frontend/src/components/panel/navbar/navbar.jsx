
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import LogoIndex from "../../../images/logo.svg";
import { IoIosLogOut } from "react-icons/io";
import useNavbar from "../../../hooks/panel/useNavbar";

function Navbar() {

  const {isSubnavOpen, userFirstName, handleSubnavToggle, handleLogout} = useNavbar();

  return (
    <div className="bg-black">
      <div className="ml-12 md:ml-0 h-16 flex mx-auto px-2 sm:px-6 lg:px-8 flex-wrap justify-between items-center overflow-hidden">
        <Link className="w-[70%] sm:w-auto" to="/panel">
          <img
            className="h-[24px] md:h-[30px] my-auto cursor-pointer"
            src={LogoIndex}
            alt="Logo"
          />
        </Link>
        <span
          className="overflow-hidden text-white text-sm md:text-[16px] md:mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#f6b93b] transition duration-150 ease-out hover:ease-in w-[30%] sm:w-auto"
          onClick={handleSubnavToggle}
        >
          {userFirstName}
          <IoMdArrowDropdown className="md:ml-3 ml-1 text-[20px]" />
        </span>

        {isSubnavOpen && (
          <div className="absolute bg-black hover:bg-[#2563eb] md:mt-[120px] mt-[115px] md:right-14 right-0 py-2 w-32 px-2 shadow-lg z-10">
            <Link
              to="/"
              className="px-4 py-2 text-white w-full text-left flex cursor-pointer"
              onClick={handleLogout}
            >
              Logout
              <IoIosLogOut className="text-white text-[24px] ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
