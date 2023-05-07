import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = { text: inputValue, timestamp: Date.now() };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const formatTimeDiff = (timestamp) => {
    const MINUTE_MS = 60 * 1000;
    const HOUR_MS = 60 * MINUTE_MS;
    const DAY_MS = 24 * HOUR_MS;
    const timeDiff = Date.now() - timestamp;

    if (timeDiff < HOUR_MS) {
      const minutes = Math.floor(timeDiff / MINUTE_MS);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDiff < DAY_MS) {
      const hours = Math.floor(timeDiff / HOUR_MS);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(timeDiff / DAY_MS);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new todo..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="todo-text">{todo.text}</span>
            <span className="todo-timestamp">{formatTimeDiff(todo.timestamp)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
