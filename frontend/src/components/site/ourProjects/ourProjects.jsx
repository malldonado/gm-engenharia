import React from "react";
import Card from "../../../images/cardBuilding.jpg";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";
import "react-slideshow-image/dist/styles.css";

function OurProjects() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const zoomInProperties = {
    scale: 1.4,
  };

  return (
    <div className="max-w-[1050px] mx-auto right-0 left-0 mt-[70px] md:mt-[200px] px-4 md:px-0">
      <span className="text-white md:flex md:justify-center md:text-[50px] text-[40px] mb-4">
        OUTROS PROJETOS RECENTES
      </span>
      <p className="text-white md:flex md:justify-center md:text-[18px] normal md:text-center leading-[1.5] opacity-70 md:mb-10 mb-8">
        Nós se destacado em projetos inovadores e sustentáveis, abrangendo desde a execução <br /> de grandes obras de infraestrutura até reformas residenciais e comerciais de médio porte. 
      </p>
      {isMobile ? (
        <Slide {...zoomInProperties}>
          <div className="bg-black/15 h-[450px] w-full z-100 relative">
            <div className="each-slide">
              <div className="flex items-center justify-center bg-cover bg-center h-[450px] overflow-hidden">
                <img
                  className="z-[-1] relative object-cover w-full"
                  src={Card}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slide>
      ) : (
        <div className="md:flex mx-5 justify-between p-0">
          <div className="md:w-[32%] cursor-pointer">
            <img
              className="w-[400px] h-[450px] object-cover"
              src={Card}
              alt=""
            />
            <span></span>
          </div>
          <div className="md:w-[32%] cursor-pointer">
            <img
              className="w-[400px] h-[450px] object-cover"
              src={Card}
              alt=""
            />
            <span></span>
          </div>
          <div className="md:w-[32%] cursor-pointer">
            <img
              className="w-[400px] h-[450px] object-cover"
              src={Card}
              alt=""
            />
            <span></span>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center">
        <Link
          to={"/projects"}
          className="h-[50px] w-[160px] text-white bg-[#af9155] mt-10 cursor-pointer justify-center items-center flex hover:bg-[#7d5e21] transition duration-150 ease-in-out"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}

export default OurProjects;