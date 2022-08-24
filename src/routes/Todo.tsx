import { useEffect, useState } from "react";
import TodoFactory from "../components/todo/TodoFactory";
import TodoList from "../components/todo/TodoList";
import { TodosState } from "../types/TodoTypes";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import TodoApi from "../api/TodoApi";


const Todo = () => {
  const navigate = useNavigate();
  const [todos , setTodos] = useState<TodosState[]>([]);
  const [showToast , setShowToast] = useState(false);


  const onSubmit = async (form : {title:string; content: string}) =>{
    try{
     const response = await TodoApi.add(form);
     if(response === 200){
      getTodos();
     }
    }catch(error){
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);  
      }, 2000);
    }
  }



	const getTodos = async () => {
		const todosResponse = await TodoApi.get();
		setTodos(todosResponse);
	}

  const handleUserLocation = async () => {
      if(localStorage.getItem("USER_TOKEN")){
        navigate("/", { replace: true });
      }else {
        navigate("/auth", { replace: true });
      }
    };

  useEffect(() => {
    handleUserLocation();
    getTodos();
  },[]);

  return (
    <div className="todo-container">
      <h1>🍉수박 먹기🍉</h1>
      <TodoFactory onSubmit={onSubmit}/>
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
