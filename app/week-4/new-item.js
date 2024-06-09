"use client";

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <dev className = " flex justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-slate-800 h-50 w-96 rounded-lg">
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='Item Name'
                    className="border p-2 w-full text-black rounded-lg"
                />
            </div>
            <div className=' flex justify-between'>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    max="99"
                    required
                    className="border p-2 w-50 text-black rounded-lg"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-50 text-black rounded-lg"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">+</button>
        </form>

        </dev>

    );
}