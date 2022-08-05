import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("USER_TOKEN");
    if (user) {
      console.log("있습니다");
      navigate("/", { replace: true });
    } else {
      console.log("없습니다");
      navigate("/auth", { replace: true });
    }
  }, []);
  return <div>Todo</div>;
};

export default Todo;
