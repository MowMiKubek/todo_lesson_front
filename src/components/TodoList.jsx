import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      fetchTodos();
  }, []);

  const fetchTodos = async () => {
      console.log("fetchTodos")
  };

  const toggleComplete = async (id) => {
      console.log("toggleComplete")
  };

  const deleteTodo = async (id) => {
      console.log("deleteTodo")
  };

  return (
    <div>
      <h1>TODO List</h1>
      <ul className='todo-list'>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
             />
        ))}
        <TodoItem 
            key={1} 
            todo={
              {
                id: 1,
                name: "Test",
                category: "Test",
                date: "2021-01-01",
                isCompleted: false
              }
            }
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
             />
        <TodoItem 
            key={2} 
            todo={
              {
                id: 2,
                name: "Test2",
                category: "Test2",
                date: "2021-01-01",
                isCompleted: false
              }
            }
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
             />
        <TodoItem 
            key={3} 
            todo={
              {
                id: 3,
                name: "Test3",
                category: "Test3",
                date: "2021-01-01",
                isCompleted: true
              }
            }
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
             />
      </ul>
    </div>
  );
};

export default TodoList;