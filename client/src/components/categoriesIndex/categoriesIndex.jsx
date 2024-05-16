import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";
import Card1 from "../../images/cards/1.png";
import Card2 from "../../images/cards/2.png";
import Card3 from "../../images/cards/3.png";
import Card4 from "../../images/cards/4.png";
import Card5 from "../../images/cards/5.png";
import Card6 from "../../images/cards/6.png";
import "react-slideshow-image/dist/styles.css";

const cards = [Card1, Card2, Card3, Card4, Card5, Card6];

function OurProjectsIndex() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const zoomInProperties = {
    scale: 1.4,
    duration: 5000,
  };

  const handleSlideChange = (previousIndex, nextIndex) => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="max-w-[1050px] mx-auto right-0 left-0 mt-[100px] md:mt-[200px] px-4 md:px-0">
      <span className="text-white md:flex md:justify-center md:text-[50px] text-[40px] md:mb-4 px-2 md:px-0">
        SERVICES
      </span>
      {!isMobile ? (
        <Slide {...zoomInProperties} onChange={handleSlideChange}>
          {Array(Math.ceil(cards.length / 3))
            .fill()
            .map((_, slideIndex) => (
              <div key={slideIndex} className="grid grid-cols-3">
                {cards
                  .slice(slideIndex * 3, slideIndex * 3 + 3)
                  .map((card, index) => (
                    <div key={index} className="bg-black/15 h-[450px] relative">
                      <div className="flex items-center justify-center h-full mx-2">
                        <img
                          className="object-cover w-full"
                          src={card}
                          alt={`Card ${slideIndex * 3 + index + 1}`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </Slide>
      ) : (
        <Slide {...zoomInProperties} onChange={handleSlideChange}>
          {cards.map((card, index) => (
            <div key={index} className="bg-black/15 h-[450px] relative md:mt-10">
              <div className="flex items-center justify-center h-full mx-2">
                <img
                  className="object-cover w-full"
                  src={card}
                  alt={`Card ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slide>
      )}
    </div>
  );
}

export default OurProjectsIndex;
