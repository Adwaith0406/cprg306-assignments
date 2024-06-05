import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
