import React, { useEffect, useState } from "react";
import TodoApi from "../api/TodoApi";
import { TodosState } from "../types/TodoTypes";

const Detail = () => {
  const [details, setDetails] = useState<TodosState>();

  const getTodoById = async (url : string) => {
    const id = url.slice(1);
    const response = await TodoApi.getById({id})
    setDetails(response);
  };

  const getUserId = () => {
    let url = window.location.pathname;
    getTodoById(url);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return (
        <div id="detail-box">
          {details && <>
          <small>{details.createdAt.slice(0, 10)}</small>
          <h3>{details.title}</h3>
          <p>{details.content}</p>
          </>
          }
        </div>
  );
};

export default Detail;
