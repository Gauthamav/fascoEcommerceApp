import React from 'react'

const ProductDeliverySection = ({icon:Icon , text,date}) => {
  return (
    <div className='row gap-2'>
    <Icon></Icon>
    <p className='text-sm'>{text}</p>
    <p className='text-xs font-poppins'>{date}</p>
      
    </div>
  )
}

export default ProductDeliverySection
