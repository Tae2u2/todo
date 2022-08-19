import React, { useEffect } from "react";
import AppRouter from "../router/Router";
import { useUserTokenStore } from "../store/store";

function App() {

  const checkUserToken =()=>{
    if(localStorage.getItem("USER_TOKEN")){
      useUserTokenStore.setState({userToken : localStorage.getItem("USER_TOKEN")});
    }else{
      useUserTokenStore.setState({userToken : null});
    }
  }

  useEffect(() => {
    checkUserToken();
  }, [])
  

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
