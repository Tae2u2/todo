import React from "react";
import Button from "../components/Button";
import UserForm from "../components/auth/UserForm";
import { useIsNewAccountStore } from "../store/store";

const Auth = () => {
  const setIsNewAccount = useIsNewAccountStore((state) => state.setisNewAccount);
  const isNewAccount = useIsNewAccountStore((state)=>state.isNewAccount);

  return (
    <div className="login-container">
      {isNewAccount ? (
        <div className="change-box">
          <h1>🍉SignUp</h1>
          <Button disabled={false} children="로그인 하러 가기" handleClick={setIsNewAccount}/>
        </div>
      ) : (
        <div className="change-box">
          <h1>🍉Login</h1>
          <Button disabled={false} children="계정 만들기" handleClick={setIsNewAccount}/>
        </div>
      )}     
      <UserForm />
    </div>
  );
};

export default Auth;
