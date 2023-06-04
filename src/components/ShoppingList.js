import React, { useState } from "react";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    if (!search) return true;

    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span className="category">{item.category}</span>
            <button className="add">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

