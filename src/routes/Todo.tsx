import { useEffect, useState } from "react";
import TodoFactory from "../components/todo/TodoFactory";
import TodoList from "../components/todo/TodoList";
import { TodosState } from "../types/TodoTypes";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import TodoApi from "../api/TodoApi";
import Toast from "../utils/Toast";
import useGetTodos from "../hooks/useGetTodos";
import Loading from "../utils/Loading";


const Todo = () => {
  const navigate = useNavigate();
  const [todos , setTodos] = useState<TodosState[]>([]);
  const [showToast , setShowToast] = useState(false);
  const {data , loading , getTodos} = useGetTodos();

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

  const handleUserLocation = async () => {
      if(localStorage.getItem("USER_TOKEN")){
        navigate("/", { replace: true });
      }else {
        navigate("/auth", { replace: true });
      }
    };

  useEffect(()=>{
    handleUserLocation();
    setTodos(data || []);
  },[])


  if (loading) {
    return <Loading />
  }
  return (
    <div className="todo-container">
      <h1>🍉수박 먹기🍉</h1>
      <TodoFactory onSubmit={onSubmit}/>
      {todos.map((todo, index) => (
        <TodoList 
          key={index}
          todos={todo}
        />
      ))}
    {showToast && <Toast showToast={false} title="죄송합니다. 다시 시도해주세요" />}
    </div>
  );
};

export default Todo;
