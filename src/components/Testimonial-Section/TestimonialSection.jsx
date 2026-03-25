import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialSectionData } from '../../utils/testimonialSectionData';
import Button from '../Button.jsx/Button';
import LeftArrowImage from '../../assets/Deals-Section-Images/LeftArrow.svg';
import RightArrowImage from '../../assets/Deals-Section-Images/RightArrow.svg';
import SectionHeading from '../SectionsHeading/SectionHeading';
export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonialSectionData.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex(prev => (prev === testimonialSectionData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='bg-dealsBg pt-10 sm:pt-24'>
      <SectionHeading
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis'}
        heading={'This Is What Our Customers Say'}></SectionHeading>
      <div className="w-full overflow-hidden pb-32  pt-16 ">
        <div className="relative max-w-[400px]  mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonialSectionData.map((data, index) => (
              <TestimonialCard key={data.id} index={index} currentIndex={currentIndex} data={data}></TestimonialCard>
            ))}
          </div>
          <div className="relative right-0 left-5/12 top-24 flex gap-3">
            <Button
              onClick={handlePrevSlide}
              children={<img className="object-cover w-[8px]" src={LeftArrowImage}></img>}
              className={'py-3 px-4 bg-white cursor-pointer rounded-full shadow-2xl '}></Button>
            <Button
              onClick={handleNextSlide}
              children={<img className="object-cover w-[8px]" src={RightArrowImage}></img>}
              className={'py-3 px-4 bg-white cursor-pointer rounded-full shadow-2xl'}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
