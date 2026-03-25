import React from 'react';
import productImage from '../../assets/Checkout-Section-Images/productImage.svg';
const CheckoutBillSection = () => {
  return (
    <div className="w-full pl-10 h-full bg-[#F5F5F5] flex flex-col pt-10  items-start">
      <div className="">
        <div className="row gap-10">
          <img src={productImage} alt="" />
          <div className="flex flex-col">
            <p>Mini dress with ruffled straps</p>
            <p>Red</p>
          </div>
          <p>$100.00</p>
        </div>

        <div className="row w-full justify-between">
          <input type="text" placeholder="Discount code" />
          <button className="bg-black text-white">Apply</button>
        </div>
        <div className="row w-full  justify-center">
          <div className='w-full'>
            <p>Subtotal</p>
            <p>Shipping</p>
            <p>Total</p>
          </div >
          <div className='w-full flex flex-col items-end'>
            <p>$100.00</p>
            <p>$40.00</p>
            <p>$140.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBillSection;
