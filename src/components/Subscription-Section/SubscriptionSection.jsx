import React from 'react';
import image1 from '../../assets/Subscription-Section-Images/image 2.png';
import image2 from '../../assets/Subscription-Section-Images/image 3.png';
import SubscriptionImageCard from './SubscriptionImageCard';
import Button from '../Button.jsx/Button';
import { useNavigate } from 'react-router';
import SectionHeading from '../SectionsHeading/SectionHeading';

const SubscriptionSection = () => {
  const navigate = useNavigate();

  const handleSubscribtion = () => {
    navigate('/subscription');
  };
  return (
    <div className="w-full hidden  wrapper items-start pt-24">
      <SubscriptionImageCard image={image1}></SubscriptionImageCard>
      <div className="column gap-7 w-full">
       <SectionHeading description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin'} heading={'Subscribe To Our Newsletter'}></SectionHeading>
        <input
          placeholder="michael@ymail.com"
          className=" w-full h-[60px] shadow-2xl border-none outline-none ring-0 bg-white pl-10"></input>
                <Button
        onClick={handleSubscribtion}
        children={'Subscribe Now'}
        className={'bg-black cursor-pointer px-10 py-3 text-xs rounded-md text-white'}></Button>
      </div>
      <SubscriptionImageCard image={image2}></SubscriptionImageCard>

    </div>
  );
};

export default SubscriptionSection;
