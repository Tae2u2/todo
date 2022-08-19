import React from "react";
import { Link } from "react-router-dom";
import TodoApi from "../../api/TodoApi";
import { useOpenEditStore } from "../../store/store";
import { TodoIdState, TodosState } from "../../types/TodoTypes";
import { CheckStatusNumber } from "../../utils/CheckStatus";
import Button from "../Button";
import TodoEdit from "./TodoEdit";

const TodoList = ({ todos }: {todos: TodosState}) => {
  const setOpenEdit = useOpenEditStore((state)=>state.setOpenEdit);
  const openEdit = useOpenEditStore((state) => state.openEdit);
  
  const handleDelete = async (id : TodoIdState["id"]) =>{
    const deleteConfirm = window.confirm("삭제하시겠습니까?");
    if(deleteConfirm){
      const response = await TodoApi.delete({id});
      CheckStatusNumber(response , "삭제");
    }
  };

  return (
    <div className="todo-list-zone">
      {openEdit && <TodoEdit todos={todos}/> }
        <Link to={`/${todos.id}`}>
          <h4>
            🍉 {todos.title}
          </h4>
        </Link>
      <div className="btn-line">
        <Button disabled={false} children="수정" handleClick={setOpenEdit}/>        
        <Button disabled={false} children="삭제" handleClick={()=>handleDelete(todos.id)}/>
      </div>
    </div>
  );
};

export default TodoList;
