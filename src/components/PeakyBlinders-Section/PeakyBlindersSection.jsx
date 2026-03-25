import React from 'react';
import image1 from '../../assets/PeakyBlinders-Section-Images/image.png';
import Button from '../Button.jsx/Button';
import { useNavigate } from 'react-router';
import ImageSectionArrows from './ImageSectionArrows';
import ImageSectionArrowLeft from './ImageSectionArrowLeft';

const PeakyBlindersSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/buy');
  };
  return (
    <div className=" flex flex-col items-center md:flex-row  mt-24 w-full justify-center text-[#767676] font-poppins    bg-[linear-gradient(180deg,white_0_calc(50%_-_1px),black_calc(50%_-_1px)_calc(50%_+_1px),#DADADA_calc(50%_+_1px)_100%)]   md:bg-[linear-gradient(110deg,white_0_calc(50%_-_1px),black_calc(50%_-_1px)_calc(50%_+_1px),#DADADA_calc(50%_+_1px)_100%)]  ">
      <div className=" h-full flex-1 relative  flex  justify-end md:pr-24 pb-12 sm:pb-0  ">
        <img className=" w-full max-w-[500px]  h-auto" src={image1} alt="" />
        
      </div>

      <div className="flex flex-1   justify-start  h-full py-5   gap-5   ">
        <div className="flex flex-col  gap-4 pl-10 ">
          <p className="sm:text-xs  text-xxs">Women Collection</p>
          <h6 className="font-volkhov text-primary sub-heading sm:text-2xl text-xl">Peaky Blinders</h6>
          <p className="underline sm:text-xs text-xxs">DESCRIPTION</p>
          <p className="max-w-[450px] sm:text-xs text-xxs pr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
            Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis.
          </p>
          <p>
            size: <span className="bg-black text-white px-4 py-0.5 rounded-lg sm:text-sm text-xs">M</span>
          </p>
          <p className="text-black sm:text-base text-sm">$100.00</p>
          <Button
            onClick={handleClick}
            children={'Buy Now'}
            className={'bg-black max-w-[150px] cursor-pointer  sm:px-10 py-3 sm:text-xs text-xxs rounded-md text-white'}></Button>
        </div>
      </div>
    </div>
  );
};

export default PeakyBlindersSection;
