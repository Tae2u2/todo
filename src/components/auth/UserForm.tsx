import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import AuthApi from '../../api/AuthApi';
import Button from '../Button';

const UserForm = ({isNewAccount , setIsNewAccount} :{isNewAccount : boolean, setIsNewAccount: any}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (event : React.FormEvent) => {
        event.preventDefault();
        const response = await AuthApi.signup({email , password});
        if(response === 200){
          setIsNewAccount(!isNewAccount);
        }      
    };
    
    const handleLogin = async (event : React.FormEvent) => {
        event.preventDefault();
          const response = await AuthApi.login({email , password});
          saveToken(response);
          navigate("/", { replace: true });

    };

    const saveToken = (token : string) => {
      localStorage.setItem("USER_TOKEN", JSON.stringify(token));
    };
    
  return (
    <form >
        <input
          name="email"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          placeholder="이메일"
          required
        />
        <br />
        <input
          name="password"
          type="password"
          onChange={(e)=>setPassword(e.target. value)}
          value={password}
          placeholder="비밀번호"
          minLength={8}
          required
        />
        <br />
        {isNewAccount ? 
        <Button disabled={false} children="계정생성" handleClick={(e : React.FormEvent) => handleSignUp(e)}/>        
        :<Button disabled={false} children="로그인" handleClick={(e : React.FormEvent) => handleLogin(e)}/>        
        }
      </form>
  )
}

export default UserForm;