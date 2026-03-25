import React from 'react';

const ImageSectionArrows = ({ className, text }) => {
  return (
    <div className={className}>
      <div className="row  relative ">
        <div className="w-[18px] h-[18px] -left-5 bottom-[49%]  absolute rounded-full border border-black bg-[#DADADA]"></div>

        <svg className="" xmlns="http://www.w3.org/2000/svg" width="81" height="21" viewBox="0 0 81 21" fill="none">
          <path d="M0.5 1H61L80.5 20.5" stroke="black" />
        </svg>
        <div className="row w-[100px] font-poppins text-xs absolute top-5 left-[98%] justify-center  py-1 text-black  bg-[#DADADA]/40 backdrop-blur-[10px] border border-black ">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ImageSectionArrows;
