import React from 'react';
import CheckoutPageTitle from './CheckoutPageTitle';
import { Link } from 'react-router';
import CheckoutFormInputFields from './CheckoutFormInputFields';



const CheckoutFormSection = () => {
    const handleName = (e) => {
        console.log(e.target.value)
    }
  return (
    <div className="w-full flex flex-col wrapper-left  gap-10 pt-10 text-primary">
      <div>
        <div className='row justify-between'>
          <CheckoutPageTitle title="Contact"></CheckoutPageTitle>
          <p className='text-xs'>Have an account? <Link className='text-blue-400'>  Create Account</Link></p>
        </div>
     <CheckoutFormInputFields onChange={(e) => handleName(e)} placeholder={'Email Address'}></CheckoutFormInputFields>
      </div>
      <div>
            <CheckoutPageTitle title="Delivery"></CheckoutPageTitle>
                 <CheckoutFormInputFields onChange={(e) => handleName(e)} placeholder={'Email Address'}></CheckoutFormInputFields>

      </div>
    </div>
  );
};

export default CheckoutFormSection;
