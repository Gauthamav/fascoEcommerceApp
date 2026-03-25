import React from 'react'

const ProductPageImageSection = ({image}) => {
  return (
    <div className=' flex justify-center  flex-1 '>
       <img className='max-w-[450px] h-full' src={image} alt="" />
    </div>
  )
}

export default ProductPageImageSection
