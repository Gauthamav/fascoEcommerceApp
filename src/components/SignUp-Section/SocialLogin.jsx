import React from 'react'
import icon1 from '../../assets/AuthenticationSection-Images/google.svg'

const SocialLogin = ({icon,text}) => {
  return (
    <div className='row text-poppins border border-[#5B86E5] rounded-md px-4 py-1.5 gap-2'>
      <img className='w-[22px]' src={icon} alt="" />
      <p className='text-xs  '>{text}</p>
    </div>
  )
}

export default SocialLogin
