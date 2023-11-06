// item.js

import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li onClick={() => onSelect(name)}>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
