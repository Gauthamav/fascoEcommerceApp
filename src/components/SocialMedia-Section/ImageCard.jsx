import React from 'react'

const ImageCard = ({images}) => {
  return (
    <div>
      <img src={images} className='object-cover' alt="" />
    </div>
  )
}

export default ImageCard
