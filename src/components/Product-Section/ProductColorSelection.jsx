import React from 'react';

const ProductColorSelection = ({ currentIndex, onClick, index, bgColor }) => {
   
  return (
    <div onClick={onClick} className=" w-[25px] h-[25px] cursor-pointer row justify-center rounded-full ring-1 ring-black">
      <div className={`bg-${bgColor}  ${ currentIndex === index ?'p-2.5' : 'p-3.5'} rounded-full  `}></div>
    </div>
  );
};

export default ProductColorSelection;
