import React from 'react';
import { productPageLeftScrollImageData } from '../../utils/productPageSectionData';

const ProductPageSideScroll = ({ newObj }) => {
  const newArr = [newObj, ...productPageLeftScrollImageData];

  return (
    <div className="column gap-2 h-[450px] max-w-[90px] overflow-y-auto hide-scrollbar">
      {newArr.map(item => (
        <img className="w-[50px] object-cover" key={item.id} src={item.image} alt="" />
      ))}
    </div>
  );
};

export default ProductPageSideScroll;
