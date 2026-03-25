import React from 'react'

const DealsTimer = ({time,info}) => {
  return (
    <div className="column gap-2">
          <p className=" px-4 py-3 text-xl rounded-md  text-primary shadow-2xl bg-white row font-digital">{time}</p>
          <p className='sm:text-base text-sm font-poppins'>{info}</p>
        </div>
  )
}

export default DealsTimer
