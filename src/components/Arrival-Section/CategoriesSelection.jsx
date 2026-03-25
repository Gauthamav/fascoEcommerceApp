import React from 'react';

const CategoriesSelection = ({ name, onClick, activeIndex, index }) => {
  return (
    <div
      onClick={onClick}
      className={`px-5  cursor-pointer 
    ${
      index === activeIndex ? 'bg-black text-white' : 'bg-dealsBg'
    }  py-2.5 light-text   t    transition-colors duration-400  ease-in sm:text-sm text-xs text-primary  rounded-md`}>
      {name}
    </div>
  );
};

export default CategoriesSelection;
