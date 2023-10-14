import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');

  const handleAddBook = () => {
    addBook({
      id: Date.now(),
      title,
      reviews: [],
    });
    setTitle('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddBook}>Add</button>
    </div>
  );
};

export default AddBook;
