import React from 'react';
import { productPageDetailSectionStarsImageData } from '../../utils/ProductPageSectionData';
import { EyeIcon } from '../../utils/svgIcons';

const ProductDescription = ({ productName, productPrice }) => {
  return (
    <>
      <p className="text-xs text-primary  font-volkhov">FASCO</p>
      {/* prop name  */}
      <p className="text-xl">{productName}</p>
      <div className="row ">
        {productPageDetailSectionStarsImageData.map(item => (
          <img className="w-3" key={item.id} src={item.image} alt="" />
        ))}
        <p className="light-text text-xs pl-3">(3)</p>
      </div>

      <div className="row gap-4">
        {/* price */}
        <p className="text-lg">${productPrice}.00</p>
        <p className="light-text text-base line-through text-[#666666]">$59.00</p>
        <p className="rounded-xl px-2 py-0.5 font-poppins bg-[#DA3F3F] text-white text-tiny">Save 33%</p>
      </div>
      <div className="row gap-4">
        <EyeIcon></EyeIcon>
        <p className="text-xs text-darkGray font-poppins">24 people are viewing this right now</p>
      </div>
      <div className="row justify-between w-full bg-[#FDEFEE] text-[#FF706B] px-5 py-3 rounded-md border border-1-[#F8CCCC]">
        <p>Hurry up! Sale ends in:</p>
      </div>
      <p className="text-xs text-[#666666] light-heading font-poppins">
        Only <span className="text-black text-sm sub-heading">9</span> item(s) left in stock!
      </p>
    </>
  );
};

export default ProductDescription;
