import React, { useState } from 'react';

const ProductSize = ({ name ,index ,currentSizeIndex ,onClick}) => {

    

  return (
    <div onClick={onClick}   className={`w-[40px] cursor-pointer rounded-md text-sm font-poppins h-[40px] row justify-center ${ currentSizeIndex===index ? 'bg-black text-white' :'bg-[#EEEEEE] text-black'}   `}>
      {name}
    </div>
  );
};

export default ProductSize;
