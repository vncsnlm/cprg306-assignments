import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-2 mb-2">
      <div className="text-lg font-semibold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
};

export default Item;
