import React from 'react'

const  SingleAuthInputField = ({placeholder}) => {
  return (
    <input className= ' w-full border-0  pl-0.5 border-b-1 text-poppins text-[#9D9D9D]  border-[#9D9D9D] focus:border-b-1-[#9D9D9D]  focus:outline-none placeholder:text-[13px] pb-1.5' placeholder={placeholder}></input>
  )
}

export default  SingleAuthInputField
