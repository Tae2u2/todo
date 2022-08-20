import React from "react";
import Button from "../components/Button";
import UserForm from "../components/auth/UserForm";
import { useState } from "react";
import "../style/style.css";


const Auth = () => {
  const [isNewAccount , setIsNewAccount] = useState(false);

  return (
    <div className="login-container">
      {isNewAccount ? (
        <div className="change-box">
          <h1>🍉SignUp</h1>
          <Button disabled={false} children="로그인 하러 가기" handleClick={()=>setIsNewAccount(!isNewAccount)}/>
        </div>
      ) : (
        <div className="change-box">
          <h1>🍉Login</h1>
          <Button disabled={false} children="계정 만들기" handleClick={()=>setIsNewAccount(!isNewAccount)}/>
        </div>
      )}     
      <UserForm isNewAccount={isNewAccount} setIsNewAccount={setIsNewAccount}/>
    </div>
  );
};

export default Auth;
