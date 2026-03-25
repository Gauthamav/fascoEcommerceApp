import React from 'react';
import { NegetiveIcon, PositiveIcon } from '../../utils/svgIcons';

const ProductQuantityChanging = ({
  handleIncrementQuantity,
  handleDecrementQuantity,
  currentQuantity,
  className,
  textStyle,
}) => {
  return (
    <div className={className}>
      <button className="cursor-pointer " onClick={handleDecrementQuantity}>
        <NegetiveIcon></NegetiveIcon>
      </button>{' '}
      <p className={textStyle ? textStyle : ''}> {currentQuantity}</p>
      <button className="cursor-pointer" onClick={handleIncrementQuantity}>
        <PositiveIcon></PositiveIcon>
      </button>
    </div>
  );
};

export default ProductQuantityChanging;
