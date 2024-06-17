'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className=' flex'>
        <h2>Stor By</h2>
      <button
        onClick={() => setSortBy('name')} className=' h-7 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-orange-700 lg focus:shadow-outline focus:bg-orange-500'
      >Name
      </button>
      <button
        onClick={() => setSortBy('category')} className='h-7 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-orange-700 lg focus:shadow-outline focus:bg-orange-500'
      >Category
      </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}