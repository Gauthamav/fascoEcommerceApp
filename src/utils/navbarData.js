import userIcon from '../assets/Shop-Page-Images/userIcon.svg';
import cartIcon from '../assets/Shop-Page-Images/cartIcon.svg';
import searchIcon from '../assets/Shop-Page-Images/searchIcon.svg';
import starIcon from '../assets/Shop-Page-Images/starIcon.svg';

export const navItemsData = [
  { id: 1, route: '/', name: 'Home' },
  { id: 2, route: '/shop', name: 'Deals' },
  { id: 3, route: '/shop', name: 'New Arrivals' },
  { id: 4, route: '/shop', name: 'Packages' },
  { id: 5, route: '/signIn', name: 'Sign In' },
];

export const shopPageNavItemsData = [
  { id: 1, route: '/', name: 'Home' },
  { id: 2, route: '/shop', name: 'Shop' },
  { id: 3, route: '/product', name: 'Products' },
  { id: 4, route: '/signIn', name: 'Pages' },
];

export const navIcons = [
  { id: 1,  route:'/', image: searchIcon, },
  { id: 2,  route:'/', image: userIcon },
  { id: 3,  route:'/', image: starIcon },
  { id: 4,  route:'/cart', image: cartIcon },
];
