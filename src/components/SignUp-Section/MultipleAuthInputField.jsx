import React from 'react';
import SingleAuthInputField from './SingleAuthInputField';

const MultipleAuthInputField = ({ placeholder }) => {
  return (
    <div className="row  gap-5">
      {placeholder.map((name, index) => (
        <SingleAuthInputField key={index} placeholder={name}></SingleAuthInputField>
      ))}
    </div>
  );
};

export default MultipleAuthInputField;
