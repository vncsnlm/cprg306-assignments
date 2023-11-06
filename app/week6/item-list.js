import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  
  const sortedItems = items.slice().sort((a, b) => {
   
    return a.name.localeCompare(b.name);
  });

  return (
    <ul>
      {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </ul>
  );
};

export default ItemList;