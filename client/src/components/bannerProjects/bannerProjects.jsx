import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRightSquare } from "react-icons/bs";
import BannerImage from "../../images/banner.jpg";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useState, useEffect } from "react";

function bannerProjects() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/service-images");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="bg-black/50 auto flex">
      <div className="w-full relative">
        <div className="bg-black/50 w-full z-100 relative">
          <img
            className="z-[-1] relative object-cover h-[300px] w-full"
            src={BannerImage}
          />
          <div className="mx-auto absolute bottom-[70px] h-auto md:left-[10%] px-4 md:px-0">
            <div className="w-full h-full">
              <div className="md:text-[70px] text-[50px] font-medium text-white tracking-[5px] leading-[6rem] overflow-hidden">
                PROJECTS
              </div>
              <p className="text-[20px] text-white opacity-90 mt-5 w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bannerProjects
