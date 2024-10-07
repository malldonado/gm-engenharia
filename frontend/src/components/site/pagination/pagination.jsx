import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function pagination() {
  return (
    <div className="flex justify-center mx-auto max-w-[1000px] my-20">
      <nav>
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-transparent overflow-hidden"
            >
              <IoIosArrowBack className="text-[20px] mr-5 text-white h-[30px] w-[30px] p-2 hover:bg-[#af9155] rounded-[50%]" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-transparent text-[16px] mr-5"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-transparent text-[16px] mr-5"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-transparent text-[16px] mr-5 "
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-transparent overflow-hidden"
            >
              <IoIosArrowForward className="text-[20px] mr-5 text-white h-[30px] w-[30px] p-2 hover:bg-[#af9155] rounded-[50%]" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default pagination;
