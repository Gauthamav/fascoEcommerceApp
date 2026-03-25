import React, { useState } from 'react';
import { sliderImagesData } from '../../utils/sliderData';
import LeftArrowImage from '../../assets/Deals-Section-Images/LeftArrow.svg';
import RightArrowImage from '../../assets/Deals-Section-Images/RightArrow.svg';
import Button from '../Button.jsx/Button';

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex(prev => (prev >= sliderImagesData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? sliderImagesData.length - 1 : prev - 1));
  };

  return (
    <div className="w-9/12 flex flex-col items-center justify-center  overflow-x-hidden  pl-20 ">
      <div
        className="flex gap-8 w-full h-full   items-center justify-start transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 250}px)` }}>
        {sliderImagesData.map((image, index) => (
          <img
            key={image.id}
            src={image.name}
            alt={`Slide ${index + 1}`}
            className={`w-[500px] h-[350px]  object-cover transition-all ease-in-out duration-850 ${
              index === currentIndex ? 'md:scale-115 scale-100 ' : 'md:scale-90 scale-60 mb-24 '
            }`}
          />
        ))}
      </div>

      <div className="absolute md:bottom-16  bottom-5 row gap-5 left-5/12 pb-12 md:pb-0">
        <Button
          onClick={handlePrevSlide}
          children={<img className="object-cover w-[8px]" src={LeftArrowImage}></img>}
          className={'py-3 px-4 bg-white cursor-pointer rounded-full shadow-2xl'}></Button>
        <Button
          onClick={handleNextSlide}
          children={<img className="object-cover  w-[8px]" src={RightArrowImage}></img>}
          className={'py-3 px-4 bg-white cursor-pointer rounded-full shadow-2xl'}></Button>
      </div>

      <div className="row gap-4 absolute md:bottom-13 md:left-[79.16%] bottom-4 left-5/12 pb-4 md:pb-0 ">
        {sliderImagesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2   rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-800 ring-1  ring-black ring-offset-4 ring-offset-white' : 'bg-gray-400 '
            }`}></button>
        ))}
      </div>
    </div>
  );
};
