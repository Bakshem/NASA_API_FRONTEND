import React, { useState } from "react";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

const Home = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>NASA API APP</h1>
      <ItemForm onItemAdded={addItem} />
      <ItemList />
    </div>
  );
};

export default Home;