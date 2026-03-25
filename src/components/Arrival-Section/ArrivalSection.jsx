import React, { useState } from 'react';
import CategoriesSelection from './CategoriesSelection';
import { categoriesData } from '../../utils/arrivalSectionData';
import ProductCardSection from './ProductCardSection';
import Button from '../Button.jsx/Button';
import { useNavigate } from 'react-router';
import SectionHeading from '../SectionsHeading/SectionHeading';

const ArrivalSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = id => {
    setActiveIndex(id);
  };
  const handleViewMore = () => {
    navigate('/view');
  };

  return (
    <div className="pt-24 gap-10 column bg-white w-full md:wrapper font-popins ">
      <SectionHeading
        heading={'New Arrivals'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin'
        }></SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {categoriesData.map(data => (
          <CategoriesSelection
            activeIndex={activeIndex}
            index={data.id}
            onClick={() => handleClick(data.id)}
            key={data.id}
            name={data.name}></CategoriesSelection>
        ))}
      </div>
      <ProductCardSection></ProductCardSection>
      <div>
        <Button
          onClick={handleViewMore}
          children={'View More'}
          className={'bg-black cursor-pointer px-10 py-3 text-xs rounded-md text-white'}></Button>
      </div>
    </div>
  );
};

export default ArrivalSection;
