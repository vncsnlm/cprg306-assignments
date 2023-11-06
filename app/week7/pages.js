import React, { useState } from 'react';
import Layout from '../layout';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import items from '../week3/items-list';

const Page = () => {
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (name) => {
    const cleanedName = name.split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <Layout>
      <main className="p-4" style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div style={{ flex: 1 }}>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    </Layout>
  );
};

export default Page;
