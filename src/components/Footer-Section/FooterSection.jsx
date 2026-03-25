import React from 'react';
import { footerItemsData } from '../../utils/footerSectionData';

const FooterSection = () => {
  return (
    <>
    <hr className='border-t-1 border-[#DEDFE1] mt-10  ' />
       <div className="column  w-full py-5 sm:px-10 gap-10 ">
        <div className="flex flex-col sm:px-24 justify-between items-center sm:flex-row   w-full gap-5">
          <div>
            <h6 className="text-lg text-primary  font-volkhov">FASCO</h6>
          </div>
          <ul className="row md:gap-5 gap-2">
            {footerItemsData.map(item => (
              <li className="text-xs light-heading" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <p className='text-xs light-heading'>Copyright © 2022 Xpro . All Rights Reseved.</p>
      </div>
    </>
  );
};

export default FooterSection;
