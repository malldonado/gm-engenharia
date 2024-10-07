import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useServices from "../../../hooks/site/useServices";

function Services() {
  const { cards, isMobile, zoomInProperties, handleSlideChange } =
    useServices();

  return (
    <div className="max-w-[1050px] mx-auto right-0 left-0 mt-[100px] md:mt-[200px] px-4 md:px-0">
      <span className="text-white md:flex md:justify-center md:text-[50px] text-[40px] md:mb-4 px-2 md:px-0">
        SERVIÇOS
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
            <div
              key={index}
              className="bg-black/15 h-[450px] relative md:mt-10"
            >
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

export default Services;
