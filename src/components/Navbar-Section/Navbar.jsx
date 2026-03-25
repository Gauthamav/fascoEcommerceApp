import React, { useState } from 'react';

import { Link, useLocation } from 'react-router';
import { HamburgerMenuIcon } from '../../utils/svgIcons';
import Hamburgermenu from './Hamburgermenu';


const Navbar = ({ navItemsData, navIcons }) => {
  const route = useLocation();
  const [active , setActive] = useState(false)
  const currentRoute = route.pathname.split('/')[1];
  const location = `/${currentRoute}`;
 const handleHamburgerMenu = () => {
    setActive(!active)
 }
  return (
    <nav className="row justify-between font-poppins text-primary py-20 ">
      <h1 className="sm:text-2xl text-xl font-volkhov">FASCO</h1>
      <div onClick={handleHamburgerMenu} className=' lg:hidden '>
        <HamburgerMenuIcon></HamburgerMenuIcon>
      </div>
      {
    active &&
      <Hamburgermenu location={location} navIcons={navIcons} navItemsData={navItemsData} active={active} setActive={setActive}></Hamburgermenu>
      }
      <ul className="  md:gap-5 hidden lg:flex items-center ">
        {navItemsData.map(item => (
          <Link key={item.id} to={item.route}>
            <li
              className={`text-xs light-heading px-2 py-1.5  ${
                navIcons && location === item.route ? 'border-b border-primary' : ''
              }`}>
              {item.name}
            </li>
          </Link>
        ))}
        {!navIcons && (
          <Link to="/signUp">
            <li className="bg-black px-8 py-4 text-xs rounded-md text-white light-heading">Sign Up</li>
          </Link>
        )}
      </ul>
      {navIcons && (
        <div className="lg:flex items-center  hidden  gap-6">
          {navIcons.map(icons => (
            <Link to={icons.route} key={icons.id}>
              <img className="w-4" src={icons.image} alt="" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
