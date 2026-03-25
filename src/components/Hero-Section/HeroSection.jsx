import React from 'react';
import { Link, useNavigate } from 'react-router';
import HeroSectionSideImages from './HeroSectionSideImages';
import HeroSectionCentralImg1 from '../../assets/Home-Page-Images/CentralImg1.png';
import LeftSideImg from '../../assets/Home-Page-Images/HeroLeftSideImg.png';
import RightSideImg from '../../assets/Home-Page-Images/HeroRightSideImg.png';
import HeroSectionCentralImages from './HeroSectionCentralImages';
import HeroSectionCentralImg2 from '../../assets/Home-Page-Images/CentralImg2.png';
import Button from '../Button.jsx/Button';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');
  };

  return (
    <div className=" md:pb-16 md:h-[756px] pt-10   justify-center flex items-center gap-5 font-poppins text-primary relative">
      <HeroSectionSideImages imgSrc={LeftSideImg}></HeroSectionSideImages>
      <div className="column sm:justify-between  md:h-full  gap-10">
        <HeroSectionCentralImages imgSrc={HeroSectionCentralImg1}></HeroSectionCentralImages>
        <div className="column gap-2">
          <h1 className="heading sm:text-5xl text-4xl">ULTIMATE</h1>
          <h1 className="heading sm:text-8xl text-7xl text-outline">SALE</h1>
          <p className="sm:text-base text-sm">NEW COLLECTION</p>
          <Button
            onClick={handleClick}
            children={'SHOP NOW'}
            className={'bg-black cursor-pointer px-10 py-3 text-xs rounded-md text-white'}></Button>
        </div>
        <HeroSectionCentralImages imgSrc={HeroSectionCentralImg2}></HeroSectionCentralImages>
      </div>
      <HeroSectionSideImages imgSrc={RightSideImg}></HeroSectionSideImages>
    </div>
  );
};

export default HeroSection;
