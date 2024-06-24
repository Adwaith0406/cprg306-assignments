"use client"; 

import React from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemData from './items.json';
import { useState } from 'react';




  

const Page = () => {

  const [items, setItems] = useState(itemData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> {/* Pass handleAddItem to NewItem */}
      <ItemList items={items} /> {/* Pass items state to ItemList */}
    </main>
  );
};

export default Page;
