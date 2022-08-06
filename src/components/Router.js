import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Login from "../routes/Login";
import Todo from "../routes/Todo";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />}></Route>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
