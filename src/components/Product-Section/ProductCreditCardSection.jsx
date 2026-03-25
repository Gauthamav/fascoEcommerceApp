import React from 'react';
import creditCardsImage from '../../assets/Product-Page-Images/creditCards.svg';

const ProductCreditCardSection = () => {
  return (
    <div className="column px-10 py-4 gap-4 pt-5 w-full bg-[#F8F8F8]">
      <img src={creditCardsImage} alt="" />
      <p className='text-xs'>Guarantee safe & secure checkout</p>
    </div>
  );
};

export default ProductCreditCardSection;
