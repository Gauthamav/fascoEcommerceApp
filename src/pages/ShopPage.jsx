import React from 'react';
import Navbar from '../components/Navbar-Section/Navbar';
import { shopPageNavItemsData,navIcons } from '../utils/navbarData';
import FashionSection from '../components/Fashion-Section/FashionSection';
import PageNumber from '../components/Fashion-Section/PageNumber.jsx';
import PeakyBlindersSection from '../components/PeakyBlinders-Section/PeakyBlindersSection.jsx';
import SocialMediaSection from '../components/SocialMedia-Section/SocialMediaSection.jsx';
import FeaturesSection from '../components/Features-Section/FeaturesSection.jsx';
import SubscriptionSection from '../components/Subscription-Section/SubscriptionSection.jsx';
import FooterSection from '../components/Footer-Section/FooterSection.jsx';
import RouteNavigationText from '../components/RouteNavigation/RouteNavigationText.jsx';

const ShopPage = () => {
  return (
    <>
      <div className="flex font-volkhov wrapper  flex-col ">
        <Navbar navItemsData={shopPageNavItemsData} navIcons={navIcons}></Navbar>
        <h3 className=" text-1xl text-center sub-heading py-5">Fashion</h3>
      <RouteNavigationText currentPageName={'Fashion'}></RouteNavigationText>
        <FashionSection></FashionSection>
        <PageNumber></PageNumber>
      </div>
      <PeakyBlindersSection></PeakyBlindersSection>
      <FeaturesSection></FeaturesSection>
      <SocialMediaSection></SocialMediaSection>
      <SubscriptionSection></SubscriptionSection>
      <FooterSection></FooterSection>
    </>
  );
};

export default ShopPage;
