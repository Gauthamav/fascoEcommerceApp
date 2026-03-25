import React from 'react';
import ProductQuantityChanging from '../Product-Section/ProductQuantityChanging';
import { useState } from 'react';
import Button from '../Button.jsx/Button';
import { CloseIcon } from '../../utils/svgIcons';

const MiniCartModal = ({ productPrice, productName, productImage, activeModal, handleAddCartModal }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setCurrentQuantity(prev => (prev < 10 ? prev + 1 : prev));
  };

  const handleDecrementQuantity = () => {
    setCurrentQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };
  
  return (
    <div className={`absolute py-[30px] ${!activeModal && 'hidden'} opacity-100 bg-white pl-16  pr-32 w-6/12  top-0 right-0  h-screen font-volkhov z-50 shadow-2xl `}>
      <div className="flex flex-col gap-8 relative">
        <button onClick={handleAddCartModal} className="absolute top-2 right-0 cursor-pointer">
          <CloseIcon></CloseIcon>
        </button>
        <h4 className="text-1xl">Shopping Cart</h4>
        <p className="font-poppins text-md text-darkGray">
          Buy <span className="text-black font-semibold"> {productPrice}</span>More And Get{' '}
          <span className="text-black font-semibold">Free Shipping</span>{' '}
        </p>
        <div className="flex gap-7 pt-5">
          <img className="max-w-[130px]" src={productImage} alt="" />
          <div className="flex flex-col gap-2">
            <p className="text-md">{productName}</p>
            <p className="text-base font-poppins text-darkGray">Color : Red</p>
            <p className="font-poppins light-text">$14.80</p>
            <ProductQuantityChanging
              handleDecrementQuantity={handleDecrementQuantity}
              handleIncrementQuantity={handleIncrementQuantity}
              currentQuantity={currentQuantity}
              className={'max-w-[100px]  row bg-[#F1F1F1] gap-5 px-3 py-1.5'}
              textStyle={'font-poppins text-darkGray text-md '}></ProductQuantityChanging>
          </div>
        </div>
        <div className="separator"></div>
        <div className="row pt-24 pl-5 gap-1.5">
          <input type="checkbox" className="w-5 h-5  border-4 border-black rounded-md" />
          <p className="font-poppins text-darkGray">
            For <span className="text-black ">$10.00 </span>please wrap the product
          </p>
        </div>
        <div className="separator"></div>
        <div className="w-full row justify-between ">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div>
        <Button
          className={'bg-black font-poppins cursor-pointer rounded-md w-full py-4 text-white'}
          children={'Checkout'}></Button>
      </div>
    </div>
  );
};

export default MiniCartModal;
