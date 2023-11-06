import React from 'react';
import Layout from '../layout';
import ItemList from './item-list'; // Import the ItemList component

const Page = () => {
  return (
    <Layout>
      <main className="p-4">
        <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
        <ItemList />
      </main>
    </Layout>
  );
};

export default Page;