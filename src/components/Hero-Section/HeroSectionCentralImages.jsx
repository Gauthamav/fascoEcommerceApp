import React from 'react';

const HeroSectionCentralImages = ({imgSrc}) => {
  return (
    <div className='max-w-full'>
      <img className='w-full' src={imgSrc} alt="Hero-section-image" />
    </div>
  );
};

export default HeroSectionCentralImages;
