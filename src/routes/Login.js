import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const navigate = useNavigate();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //회원가입
        const response = await axios.post(
          "http://localhost:8080/users/create",
          {
            email,
            password,
          }
        );
        if (response.status === 200) {
          setCheckBox(true);
          setTimeout(() => {
            setCheckBox(false);
          }, 2000);
          setNewAccount(false);
        }
      } else {
        //로그인
        const response = await axios.post("http://localhost:8080/users/login", {
          email,
          password,
        });
        if (response.status === 200) {
          saveToken(response.data.token);
          navigate("/", { replace: true });
        }
      }
    } catch (error) {
      return false;
    }
  };

  const saveToken = (token) => {
    localStorage.setItem("USER_TOKEN", JSON.stringify(token));
  };

  useEffect(() => {
    const user = localStorage.getItem("USER_TOKEN");
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/auth", { replace: true });
    }
  }, []);
  return (
    <div className="login-container">
      {newAccount ? (
        <div className="change-box">
          <h1>🍉SignUp</h1>
          <button onClick={() => setNewAccount(false)}>
            로그인하겠습니다!
          </button>
        </div>
      ) : (
        <div className="change-box">
          <h1>🍉Login</h1>
          <button onClick={() => setNewAccount(true)}>
            계정을 생성하고 싶다면 클릭!
          </button>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          onChange={onChange}
          value={email}
          placeholder="이메일"
          required
        />
        <br />
        <input
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          placeholder="비밀번호"
          minLength="8"
          required
        />
        <br />
        <input
          className="login-btn"
          type="submit"
          value={newAccount ? "계정생성" : "로그인"}
        />
      </form>
      {checkBox && <h4>회원가입 성공!</h4>}
    </div>
  );
};

export default Login;
