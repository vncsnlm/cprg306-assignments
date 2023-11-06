import React from 'react';
import Item from './item'; 

const ItemList = ({ items, onItemSelect }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={onItemSelect}
        />
      ))}
    </ul>
  );
};

export default ItemList;
