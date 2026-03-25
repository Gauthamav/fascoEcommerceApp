import React from 'react';

const ProductToolsSection = ({ icon: Icon, name }) => {
  return (
    <div className="row gap-2 font-poppins">
      <Icon></Icon>
      <p className='text-xs'>{name}</p>
    </div>
  );
};

export default ProductToolsSection;
