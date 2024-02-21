import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [todo, setTodo] = useState({
    name: '',
    category: '',
    date: '',
    isCompleted: false,
  });

  const handleSubmit = async (event) => {
    console.log("Send POST request")
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        name="name"
        value={todo.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="category"
        value={todo.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="date"
        name="date"
        value={todo.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default AddTodo;