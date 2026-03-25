import React from 'react';


const HeroSectionSideImages = ({imgSrc}) => {
  return (
    <div className="bg-heroBg h-full lg:flex  hidden w-[392px] items-end justify-center  rounded-lg">
      <img  src={imgSrc} className="object-cover " alt="" />
    </div> 
  );
};

export default HeroSectionSideImages;
 