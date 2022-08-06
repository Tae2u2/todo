import React, { useState } from "react";
import axios from "axios";

const TodoFactory = ({ getUserTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/todos",
        {
          title,
          content,
        },
        { headers: { Authorization: localStorage.getItem("USER_TOKEN") } }
      );
      getUserTodos();
      setTitle("");
      setContent("");
    } catch (error) {
      return false;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        onChange={onChange}
        value={title}
        placeholder="할 일"
        required
      />
      <input
        name="content"
        type="text"
        onChange={onChange}
        value={content}
        placeholder="상세메모"
        required
      />
      <input type="submit" id="input-btn" value="입력" />
    </form>
  );
};

export default TodoFactory;
