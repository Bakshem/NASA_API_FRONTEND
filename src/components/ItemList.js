import React, { useEffect, useState } from "react";
import api from "../services/api";
import DeleteButton from "./DeleteButton";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/items");
        setItems(response.data);
      } catch (err) {
        console.error("Failed to fetch items:", err);
      }
    };
    fetchItems();
  }, []);

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