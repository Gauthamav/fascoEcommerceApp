import React from 'react';
import Navbar from '../components/Navbar-Section/Navbar';
import { navItemsData } from '../utils/navbarData';
import MarqueeSection from '../components/Marquee-Section/MarqueeSection';
import DealsSection from '../components/Deals-Section/DealsSection';
import ArrivalSection from '../components/Arrival-Section/ArrivalSection';
import FeaturesSection from '../components/Features-Section/FeaturesSection';
import SocialMediaSection from '../components/SocialMedia-Section/SocialMediaSection';
import SubscriptionSection from '../components/Subscription-Section/SubscriptionSection';
import FooterSection from '../components/Footer-Section/FooterSection';
import TestimonialSection from '../components/Testimonial-Section/TestimonialSection';
import PeakyBlindersSection from '../components/PeakyBlinders-Section/PeakyBlindersSection';
import LandingPage from './LandingPage';

const HomePage = () => {
  return (
    <div className="flex flex-col  ">
      <LandingPage ></LandingPage>
      <MarqueeSection></MarqueeSection>
      <DealsSection></DealsSection>
      <ArrivalSection></ArrivalSection>
      <PeakyBlindersSection></PeakyBlindersSection>
      <FeaturesSection></FeaturesSection>
      <SocialMediaSection></SocialMediaSection>
      <TestimonialSection></TestimonialSection>
      <SubscriptionSection></SubscriptionSection>
      <FooterSection></FooterSection>
    </div>
  );
};

export default HomePage;
