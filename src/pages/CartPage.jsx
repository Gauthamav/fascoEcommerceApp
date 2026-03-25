import React from 'react';
import RouteNavigationText from '../components/RouteNavigation/RouteNavigationText';
import { shopPageNavItemsData, navIcons } from '../utils/navbarData';
import Navbar from '../components/Navbar-Section/Navbar';
import CartProductDetails from '../components/Cart-Section/CartProductDetails';

const CartPage = () => {
  return (
    <div className="flex font-volkhov  flex-col wrapper">
      <Navbar navItemsData={shopPageNavItemsData} navIcons={navIcons}></Navbar>
      <h3 className=" text-1xl text-center sub-heading py-5">Fashion</h3>
      <RouteNavigationText currentPageName={'Your Shopping Cart'}></RouteNavigationText>
      <CartProductDetails></CartProductDetails>
    </div>
  );
};

export default CartPage;
