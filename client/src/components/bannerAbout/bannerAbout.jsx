import React, { useState, useEffect } from "react";
import axios from "axios";

function BannerAbout() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/about/latest")
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest data:", error);
      });
  }, []);

  const renderParagraphs = (text) => {
    const paragraphs = text.split("\n");
    return paragraphs.map((paragraph, index) => (
      <p key={index} style={{ marginBottom: "5px" }}>{paragraph}</p>
    ));
  };

  return (
    <div className="max-w-7xl md:flex md:justify-center mx-auto md:mt-20 mt-10 items-start px-4 md:px-0">
      {aboutData &&
        aboutData.file && (
          <img
            className="md:h-[400px] md:w-[400px] object-cover md:mr-10 w-full h-full"
            src={`http://localhost:8000/uploads/${aboutData.file}`}
            alt=""
          />
        )}
      <div className="md:w-[50%] mt-10 md:mt-0">
        <div className="text-white">
          {aboutData ? (
            <>
              <h1 className="text-4xl overflow-hidden">
                {aboutData.title}
              </h1>
              <br />
              {renderParagraphs(aboutData.text)}
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
