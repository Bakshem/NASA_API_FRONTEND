import React from "react";
import api from "../services/api";

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/items/${id}`);
      onDelete(id);
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;