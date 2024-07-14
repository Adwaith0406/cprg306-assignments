import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      className="bg-gray-800 text-white p-4 m-2 lg:w-80 cursor-pointer"
      onClick={() => onSelect(name)} 
    >
      <div className="flex justify-between">
        <span>{name}</span>
      </div>
      <div className="text-sm text-gray-400">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;
