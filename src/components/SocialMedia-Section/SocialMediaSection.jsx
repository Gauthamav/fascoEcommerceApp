import React from 'react';
import { socialMediaSectionData } from '../../utils/socialMediaSectionData';
import ImageCard from './ImageCard';
import SectionHeading from '../SectionsHeading/SectionHeading';

const SocialMediaSection = () => {
  return (
    <div className="w-full bg-dealsBg column  justify-center gap-24 py-16">
     <SectionHeading heading={'Follow Us On Instagram'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin'}></SectionHeading>
      <div className="row">
        {socialMediaSectionData.map(data => (
          <ImageCard key={data.id} images={data.name}></ImageCard>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;
