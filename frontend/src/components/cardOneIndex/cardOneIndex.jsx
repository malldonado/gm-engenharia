import React from "react";
import cardBuilding from "../../images/cardBuilding.jpg";
import houseBuilding from "../../images/cardHouse.jpg";
import { Link } from "react-router-dom";

function cardOneIndex() {
  return (
    <div className="md:flex md:justify-center max-w-[1200px] mx-auto pt-10 md:h-[700px] mb-[130px] md:mb-[200px] md:mt-[100px] mt-[0px]">
      <div className="md:w-[50%] mt-20 md:ml-[90px] px-4 md:px-0 mb-4 md:mb-0">
        <span className="text-white md:text-[60px] text-[40px]">
          SEE MORE <br /> ABOUT OUR <br /> COMPANY
        </span>
        <span className="text-white block mt-4 max-w-[500px] md:text-[20px] opacity-70">
        Established three years ago, we are a civil engineering company driven by a passion for building a sustainable and resilient future. Since the inception of our journey, we have sought to challenge conventional boundaries in engineering...
        </span>
      </div>
      <Link
        to={"/about"}
        className="md:w-[50%] md:flex md:justify-start items-center ml-3 relative w-full"
      >
        <div className="cursor-pointer md:px-0 px-4">
          <img
            className="md:h-[450px] md:w-[350px] h-[450px] object-cover w-full md:object-none"
            src={cardBuilding}
            alt=""
          />
        </div>
        <div className="md:absolute md:bottom-[20px] md:left-[130px] cursor-pointer md:px-0 px-4 mt-4 md:mt-0">
          <img
            className="md:h-[400px] md:w-[320px] h-[450px] object-cover w-full md:object-none"
            src={houseBuilding}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}

export default cardOneIndex;
