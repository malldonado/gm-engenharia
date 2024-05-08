import React from "react";
import Card from "../../images/1.png";
import Card1 from "../../images/2.png";
import Card2 from "../../images/3.png";
import { Link } from "react-router-dom";

function categoriesIndex() {
  return (
    <div className="max-w-[1200px] bg-black mx-auto mt-[150px] mb-[70px] md:flex md:justify-center md:items-center h-auto px-4 md:px-0">
      <Link to={'/services'} className="md:w-[30%] md:ml-[50px] mb-4 md:mb-0">
        <img src={Card} className="md:w-[300px] md:h-[350px] cursor-pointer" alt="" />
      </Link>
      <Link to={'/services'} className="md:w-[30%] mb-4 md:mb-0">
        <img
          src={Card1}
          className="md:w-[300px] md:h-[350px] cursor-pointer"
          alt=""
        />
      </Link>
      <Link to={'/services'} className="md:w-[30%]">
        <img
          src={Card2}
          className="md:w-[300px] md:h-[350px] cursor-pointer"
          alt=""
        />
      </Link>
    </div>
  );
}

export default categoriesIndex;
