import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import AuthApi from '../../api/AuthApi';
import { CheckStatusNumber } from '../../utils/CheckStatus';
import Button from '../Button';
import { useIsNewAccountStore } from '../../store/store';

const UserForm = () => {
    const setIsNewAccount = useIsNewAccountStore((state) => state.setisNewAccount);
    const isNewAccount = useIsNewAccountStore((state)=>state.isNewAccount);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (event : React.FormEvent) => {
        event.preventDefault();
            const response = await AuthApi.signup({email , password});
            CheckStatusNumber(response , "계정생성");
            setIsNewAccount();        
    };
    
    const handleLogin = async (event : React.FormEvent) => {
        event.preventDefault();
          const response = await AuthApi.login({email , password});
          CheckStatusNumber(response, "로그인");
          navigate("/", { replace: true });
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
        <Button disabled={false} children="계정생성" handleClick={handleSignUp}/>        
        :<Button disabled={false} children="로그인" handleClick={handleLogin}/>        
        }
      </form>
  )
}

export default UserForm;