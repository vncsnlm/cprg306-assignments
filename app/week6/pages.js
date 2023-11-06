import React, { useState } from 'react'; // Import useState
import Layout from '../layout';
import ItemList from './item-list';
import NewItem from './new-item'; // Import the NewItem component
import itemsData from './items.json'; // Import items.json

const Page = () => {
  // Initialize a state variable 'items' with the data from items.json
  const [items, setItems] = useState(itemsData);

  // Create an event handler function 'handleAddItem' that adds a new item to 'items'
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <Layout>
      <main className="p-4">
        <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>
    </Layout>
  );
};

export default Page;
