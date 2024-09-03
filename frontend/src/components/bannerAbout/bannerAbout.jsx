import React from "react";
import useAbout from "../../hooks/panel/about/useAbout";

function BannerAbout() {
  const {
    title,
    text,
    file,
    renderParagraphs
  } = useAbout();

  return (
    <div className="max-w-7xl md:flex md:justify-center mx-auto md:mt-20 mt-10 items-start px-4 md:px-0">
      {file && (
        <img
          className="md:h-[400px] md:w-[400px] object-cover md:mr-10 w-full h-full"
          src={`https://gtm-backend.vercel.app/uploads/${file}`}
          alt="About Banner"
        />
      )}
      <div className="md:w-[50%] mt-10 md:mt-0">
        <div className="text-white">
          {title && text ? (
            <>
              <h1 className="text-4xl overflow-hidden">{title}</h1>
              <br />
              {renderParagraphs(text)}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BannerAbout;
