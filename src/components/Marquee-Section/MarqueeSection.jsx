import React from 'react';
import { marqueeItemsData } from '../../utils/marqueeData';

export const MarqueeSection = () => {
  return (
    <div className=" w-full wrapper overflow-x-hidden  pb-24 pt-10">
      <div className='marquee row gap-12'>
        {marqueeItemsData.map(image => (
          <img className='sm:w-full  w-[150px]' key={image.id}  src={image.name} alt="" />
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
