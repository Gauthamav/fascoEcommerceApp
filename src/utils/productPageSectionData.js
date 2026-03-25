import { data } from 'react-router';
import image1 from '../assets/Product-Page-Images/image1.svg';
import image2 from '../assets/Product-Page-Images/image2.svg';
import image3 from '../assets/Product-Page-Images/image3.svg';
import image4 from '../assets/Product-Page-Images/image4.svg';
import image5 from '../assets/Product-Page-Images/image6.svg';
import image6 from '../assets/Product-Page-Images/image7.svg';
import star from '../assets/Product-Page-Images/star.svg';
import starFrame from '../assets/Product-Page-Images/starFrame.svg';
import { TwoWayArrow, QuestionMark, ShareIcon, TruckIcon, BasketIcon } from './svgIcons';

export const productPageLeftScrollImageData = [
  { id: 101, image: image1 },
  { id: 102, image: image4 },
  { id: 201, image: image2 },
  { id: 301, image: image3 },
  { id: 401, image: image4 },
  { id: 501, image: image5 },
  { id: 601, image: image6 },
  { id: 701, image: image1 },
  { id: 801, image: image2 },
  { id: 901, image: image3 },
];

export const productPageDetailSectionStarsImageData = [
  { id: 1, image: star },
  { id: 2, image: star },
  { id: 3, image: star },
  { id: 4, image: star },
  { id: 5, image: starFrame },
];

export const productPageDetailSectionSizeData = [
  { id: 1, name: 'M' },
  { id: 2, name: 'L' },
  { id: 3, name: 'XL' },
  { id: 4, name: 'XXL' },
];

export const productPageDetailSectionColorData = [
  { id: 1, color: '[#8DB4D2]' },
  { id: 2, color: '[#000000]' },
  { id: 3, color: '[#FFD1DC]' },
];

export const productToolsData = [
  { id: 1, icon: TwoWayArrow, name: 'Compare' },
  { id: 2, icon: ShareIcon, name: 'Ask a question' },
  { id: 3, icon: QuestionMark, name: 'Share' },
];

export const productDeliveryData = [
  { id: 1, icon: TruckIcon, text: 'Estimated Delivery:', date: 'Jul 30 - Aug 03' },
  { id: 2, icon: BasketIcon, text: ' Free Shipping & Returns: ', date: ' On all orders over $75 ' },
];
