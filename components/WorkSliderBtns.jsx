"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles, onClick }) => {
  const swiper = useSwiper();

  const handlePrevClick = () => {
    swiper.slidePrev();
    onClick();
  };

  const handleNextClick = () => {
    swiper.slideNext();
    onClick();
  };

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrevClick}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={handleNextClick}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
