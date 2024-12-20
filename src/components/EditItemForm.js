import React, { useState } from 'react';
import axios from 'axios';

const EditItemForm = ({ item, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/items/${item._id}`, {
        title,
        description,
      });
      onUpdate(response.data);
    } catch (err) {
      console.error('Failed to update item:', err);
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItemForm;