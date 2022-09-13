import { useState } from "react";
import { Link } from "react-router-dom";
import TodoApi from "../../api/TodoApi";
import useGetTodos from "../../hooks/useGetTodos";
import useHandleModal from "../../hooks/useHandleModal";
import { TodoIdState, TodosState } from "../../types/TodoTypes";
import Button from "../Button";
import TodoEdit from "./TodoEdit";

const TodoList = ({ todos }: {todos: TodosState}) => {
  const {data , loading , getTodos} = useGetTodos();
  const {isOpen, open, close} = useHandleModal();
  
  
  const handleDelete = async (id : TodoIdState["id"]) =>{
    const deleteConfirm = window.confirm("삭제하시겠습니까?");
    if(deleteConfirm){
      const response = await TodoApi.delete({id});
      if(response === 200){
        getTodos();
      }
    }
  };

  return (
    <div className="todo-list-zone">
      {isOpen && <TodoEdit todos={todos} /> }
        <Link to={`/${todos.id}`}>
          <h4>
            🍉 {todos.title.slice(0,28)} {todos.title.length >28 && "..."}
          </h4>
        </Link>
      <div className="btn-line">
        <Button disabled={false} children="수정" handleClick={()=>open()}/>        
        <Button disabled={false} children="삭제" handleClick={()=>handleDelete(todos.id)}/>
      </div>
    </div>
  );
};

export default TodoList;
