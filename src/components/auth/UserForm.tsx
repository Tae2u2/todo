import React, { useState } from 'react'
import Toast from '../../utils/Toast';
import Button from '../Button';

type MyFormProps = {
  onSubmit: (form: { email: string; password: string }) => void;
  isNewAccount : boolean;
};

const UserForm = ({onSubmit , isNewAccount} :MyFormProps) => {
    const [showToast , setShowToast] = useState(false);
    const [form, setForm] = useState({
      email: '',
      password: ''
    });
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value
      });
    };

    const { email, password } = form;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(form.email === "" || form.password === ""){
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);  
        }, 2000);
      }else{
        onSubmit(form);
        setForm({
          email: '',
          password: ''
        });
      }
    };
    
  return (
    <>
    <form onSubmit={handleSubmit} >
        <input
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          placeholder="이메일"
          required
        />
        { !/\S+@\S+\.\S+/.test(email) ? <small>이메일은 @ , .을 포함해야 합니다</small> : <small>확인되었습니다</small>}
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
          minLength={8}          
          required
        />
        {password.length < 8 ?
        <small>비밀번호는 8자 이상이어야 합니다</small> : <small>확인되었습니다</small>
        }

        {isNewAccount ? 
        <Button disabled={false} children="계정생성" handleClick={(e : React.FormEvent<HTMLFormElement>) => handleSubmit(e)}/>        
        :<Button disabled={false} children="로그인" handleClick={(e : React.FormEvent<HTMLFormElement>) => handleSubmit(e)}/>        
        }
      </form>
      {showToast && <Toast showToast={false} title="이메일과 비밀번호를 확인해주세요" />}
      </>
  )
}

export default UserForm;