import React from 'react';
import ProductImage from '../../assets/Cart-Section-Images/productImage.svg';
import { NegetiveIcon, PositiveIcon } from '../../utils/svgIcons';

const CartProductDetails = () => {
  return (
    <div className="w-full pt-16 flex flex-col gap-8">
      <div className="w-full row justify-between">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="separator"></div>
      <div className="row justify-between">
        <div className="flex max-w-[230px] gap-2">
          <img className="max-w-[100px]" src={ProductImage} alt="" />
          <div className="flex flex-col items-start">
            <p className="">Mini dress with ruffled straps</p>
            <p>Color : Red</p>
            <button className="underline">Remove</button>
          </div>
        </div>
        <p className='mr-40'>$14.90</p>
        <div className="row border mr-36  border-[#EEEEEE]  gap-5 px-3 py-1.5 ">
          <button className="cursor-pointer ">
            <NegetiveIcon></NegetiveIcon>
          </button>{' '}
          <p>1</p>{' '}
          <button className="cursor-pointer">
            <PositiveIcon></PositiveIcon>
          </button>
        </div>
              <p>$14.90</p>
      </div>
       <div className="separator"></div>
      <div></div>
    </div>
  );
};

export default CartProductDetails;
