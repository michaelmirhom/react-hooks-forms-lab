import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems((items) => [...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;
