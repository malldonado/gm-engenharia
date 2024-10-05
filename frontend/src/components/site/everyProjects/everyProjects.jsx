import Image from "../../../images/banner.jpg";
import { Link } from "react-router-dom";

function everyProjects() {
  return (
    <div className="max-w-[1000px] mx-auto mt-14 px-4 md:px-0">
      <Link to={'/project'} className="md:flex md:justify-between cursor-pointer md:items-center mt-10 w-full">
        <div className="md:w-[50%] md:mr-[30px]">
          <img className="h-[300px] w-full object-cover" src={Image} alt="" />
        </div>
        <div className="text-white md:w-[50%] md:ml-[30px] mt-4 md:mt-0">
          <span className="md:text-[40px] text-[30px]">Architecture Plan</span>
          <p className="mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            View More
          </Link>
        </div>
      </Link>
    </div>
  )
}

export default everyProjects
