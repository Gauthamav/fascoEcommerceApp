import React from 'react';
import icon1 from '../../assets/Features-Section-Images/icon1.svg';

const SingleFeature = ({images,name,label}) => {
  return (
    <div className="row w-full gap-5 text-primary justify-center ">
      <div>
        <img className="w-[30px]" src={images} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="sub-heading sm:text-sm text-xs">{name}</h6>
        <p className="sub-heading sm:text-xs text-xxs">{label}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
