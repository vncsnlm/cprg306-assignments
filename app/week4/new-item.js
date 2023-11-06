"use client";

import React, { useState } from 'react';

const NewItem = () => {
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');
  
    
    const handleSubmit = (e) => {
      e.preventDefault(); 
      
      const newItem = {
        name,
        quantity,
        category,
      };
  
      
      console.log(newItem);
  
      
      alert(`New Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
  
      
      setName('');
      setQuantity(1);
      setCategory('produce');
    };
  
    return (
      <div>
        <h2>Add a New Item</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name">Item Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
  
          {/* Quantity Field */}
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="99"
              required
            />
          </div>
  
          {/* Category Field */}
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              {}
            </select>
          </div>
  
          {}
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  };
  
  export default NewItem;
