import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://nasa-api-backend.onrender.com/api/items');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch items:", error);
      }
    };
    fetchItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>{item.title}</strong>: {item.description}
            <DeleteButton id={item._id} onDelete={() => setItems(items.filter((i) => i._id !== item._id))} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;