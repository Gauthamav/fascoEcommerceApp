import React from 'react';
import Star from '../Arrival-Section/Star';


const TestimonialCard = ({ data, index, currentIndex }) => {
  return (
    <div
      className={`w-full row  transition-all ease-in-out duration-900 justify-evenly  flex-shrink-0 bg-white rounded-md shadow-md  py-8 text-primary  ${
        index === currentIndex ? 'md:scale-150 sm:scale-100 scale-80 z-50' : '  md:scale-95 sm:scale-70 scale-60  z-0 '
      } `}>
      <div>
        <img className="sm:w-[120px] w-[90px] shadow-[-10px_9px_0px_#D9D9D9]" src={data.images} alt="" />
      </div>
      <div className="flex flex-col gap-3 font-poppins">
        <p className="  text-tiny  !leading-relaxed max-w-[200px]">{data.desc}</p>
        <div className="w-2.5 row">
          {
             data.stars.map((star,index) => (

               <Star key={index}></Star>
             ))
          }
        </div>
        <hr className="border-t border-gray-300 w-2/3" />
        <p className="font-volkhov text-xs">{data.name}</p>
        <p className=" text-tiny light-text ">{data.job}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
