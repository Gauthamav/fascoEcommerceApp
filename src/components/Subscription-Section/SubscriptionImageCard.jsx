import React from 'react';

const SubscriptionImageCard = ({image}) => {
  return (
    <div className='flex max-w-[250px] items-center justify-center'>
      <img className="w-full object-cover" src={image} alt="" />
    </div>
  );
};

export default SubscriptionImageCard;
