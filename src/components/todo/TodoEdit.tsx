import React, {useState} from 'react'
import TodoApi from '../../api/TodoApi';
import { useOpenEditStore } from '../../store/store';
import { ModifiedTodoState, TodoIdState, TodosState } from '../../types/TodoTypes';
import { CheckStatusNumber } from '../../utils/CheckStatus';
import Button from '../Button';

const TodoEdit = ({ todos }: {todos: TodosState}) => {
    const [modifiedTitle, setModifiedTitle] = useState(todos.title);
    const [modifiedContent, setModifiedContent] = useState(todos.content);
    const setOpenEdit = useOpenEditStore((state)=>state.setOpenEdit);

    const handleModify = async ({modifiedTitle, modifiedContent}: ModifiedTodoState,id : TodoIdState["id"]) => {
      const modifyConfirm = window.confirm("삭제하시겠습니까?");
      if(modifyConfirm){
      const response = await TodoApi.update({modifiedTitle, modifiedContent},{id});
      CheckStatusNumber(response , "수정");
      setOpenEdit();
      }
    }

    return (
    <form>
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
          <Button disabled={false} children="수정" handleClick={handleModify({modifiedTitle, modifiedContent} , todos.id)} />
          <Button disabled={false} children="닫기" handleClick={setOpenEdit} />
    </form>
  )
}

export default TodoEdit