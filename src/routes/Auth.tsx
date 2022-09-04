import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import UserForm from "../components/auth/UserForm";
import AuthApi from "../api/AuthApi";
import "../style/style.css";
import Toast from "../utils/Toast";


const Auth = () => {
  const navigate = useNavigate();
  const [isNewAccount , setIsNewAccount] = useState(false);
  const [showToast , setShowToast] = useState(false);

  const onSubmit = async (form: { email: string; password: string }) => {
    try{
    if(isNewAccount){
      const response = await AuthApi.signup(form);
      if(response.message === "계정이 성공적으로 생성되었습니다"){
        saveToken(response.token);
        navigate("/", { replace: true });     
      }      
    }else{
      const response = await AuthApi.login(form);
      if(response.message === "성공적으로 로그인 했습니다"){
        saveToken(response.token);
        navigate("/", { replace: true });
      }
    }
  }catch(error){
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);  
    }, 2000);
  }
  };

  const saveToken = (token : string) => {
    localStorage.setItem("USER_TOKEN", JSON.stringify(token));
  };
  
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
      <UserForm onSubmit={onSubmit} isNewAccount={isNewAccount}/>
      {showToast && <Toast showToast={false} title="아이디 또는 비밀번호를 확인해주세요"/>}
    </div>
  );
};

export default Auth;
