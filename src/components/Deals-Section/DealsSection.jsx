import React from 'react';
import DealsTextSection from './DealsTextSection';
import { ImageSlider } from './SliderSection';

const DealsSection = () => {
  return (
    <div className="w-full bg-dealsBg relative md:py-0   pb-24 ">
      <div className=" flex  md:w-[85%] max-w-[1440px] ml-auto  w-full  md:flex-row items-center  flex-col gap-20   py-20">
        <DealsTextSection></DealsTextSection>
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
};

export default DealsSection;
