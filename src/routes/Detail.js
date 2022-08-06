import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/style.css";

const Detail = () => {
  const [detailList, setDetailList] = useState(null);

  const getTodoById = async (url) => {
    const id = url.slice(1);
    const response = await axios.get(`http://localhost:8080/todos/${id}`, {
      headers: { Authorization: localStorage.getItem("USER_TOKEN") },
    });
    setDetailList(response.data.data);
  };

  const getUserId = () => {
    let url = window.location.pathname;
    getTodoById(url);
  };

  useEffect(() => {
    getUserId();
  }, []);
  return (
    <>
      {detailList ? (
        <div id="detail-box">
          <small>{detailList.createdAt.slice(0, 10)}</small>
          <h3>{detailList.title}</h3>
          <p>{detailList.content}</p>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default Detail;
