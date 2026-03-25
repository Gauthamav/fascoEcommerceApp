import React from 'react'

const CheckoutFormInputFields = ({onChange, placeholder}) => {
  return (
           <input onChange={onChange} className='w-full pl-5 h-[45px] outline-none border border-darkGray placeholder:darkGray placeholder:text-xs' placeholder={placeholder}></input>
  )
}

export default CheckoutFormInputFields
