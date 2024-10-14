'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the structure (type) for each todo item
type Todo = {
  id: number;
  name: string;
  status: string;
};

export default function Todos() {
  // Use the defined Todo type in the state
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://your-backend-url.com/todos');
      // Assuming response.data is an array of todos
      setTodos(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to load todos');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Your Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name} - {todo.status}</li>
        ))}
      </ul>
    </div>
  );
}
