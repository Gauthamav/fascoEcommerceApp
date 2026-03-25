import React from 'react';
import BrandSection from './BrandSection';
import { filtersData } from '../../utils/shopPageSectionData';
import { DownArrow } from '../../utils/svgIcons';
import image1 from '../../assets/Shop-Page-Images/lines.svg';
import ProductCard from './ProductCard';
import { shopPageProductData } from '../../utils/shopPageSectionData';
import { Link } from 'react-router';
const FashionSection = () => {
  return (
    <div className="flex pt-10">
      <div className="flex flex-col gap-5 ">
        <p className="text-lg sub-heading ">Filters</p>
        {filtersData.map(data => (
          <BrandSection key={data.id} className={data.className} text={data.text} style={data.style}></BrandSection>
        ))}
      </div>
      <div className="w-full">
        <div className="w-full row justify-between">
          <p className="text-sm row gap-1">
            Best Selling<DownArrow></DownArrow>
          </p>
          <img src={image1} alt="" />
        </div>
        <div className="grid grid-cols-3 pt-5 gap-x-5 gap-y-8">
          {shopPageProductData.map(data => (
            <Link  key={data.id} to={`/product/${data.id}`}>
              <ProductCard key={data.id} image={data.image} name={data.name} price={data.price} style={data.style}>
                {' '}
              </ProductCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionSection;
