import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { shopPageProductData } from '../utils/shopPageSectionData';
import Navbar from '../components/Navbar-Section/Navbar';
import { shopPageNavItemsData, navIcons } from '../utils/navbarData';
import ProductPageSideScroll from '../components/Product-Section/ProductPageSideScroll';
import ProductPageImageSection from '../components/Product-Section/ProductPageImageSection';
import ProductPageDetailsSection from '../components/Product-Section/ProductPageDetailsSection';
import PeakyBlindersSection from '../components/PeakyBlinders-Section/PeakyBlindersSection';
import FeaturesSection from '../components/Features-Section/FeaturesSection';
import DealsSection from '../components/Deals-Section/DealsSection';
import SubscriptionSection from '../components/Subscription-Section/SubscriptionSection';
import FooterSection from '../components/Footer-Section/FooterSection';
import MiniCartModal from '../components/MiniCart-Section/MiniCartModal';

const ProductPage = () => {
  const [activeModal, setActiveModal] = useState(false);

  const { id } = useParams();

  const result = shopPageProductData.find(product => String(product.id) === id);

  if (!result) return <h1 className="row justify-center h-screen text-3xl">Product Not Found....</h1>;

  const { name, image, price } = result;

  const newObj = { id, image };
  const newPrice = parseFloat(price.replace(/[^0-9.]/g, ''));

  const handleAddCartModal = () => {
    setActiveModal(prev => !prev);
  };

  return (
    <div className="relative ">
      <MiniCartModal
        productName={name}
        productImage={image}
        productPrice={price}
        handleAddCartModal={handleAddCartModal}
        activeModal={activeModal}></MiniCartModal>
      <div className={`flex font-volkhov  flex-col wrapper ${activeModal && 'opacity-40 z-30'} `}>
        <Navbar navItemsData={shopPageNavItemsData} navIcons={navIcons}></Navbar>
        <div className="w-full flex pt-16 gap-5 items-start ">
          <ProductPageSideScroll newObj={newObj}></ProductPageSideScroll>
          <ProductPageImageSection image={image}></ProductPageImageSection>
          <ProductPageDetailsSection
            handleAddCartModal={handleAddCartModal}
            name={name}
            price={newPrice}></ProductPageDetailsSection>
        </div>
      </div>
      <PeakyBlindersSection></PeakyBlindersSection>
      <FeaturesSection></FeaturesSection>
      <DealsSection></DealsSection>
      <SubscriptionSection></SubscriptionSection>
      <FooterSection></FooterSection>
    </div>
  );
};

export default ProductPage;
