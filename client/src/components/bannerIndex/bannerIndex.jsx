import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import BannerImage from "../../images/banner.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function BannerIndex() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    twitter: ""
  });
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const socialMediaResponse = await axios.get("http://localhost:8000/user-update");
        const socialMediaData = socialMediaResponse.data;
        setFormData({
          facebook: socialMediaData.facebook,
          instagram: socialMediaData.instagram,
          twitter: socialMediaData.twitter
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const zoomInProperties = {
    scale: 1.4,
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="bg-black/50 h-[600px] flex">
      <div className="w-[90%] relative">
        <div className="slideshow-container">
          <Slide {...zoomInProperties}>
            <div className="bg-black/15 h-[600px] w-full z-100 relative">
              <div className="each-slide">
                <div className="flex items-center justify-center bg-cover bg-center h-[600px] overflow-hidden">
                  <img
                    className="z-[-1] relative object-cover w-full md:h-full h-[600px]"
                    src={BannerImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div className="w-[10%] bg-black h-full">
        <div className="h-full flex justify-around flex-col items-center my-auto">
          <span className="text-white text-[20px] writing-vertical-rl">
            GTM ENGENHARIA
          </span>
          <div>
            <a
              target="_black"
              href={formData.facebook}
              className="flex justify-center items-center mb-10 cursor-pointer"
            >
              <FaFacebookF className="fill-white hover:fill-[#af9155] text-[20px]" />
            </a>
            <a
              target="_black"
              href={formData.instagram}
              className="flex justify-center items-center mb-10 cursor-pointer"
            >
              <FaInstagram className="fill-white hover:fill-[#af9155] text-[20px]" />
            </a>
            <a
              target="_black"
              href={formData.twitter}
              className="flex justify-center items-center mb-10 cursor-pointer"
            >
              <FaTwitter className="fill-white hover:fill-[#af9155] text-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerIndex;