import React, { useState } from 'react';
import ProductColorSelection from './ProductColorSelection';
import { ItemsBar } from '../../utils/svgIcons';
import ProductSize from './ProductSize';
import { productPageDetailSectionSizeData } from '../../utils/ProductPageSectionData';
import { productPageDetailSectionColorData } from '../../utils/ProductPageSectionData';
import ProductDescription from './ProductDescription';
import { productToolsData } from '../../utils/ProductPageSectionData';
import ProductToolsSection from './ProductToolsSection';
import { productDeliveryData } from '../../utils/ProductPageSectionData';
import ProductDeliverySection from './ProductDeliverySection';
import ProductCreditCardSection from './ProductCreditCardSection';
import { ProductStarIcon } from '../../utils/svgIcons';
import ProductQuantityChanging from './ProductQuantityChanging';

const ProductPageDetailsSection = ({ name, price, handleAddCartModal }) => {
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setCurrentQuantity(prev => (prev < 10 ? prev + 1 : prev));
  };

  const handleDecrementQuantity = () => {
    setCurrentQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const currentPrice = price * currentQuantity;

  const handleSize = index => {
    setCurrentSizeIndex(index);
  };
  const handleColor = index => {
    setCurrentColorIndex(index);
  };

  return (
    <div className="flex justify-between flex-1 ">
      <div className="flex flex-col gap-4 w-full font-volkhov">
        <ProductDescription productName={name} productPrice={currentPrice}></ProductDescription>
        <ItemsBar></ItemsBar>
        <p className="text-sm">Size: M</p>
        <div className="row w-full gap-2">
          {productPageDetailSectionSizeData.map((item, index) => (
            <ProductSize
              onClick={() => handleSize(index)}
              currentSizeIndex={currentSizeIndex}
              index={index}
              key={item.id}
              name={item.name}></ProductSize>
          ))}
        </div>
        <div className="row gap-2">
          {productPageDetailSectionColorData.map((data, index) => (
            <ProductColorSelection
              onClick={() => handleColor(index)}
              key={data.id}
              currentIndex={currentColorIndex}
              index={index}
              bgColor={data.color}></ProductColorSelection>
          ))}
        </div>
        <p className="text-sm">Quantity</p>
        <div className="row gap-4">
          <ProductQuantityChanging
            className={'row border  border-[#EEEEEE]  gap-5 px-3 py-1.5'}
            handleDecrementQuantity={handleDecrementQuantity}
            handleIncrementQuantity={handleIncrementQuantity}
            currentQuantity={currentQuantity}></ProductQuantityChanging>
          <button
            onClick={handleAddCartModal}
            className="w-full border rounded-sm py-1.5 cursor-pointer text-sm border-black ">
            Add Cart
          </button>
        </div>

        <div className="w-full row gap-7 pt-5 pb-5 border-b border-b-[#EEEEEE]">
          {productToolsData.map(data => (
            <ProductToolsSection key={data.id} icon={data.icon} name={data.name}></ProductToolsSection>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {productDeliveryData.map(data => (
            <ProductDeliverySection
              key={data.id}
              icon={data.icon}
              text={data.text}
              date={data.date}></ProductDeliverySection>
          ))}
        </div>
        <ProductCreditCardSection></ProductCreditCardSection>
      </div>
      <div className="rounded-full cursor-pointer row justify-center w-[45px] h-[45px] p-3 border border-[#EEEEEE]">
        <ProductStarIcon></ProductStarIcon>
      </div>
    </div>
  );
};

export default ProductPageDetailsSection;
