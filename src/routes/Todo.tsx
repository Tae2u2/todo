import React, { useEffect, useState } from "react";
import TodoFactory from "../components/todo/TodoFactory";
import TodoList from "../components/todo/TodoList";
import "../style/style.css";
import TodoApi from "../api/TodoApi";
import { TodosState } from "../types/TodoTypes";


const Todo = () => {
  const [todos, setTodos] = useState<TodosState[]>([]);

  const getTodos = async () => {
    const todosResponse = await TodoApi.get();
    setTodos(todosResponse);
  }

  useEffect(() => {
    getTodos();
  },[]);

  return (
    <div className="todo-container">
      <h1>🍉수박 먹기🍉</h1>
      <TodoFactory />
      {todos.map((todo, index) => (
        <TodoList 
          key={index}
          todos={todo}
        />
      ))}
    </div>
  );
};

export default Todo;
