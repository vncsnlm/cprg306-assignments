import React from 'react';
import NewItem from './new-item'; 

const Page = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <NewItem /> {}
    </main>
  );
};

export default Page;
