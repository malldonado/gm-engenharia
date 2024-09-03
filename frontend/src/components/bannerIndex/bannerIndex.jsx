import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useBanner from "../../hooks/panel/home/useBanner";
import React from "react";

function BannerIndex() {
  const { data, formData, zoomInProperties, isLoading, error } = useBanner();

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
            {data.map((item, index) => (
              <div className="each-slide" key={index}>
                <div className="flex items-center justify-center bg-cover bg-center h-[600px] overflow-hidden relative">
                  {item.title && (
                    <h1 className="text-[#f7e1b4] font-bold text-7xl absolute overflow-hidden bottom-10 left-10">
                      {item.title}
                    </h1>
                  )}
                  {item.image && (
                    <img
                      className="z-[-1] relative object-cover w-full md:h-full h-[600px]"
                      src={`https://gtm-backend.vercel.app/uploads/${item.image}`}
                      alt=""
                    />
                  )}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>

      <div className="w-[10%] bg-black h-full">
        <div className="h-full flex justify-around flex-col items-center my-auto">
          <span className="text-white text-[20px] writing-vertical-rl">
            GTM ENGENHARIA
          </span>
          <div>
            {Object.entries(formData).map(([key, value]) => (
              <a
                key={key}
                target="_blank"
                rel="noreferrer"
                href={value}
                className="flex justify-center items-center mb-10 cursor-pointer"
              >
                {key === "facebook" && (
                  <FaFacebookF className="fill-white hover:fill-[#af9155] text-[20px]" />
                )}
                {key === "instagram" && (
                  <FaInstagram className="fill-white hover:fill-[#af9155] text-[20px]" />
                )}
                {key === "twitter" && (
                  <FaTwitter className="fill-white hover:fill-[#af9155] text-[20px]" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerIndex;
