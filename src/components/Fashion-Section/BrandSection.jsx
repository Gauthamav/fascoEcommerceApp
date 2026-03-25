import React from 'react';
import SubSection from './SubSection';

const BrandSection = ({ text, style,className }) => {
  return (
    <div className="flex flex-col gap-5 font-poppins">
      <p className='font-volkhov'>{text}</p>
  
      <div className={className}>  
        {style.map(item => (
          <SubSection key={item.id} className={item.className} text={item.text}></SubSection>
        ))}
      </div>
      
    </div>
  );
};



export default BrandSection;
