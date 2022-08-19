import React, { useEffect , Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Auth from "../routes/Auth";
import { useUserTokenStore } from "../store/store";
import Loading from "../utils/Loading";

const Detail = lazy(()=> import("../routes/Detail"));
const Todo = lazy(()=>import("../routes/Todo"));

const AppRouter = () => {
  const navigate = useNavigate();
  const { userToken } = useUserTokenStore();


  const handleUserLocation = async () => {
      if(userToken){
        navigate("/", { replace: true });
      }else {
        navigate("/auth", { replace: true });
      }
    };

    useEffect(()=>{
      handleUserLocation();
    },[]);
    
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
      <Suspense fallback={<Loading />}>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Suspense>
      </Routes>
    </Router>
  );
};

export default AppRouter;
