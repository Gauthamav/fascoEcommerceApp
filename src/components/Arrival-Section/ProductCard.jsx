import React from 'react';
import Star from './Star';

const ProductCard = ({ images, name, company, reviews, price, available, stars }) => {
  return (
    <div className="column rounded-md max-w-[290px] gap-4 px-3 pt-4 pb-10 font-poppins shadow-md text-primary">
      <div>
        <img className="w-full" src={images} alt="" />
      </div>
      <div className="flex   justify-between w-full px-1">
        <div className="flex gap-5 flex-col">
          <h6 className="sub-heading sm:text-base text-sm">{name}</h6>
          <p className="text-xs light-heading">{company}</p>
          <p className="sub-heading text-xxs">{reviews}</p>
          <p className=" sm:text-md text-sm heading">{price}</p>
        </div>
        <div className="column justify-between">
          <div className="row gap-1">
            {stars.map(star => (
              <Star key={star}></Star>
            ))}
          </div>
          <p className="text-xs light-heading text-red-400">{available}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
