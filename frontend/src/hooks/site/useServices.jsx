import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card1 from "../../images/cards/1.png";
import Card2 from "../../images/cards/2.png";
import Card3 from "../../images/cards/3.png";
import Card4 from "../../images/cards/4.png";
import Card5 from "../../images/cards/5.png";
import Card6 from "../../images/cards/6.png";
import Card7 from "../../images/cards/7.png";
import Card8 from "../../images/cards/8.png";
import Card9 from "../../images/cards/9.png";
import "react-slideshow-image/dist/styles.css";

const cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9];

function useServices() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const zoomInProperties = {
    scale: 1.4,
    duration: 5000,
  };

  const handleSlideChange = (previousIndex, nextIndex) => {
    setCurrentIndex(nextIndex);
  };
  return {
    currentIndex,
    cards,
    isMobile,
    zoomInProperties,
    handleSlideChange,
}
}

export default useServices;