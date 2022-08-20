import React, { useState } from "react";
import TodoApi from "../../api/TodoApi";

const TodoFactory = ({getTodos} : {getTodos : any}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (event : React.FormEvent) => {
    event.preventDefault();
      const response = await TodoApi.add({title , content})
      if(response === 200){
        getTodos();
        setTitle("");
        setContent("");
      }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        placeholder="할 일"
        required
      />
      <input
        name="content"
        type="text"
        onChange={(e)=>setContent(e.target.value)}
        value={content}
        placeholder="상세메모"
        required
      />
      <input type="submit" id="input-btn" value="입력" />
    </form>
  );
};

export default TodoFactory;
