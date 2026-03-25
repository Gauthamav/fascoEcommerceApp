import React from 'react';
import DealsTimerSectioin from './DealsTimerSectioin';
import Button from '../Button.jsx/Button';
import { useNavigate } from 'react-router';

const DealsTextSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/buy');
  };
  return (
    <div className="column !items-start gap-5 font-poppins w-2/3 ">
      <h2 className="font-volkhov heading sm:text-2xl text-xl w-full">Deals Of The Month</h2>
      <p className="max-w-md  sm:text-sm text-xxs light-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
        Scelerisque duis ultrices sollicitudin
      </p>

      <Button
        onClick={handleClick}
        children={'Buy Now'}
        className={'bg-black cursor-pointer sm:px-10 px-8 py-3 sm:text-xs text-xxs rounded-md text-white'}></Button>
      <p className="sm:text-lg text-sm sub-heading text-primary">Hurry, Before It’s Too Late!</p>
      <DealsTimerSectioin></DealsTimerSectioin>
    </div>
  );
};

export default DealsTextSection;
