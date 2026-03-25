import React from 'react';


const LoginImageSection = ({image}) => {
  return (
    <div className=" w-full row justify-center">
      <img className="max-w-full " src={image} alt="" />
    </div>
  );
};

export default LoginImageSection;
