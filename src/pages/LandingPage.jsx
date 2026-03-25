import React from 'react';
import Navbar from '../components/Navbar-Section/Navbar';
import HeroSection from '../components/Hero-Section/HeroSection';
import { navItemsData } from '../utils/navbarData';

const LandingPage = () => {
  console.log('renderd')
  return (
    <div className="pt-20 wrapper  ">
      <Navbar navItemsData={navItemsData}></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
};

export default LandingPage;
