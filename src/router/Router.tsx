import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Auth from "../routes/Auth";
import Loading from "../utils/Loading";

const Detail = lazy(()=> import("../routes/Detail"));
const Todo = lazy(()=>import("../routes/Todo"));

const AppRouter = () => {

  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
