import React from 'react';
import ProductCard from './ProductCard';
import { arrivalSectionCardsData } from '../../utils/arrivalSectionData';

const ProductCardSection = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 sm:gap-6 lg:gap-10">
      {arrivalSectionCardsData.map(data => (
        <ProductCard
          key={data.id}
          images={data.images}
          name={data.name}
          company={data.company}
          reviews={data.reviews}
          price={data.price}
          available={data.availabe}
          stars={data.stars}></ProductCard>
      ))}
    </div>
  );
};

export default ProductCardSection;
