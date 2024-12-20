import React, { useState } from "react";
import api from "../services/api";

const ItemForm = ({ onItemAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/items", { title, description });
      onItemAdded(response.data);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Failed to create item:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;