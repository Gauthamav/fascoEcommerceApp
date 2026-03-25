import React from 'react';
import image1 from '../../assets/Shop-Page-Images/product1.svg';
import ProductColors from './ProductColors';

const ProductCard = ({ image, name, price, style }) => {
  return (
    <div className="flex flex-col gap-2">
      <img className='max-w-[300px] ' src={image} alt="" />
      <p className='text-sm sub-heading '>{name}</p>
      <p className='text-xs'>{price}</p>
      <div className="row gap-2">
        {style.map((data,index) => (
          <ProductColors key={index} className={data.className}></ProductColors>
        ))}
      </div>
      
    </div>
  );
};

export default ProductCard;
