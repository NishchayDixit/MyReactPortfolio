import React, { useState } from 'react';
import 'boxicons';

const CustomBoxIcon = ({ name, type, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <box-icon
      name={name}
      type={type}
      color={isHovered ? '#5ca2b7' : color}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></box-icon>
  );
};

export default CustomBoxIcon;