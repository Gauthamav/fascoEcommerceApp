import React from 'react';

const ImageSectionArrowLeft = ({ className, text }) => {
  return (
    <div className={className}>
      <div className="row relative">
        {/* Circle on the opposite side */}
        <div className="w-[18px] h-[18px] right-[-1.25rem] bottom-[49%] absolute rounded-full border border-black bg-[#DADADA]"></div>

        {/* SVG line flipped horizontally */}
        <svg xmlns="http://www.w3.org/2000/svg" width="141" height="21" viewBox="0 0 141 21" fill="none">
          <path d="M141 1H20.5L1 20.5" stroke="black" />
        </svg>

        {/* Rectangle on the opposite side */}
        <div className="row w-[100px] font-poppins text-xs absolute top-5 right-[98%] justify-center py-1 text-black bg-[#DADADA]/40 backdrop-blur-[10px] border border-black">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ImageSectionArrowLeft;
