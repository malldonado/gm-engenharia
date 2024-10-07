import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../../images/banner.jpg";

function slideShow() {
  const images = [Image1, Image1, Image1];

  return (
    <div className="w-full h-[100vh] mt-10 max-w-5xl mx-auto">
      <div className="slide-container">
        <Slide>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              <div className="flex items-center justify-center h-[600px]">
                <img className="object-cover w-full h-[600px]" src={image} alt="" />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="text-white mt-8">
        <span className="md:text-[40px] text-[30px]">Architecture Plan</span>
        <p className="mt-4 text-lg">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
    </div>
  );
}

export default slideShow;
