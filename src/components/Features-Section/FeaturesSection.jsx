import React from 'react';
import SingleFeature from './SingleFeature';
import { featureSectionData } from '../../utils/featureSectionData';

const FeaturesSection = () => {
  return (
    <div className="w-full py-10 gap-14 px-5   grid grid-cols-2  justify-center  md:grid-cols-4 ">
      {featureSectionData.map(data => (
        <SingleFeature key={data.id} name={data.name} images={data.images} label={data.label}></SingleFeature>
      ))}
    </div>
  );
};

export default FeaturesSection;
