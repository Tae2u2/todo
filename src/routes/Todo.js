import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TodoFactory from "../components/TodoFactory";
import TodoList from "../components/TodoList";
import "../style/style.css";

const Todo = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);

  const getUserTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todos", {
        headers: { Authorization: localStorage.getItem("USER_TOKEN") },
      });
      setTodoList(response.data.data);
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getUserTodos();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("USER_TOKEN");
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/auth", { replace: true });
    }
  }, []);
  return (
    <div className="todo-container">
      <h1>🍉오늘 일정 : 시원한 수박 먹기🍉</h1>
      <TodoFactory getUserTodos={getUserTodos} />
      {todoList.map((todo, index) => (
        <TodoList
          key={index}
          id={todo.id}
          myTitle={todo.title}
          myContent={todo.content}
          getUserTodos={getUserTodos}
        />
      ))}
    </div>
  );
};

export default Todo;
