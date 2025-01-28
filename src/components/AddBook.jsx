// src/components/AddBook.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Add CSS styling for this component

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author && description && coverImageUrl) {
      const newBook = {
        id: Date.now(), // Using timestamp as a unique ID
        title,
        author,
        description,
        coverImageUrl,
      };

      // Logic to add the book (e.g., updating a global state, sending to backend)
      // Here, we just log it for now
      console.log("New Book Added:", newBook);

      // Redirect to Home or some other page after adding the book
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverImageUrl">Cover Image URL</label>
          <input
            type="url"
            id="coverImageUrl"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
