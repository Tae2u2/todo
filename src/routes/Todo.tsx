import React, { useEffect, useState } from "react";
import TodoFactory from "../components/todo/TodoFactory";
import TodoList from "../components/todo/TodoList";
import TodoApi from "../api/TodoApi";
import { TodosState } from "../types/TodoTypes";
import { useNavigate } from "react-router-dom";
import "../style/style.css";


const Todo = () => {
  const [todos, setTodos] = useState<TodosState[]>([]);
  const navigate = useNavigate();


  const handleUserLocation = async () => {
      if(localStorage.getItem("USER_TOKEN")){
        navigate("/", { replace: true });
      }else {
        navigate("/auth", { replace: true });
      }
    };

  const getTodos = async () => {
    const todosResponse = await TodoApi.get();
    setTodos(todosResponse);
  }

  useEffect(() => {
    handleUserLocation();
    getTodos();
  },[]);

  return (
    <div className="todo-container">
      <h1>🍉수박 먹기🍉</h1>
      <TodoFactory getTodos={getTodos}/>
      {todos.map((todo, index) => (
        <TodoList 
          key={index}
          todos={todo}
          getTodos={getTodos}
        />
      ))}
    </div>
  );
};

export default Todo;
