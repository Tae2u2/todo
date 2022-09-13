import React, {useState} from 'react'
import TodoApi from '../../api/TodoApi';
import useGetTodos from '../../hooks/useGetTodos';
import useHandleModal from '../../hooks/useHandleModal';
import { ModifiedTodoState, TodoIdState, TodosState } from '../../types/TodoTypes';
import Button from '../Button';

const TodoEdit = ({ todos }: {todos: TodosState}) => {
    const [modifiedTitle, setModifiedTitle] = useState(todos.title);
    const [modifiedContent, setModifiedContent] = useState(todos.content);
    const {data , loading , getTodos} = useGetTodos();
    const {isOpen, open, close} = useHandleModal();


    const handleModify = async ({modifiedTitle, modifiedContent}: ModifiedTodoState,id : TodoIdState["id"]) => {
      const modifyConfirm = window.confirm("수정하시겠습니까?");
      if(modifyConfirm){
      const response = await TodoApi.update({modifiedTitle, modifiedContent},{id});
      if(response === 200){
        getTodos();
        close();
      }
      }
    };

    return (
    <div className="edit-container">
      <form className="edit-form">
          <input
            type="text"
            name="title"
            onChange={(e)=>setModifiedTitle(e.target.value)}
            value={modifiedTitle}
          />
          <input
            type="text"
            name="content"
            onChange={(e)=>setModifiedContent(e.target.value)}
            value={modifiedContent}
          />
          <Button disabled={false} children="수정" handleClick={()=>handleModify({modifiedTitle, modifiedContent} , todos.id)} />
          <Button disabled={false} children="닫기" handleClick={()=>close()} />
      </form>
     </div>
  )
}

export default TodoEdit