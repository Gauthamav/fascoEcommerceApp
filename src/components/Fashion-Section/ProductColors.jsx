import React from 'react';

const ProductColors = ({className}) => {
  return (
    <>
      <div className=" w-4 h-4 row justify-center rounded-full ring-1 ring-black">
        <div className={className}></div>
      </div>
      
    </>
  );
};

export default ProductColors;
