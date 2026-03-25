import React from 'react';

const AuthPageHeading = ({title,description}) => {
  return (
    <div>
      <h1 className="text-2xl  pb-10  font-volkhov  text-primary">{title}</h1>
      <p className="text-black  text-lg font-volkhov sub-heading">{description}</p>
    </div>
  );
};

export default AuthPageHeading;
