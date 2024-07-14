"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ensure correct import for client-side routing
import { useUserAuth } from '../_utils/auth-context'; // Ensure the path is correct
import ItemList from './item-list';
import NewItem from './new-item';
import itemData from './items.json';
import MealIdeas from './meal-idea';

function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/week-8'); // Redirect to login page if not authenticated
    }
  }, [user, router]);

  if (!user) {
    return null; // Render nothing while redirecting
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItem = item.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedItem);
  };

  return (
    <main className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default ShoppingListPage;
