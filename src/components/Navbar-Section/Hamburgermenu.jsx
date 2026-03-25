import React from 'react'
import { Link } from 'react-router'
import { CloseIcon } from '../../utils/svgIcons'


const Hamburgermenu = ({navItemsData,navIcons,location,active,setActive}) => {
 
    const handleClose =() => {
        setActive(!active)
    }


  return (
    <div className='h-screen inset-0   bg-white font-poppins text-primary   fixed z-50'>
        <div className='relative w-full h-full '>

         <div onClick={handleClose} className='absolute left-10/12 top-5 cursor-pointer'>
            <CloseIcon></CloseIcon>
         </div>
       <ul className=" flex  gap-5 pt-10  flex-col justify-center items-center ">
        {navItemsData.map(item => (
            <Link key={item.id} to={item.route}>
            <li
              className={`text-xs light-heading px-2 py-1.5   ${
                  navIcons && location === item.route ? 'border-b border-primary' : ''
                }`}>
              {item.name}
            </li>
            
          </Link>

))}
        {!navIcons && (
            <Link to="/signUp">
            <li className="text-xs light-heading px-2 py-1.5 cursor-pointer">Sign Up</li>
          </Link>
        )}
      </ul>
      {navIcons && (
          <div className="row justify-center gap-6 pt-5">
          {navIcons.map(icons => (
              <Link to={icons.route} key={icons.id}>
              <img className="w-4" src={icons.image} alt="" />
            </Link>
          ))}
        </div>
      )}
               
      </div>
    </div>
  )
}

export default Hamburgermenu
