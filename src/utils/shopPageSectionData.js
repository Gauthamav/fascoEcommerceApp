import productImage1 from '../assets/Shop-Page-Images/product1.svg';
import productImage2 from '../assets/Shop-Page-Images/product2.svg';
import productImage3 from '../assets/Shop-Page-Images/product3.svg';
import productImage4 from '../assets/Shop-Page-Images/product4.svg';
import productImage5 from '../assets/Shop-Page-Images/product5.svg';
import productImage6 from '../assets/Shop-Page-Images/product6.svg';
import productImage7 from '../assets/Shop-Page-Images/product7.svg';
import productImage8 from '../assets/Shop-Page-Images/product8.svg';
import productImage9 from '../assets/Shop-Page-Images/product9.svg';

export const filtersData = [
  {
    id: 1,
    text: 'Size',
    className: 'grid grid-cols-3 gap-2 max-w-[150px]',
    style: [
      {
        id: 1,
        className: ' text-xs border  px-1.5 py-2.5 border-[#8A8A8A]  rounded-md row justify-center text-[#8A8A8A]',
        text: 'S',
      },
      {
        id: 2,
        className: ' text-xs border  px-1.5 py-2.5 border-[#8A8A8A]  rounded-md row justify-center text-[#8A8A8A]',
        text: 'M',
      },
      {
        id: 3,
        className: ' text-xs border  px-1.5 py-2.5 border-[#8A8A8A]  rounded-md row justify-center text-[#8A8A8A]',
        text: 'L',
      },
      {
        id: 4,
        className: ' text-xs border  px-1.5 py-2.5 border-[#8A8A8A]  rounded-md row justify-center text-[#8A8A8A]',
        text: 'XL',
      },
    ],
  },

  {
    id: 2,
    text: 'Colors',
    className: 'grid grid-cols-7 gap-2 max-w-[200px]',
    style: [
      {
        id: 1,
        className: 'bg-[#FF6C6C] w-20 h-20    rounded-full',
      },
      {
        id: 2,
        className: 'bg-[#FF7629] w-20 h-20    rounded-full',
      },
      {
        id: 3,
        className: 'bg-[#FFF06C] w-20 h-20    rounded-full',
      },
      {
        id: 4,
        className: 'bg-[#9BFF6C] w-20 h-20    rounded-full',
      },
      {
        id: 5,
        className: 'bg-[#6CFF9E] w-20 h-20    rounded-full',
      },
      {
        id: 6,
        className: 'bg-[#6CFFDC] w-20 h-20    rounded-full',
      },
      {
        id: 7,
        className: 'bg-[#6CB9FF] w-20 h-20    rounded-full',
      },
      {
        id: 8,
        className: 'bg-[#6CA7FF] w-20 h-20    rounded-full',
      },
      {
        id: 9,
        className: 'bg-[#6C7BFF] w-20 h-20    rounded-full',
      },
      {
        id: 10,
        className: 'bg-[#6C7BFF] w-20 h-20    rounded-full',
      },
      {
        id: 11,
        className: 'bg-[#8A6CFF] w-20 h-20    rounded-full',
      },
      {
        id: 12,
        className: 'bg-[#B66CFF] w-20 h-20    rounded-full',
      },
      {
        id: 13,
        className: 'bg-[#FC6CFF] w-20 h-20    rounded-full',
      },
      {
        id: 14,
        className: 'bg-[#FF6C6C]   w-20 h-20     rounded-full',
      },
    ],
  },

  {
    id: 3,
    text: 'Prices',
    className: 'grid grid-cols-1 gap-2 max-w-[100px]',
    style: [
      {
        id: 1,
        className: 'text-sm  text-[#8A8A8A]',
        text: '$0-$50',
      },
      {
        id: 2,
        className: 'text-sm  text-[#8A8A8A]',
        text: '$50-$100',
      },
      {
        id: 3,
        className: 'text-sm  text-[#8A8A8A]',
        text: '$100-$150',
      },
      {
        id: 4,
        className: 'text-sm  text-[#8A8A8A]',
        text: '$150-$200',
      },
      {
        id: 5,
        className: 'text-sm  text-[#8A8A8A]',
        text: '$300-$400',
      },
    ],
  },

  {
    id: 4,
    text: 'Brands',
    className: 'grid grid-cols-2 gap-2 max-w-[200px]',
    style: [
      {
        id: 1,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Minimog',
      },
      {
        id: 2,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Retrolie',
      },
      {
        id: 3,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Brook',
      },
      {
        id: 4,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Learts',
      },
      {
        id: 5,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Vagabond',
      },
      {
        id: 6,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Abby',
      },
    ],
  },

  {
    id: 5,
    text: 'Collections',
    className: 'grid grid-cols-1 gap-2 max-w-[200px]',
    style: [
      {
        id: 1,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'All products',
      },
      {
        id: 2,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Best sellers',
      },
      {
        id: 3,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'New arrivals',
      },
      {
        id: 4,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Accessories',
      },
    ],
  },

  {
    id: 6,
    text: 'Tags',
    className: 'flex flex-wrap gap-2  max-w-[350px]',
    style: [
      {
        id: 1,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Fashion',
      },
      {
        id: 2,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Hats',
      },
      {
        id: 3,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Sandal',
      },
      {
        id: 4,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Belt',
      },
      {
        id: 5,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Bags',
      },

      {
        id: 6,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Snacker',
      },
      {
        id: 7,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Denim',
      },
      {
        id: 8,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Minimog',
      },
      {
        id: 9,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Vagabond',
      },
      {
        id: 10,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Sunglasses',
      },

      {
        id: 11,
        className: 'text-sm  text-[#8A8A8A]',
        text: 'Beachwear',
      },
    ],
  },
];

export const shopPageProductData = [
  {
    id: 1,
    image: productImage1,
    name: 'Rounded Red Hat',
    price: '$8.00',
    style: [{ className: 'bg-[#FFD700] p-1.5 rounded-full ' }, { className: 'bg-[#000000] p-2 rounded-full ' }],
  },
  {
    id: 2,
    image: productImage2,
    name: 'Linen-blend Shirt',
    price: '$17.00',
    style: [{ className: 'bg-[#8DB4D2] p-1.5 rounded-full ' }, { className: 'bg-[#FFD1DC] p-2 rounded-full ' }],
  },
  {
    id: 3,
    image: productImage3,
    name: 'Long-sleeve Coat',
    price: '$106.00',
    style: [{ className: 'bg-[#EBE6DB] p-1.5 rounded-full ' }, { className: 'bg-[#C1E1C1] p-2 rounded-full ' }],
  },
  {
    id: 4,
    image: productImage4,
    name: 'Boxy Denim Hat',
    price: '$25.00',
    style: [{ className: 'bg-[#B1C5D4] p-1.5 rounded-full ' }, { className: 'bg-[#063E66] p-2 rounded-full ' }],
  },
  {
    id: 5,
    image: productImage5,
    name: 'Linen Plain Top',
    price: '$25.00',
    style: [{ className: 'bg-[#C1E1C1] p-1.5 rounded-full ' }, { className: 'bg-[#000000] p-2 rounded-full ' }],
  },
  {
    id: 6,
    image: productImage6,
    name: 'Oversized T-shirt',
    price: '$11.00',
    style: [
      { className: 'bg-[#FFD1DC] p-1.5 rounded-full ' },
      { className: 'bg-[#C6AEC7] p-2 rounded-full ' },
      { className: 'bg-[#FFFFFF] p-2 rounded-full ' },
    ],
  },
  {
    id: 7,
    image: productImage7,
    name: 'Polarised Sunglasses',
    price: '$18.00',
    style: [{ className: 'bg-[#000000] p-1.5 rounded-full ' }, { className: 'bg-[#836953] p-2 rounded-full ' }],
  },
  {
    id: 8,
    image: productImage8,
    name: 'Rockstar Jacket',
    price: '$22.00',
    style: [{ className: 'bg-[#C6AEC7] p-1.5 rounded-full ' }, { className: 'bg-[#BEDCE3] p-2 rounded-full ' }],
  },
  {
    id: 9,
    image: productImage9,
    name: 'Dotted Black Dress',
    price: '$20.00',
    style: [
      { className: 'bg-[#063E66] p-1.5 rounded-full ' },
      { className: 'bg-[#000000] p-2 rounded-full ' },
      { className: 'bg-[#B1C5D4] p-2 rounded-full ' },
    ],
  },
];

export const pageNumberData = [
  { id: 1, num: '1' },
  { id: 2, num: '2' },
  { id: 3, num: '3' },
];
