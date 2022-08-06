import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TodoList = ({ id, myTitle, myContent, getUserTodos }) => {
  const [newTitle, setNewTitle] = useState(myTitle);
  const [newContent, setNewContent] = useState(myContent);
  const [usingEdit, setUsingEdit] = useState(false);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setNewTitle(value);
    } else if (name === "content") {
      setNewContent(value);
    }
  };

  const handleDelete = async () => {
    const userConfirm = window.confirm("삭제하시겠습니까?");
    if (userConfirm) {
      const response = await axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: localStorage.getItem("USER_TOKEN") },
      });
      if (response.status === 200) {
        getUserTodos();
      } else {
        alert("죄송합니다. 다시 시도해주세요!");
        return false;
      }
    } else {
      return false;
    }
  };

  const handleEdit = async () => {
    const userConfirm = window.confirm("수정하시겠습니까?");
    if (userConfirm) {
      const response = await axios.put(
        `http://localhost:8080/todos/${id}`,
        {
          title: newTitle,
          content: newContent,
        },
        {
          headers: { Authorization: localStorage.getItem("USER_TOKEN") },
        }
      );
      if (response.status === 200) {
        setUsingEdit(false);
        getUserTodos();
      } else {
        alert("죄송합니다. 다시 시도해주세요!");
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <div
      className={usingEdit ? "todo-list-zone edit-change" : "todo-list-zone"}
    >
      {usingEdit ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            name="title"
            onChange={onChange}
            value={newTitle}
            readOnly={usingEdit ? false : true}
          />
          <input
            type="text"
            name="content"
            onChange={onChange}
            value={newContent}
            readOnly={usingEdit ? false : true}
          />
          <button>수정</button>
        </form>
      ) : (
        <Link to={`/${id}`}>
          <h4>
            🍉 {myTitle} - {myContent}
          </h4>
        </Link>
      )}
      <div className="btn-line">
        <button onClick={() => setUsingEdit(!usingEdit)}>
          {usingEdit ? "취소" : "수정"}
        </button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoList;
