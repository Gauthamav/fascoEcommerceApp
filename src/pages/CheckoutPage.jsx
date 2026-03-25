import React from 'react';
import Navbar from '../components/Navbar-Section/Navbar';
import { shopPageNavItemsData, navIcons } from '../utils/navbarData';
import CheckoutFormSection from '../components/Checkout-Section/CheckoutFormSection';
import CheckoutBillSection from '../components/Checkout-Section/CheckoutBillSection';

const CheckoutPage = () => {
  return (
    <>
      <div className="flex font-volkhov  flex-col wrapper">
        <Navbar navItemsData={shopPageNavItemsData} navIcons={navIcons}></Navbar>
        <h3 className=" text-1xl text-center sub-heading py-5">FASCO Demo Checkout</h3>
      </div>

      <div className="separator"></div>
      <div className="flex  gap-10">
        <div className="wrapper-left">
          <CheckoutFormSection></CheckoutFormSection>
        </div>
        <CheckoutBillSection></CheckoutBillSection>
      </div>
    </>
  );
};

export default CheckoutPage;
