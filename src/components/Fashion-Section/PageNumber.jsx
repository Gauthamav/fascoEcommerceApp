import React, { useState } from 'react';
import { pageNumberData } from '../../utils/shopPageSectionData';
const PageNumber = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    console.log(index)
    setCurrentIndex(index)
  }
  return (
    <div className="w-full row justify-center gap-3 py-10">
      {pageNumberData.map((data,index) => (
        <p onClick={()=> handleClick(index)} key={data.id} index={index} className={`${currentIndex === index ? 'bg-[#F3F3F3]' : 'bg-white'} cursor-pointer rounded-full px-4 py-2`}>{data.num}</p>
      ))}
    </div>
  );
};

export default PageNumber;
