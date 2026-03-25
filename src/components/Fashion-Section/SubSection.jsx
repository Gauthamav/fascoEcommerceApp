import React from 'react';

const SubSection = ({ className, text }) => {
  return <p className={className}>{text ? text : ''}</p>;
};

export default SubSection;
