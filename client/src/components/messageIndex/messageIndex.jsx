import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function messageIndex() {
  return (
    <div className="max-w-[1010px] md:flex md:justify-center md:items-top text-white mx-auto mt-[50px] md:mt-[200px] px-4 md:px-0">
      <div className="md:w-[45%] md:pr-5 ml-4 xl:ml-0">
        <span className="text-center md:text-[60px] text-[40px] leading-tight">
          {"LET'S DISCUSS"}
          <br /> NEXT PROJECT
        </span>
        <span className="block md:mt-5 md:text-[18px] opacity-70 mb-10 md:mb-0 mt-4">
          Ready to move forward with your construction project? Send us an email
          today to start turning your vision into reality, with expertise and
          commitment.
        </span>
      </div>
      <div className="md:w-[50%]">
        <form className="max-w-[100%] md:ml-5" action="">
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your email address"
          />
          <input
            type="phone"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your mobile number"
          />
          <textarea
            className="w-full h-[150px] bg-transparent outline-none border-2 border-[#bbb9b9] p-2 resize-none placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your message"
          />
          <button className="flex justify-center items-center text-white bg-[#af9155] hover:bg-[#7d5e21] transition duration-150 ease-in-out h-[50px] w-[160px] mt-5">
            Send Mail
            <IoMdArrowForward />
          </button>
        </form>
      </div>
    </div>
  );
}

export default messageIndex;
