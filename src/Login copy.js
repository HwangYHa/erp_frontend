import React, { useState } from 'react'
import axios from 'axios';
import Footer from './component/Footer';
import {useNavigate} from 'react-router-dom';

// axios를 쓰는 목적에 서버에 데이터를 요청할때 비동기적으로 요청하려고

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const Auth = async (e) => {
    e.preventDefault();
    try {
      console.log("1")
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      console.log("2")
      navigate.push("/dashboard");
    } catch (error) {
      if (error.response) {
        console.log("3")
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div>
      <div className="homeContent">
        <img src="/img/gursungLogo.png" className="App-logo" alt="logo" />
        <h2 className="logo_Text">재고관리 시스템</h2>
      </div>

      <div className="login">
        <section>
          <form onSubmit={Auth}>
          <p className="has-text-centered">{msg}</p>
            <div className="account">

              <input
                type="text"
                id="email"
                name="email"
                placeholder="이메일 또는 전화번호"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                aria-label="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" value="1" className="loginBtn">
              로그인
            </button>
          </form>
        </section>
        <div className="keep_check">
          <input
            type="checkbox"
            id="keep"
            name="nvlong"
            className="input_keep"
            value="on"
          />
          <label htmlFor="keep" className="keep_text">
            로그인 상태 유지
          </label>
        </div>
        <div className="findPswd">
          <a href="#!">비밀번호를 잊으셨나요?</a>
        </div>
        <div id="contentCurve_01" />
        <button className="newAccountRegst" href="#" id="Regst">
          새 계정 만들기
        </button>
      </div>

      <Footer />
    </div>
  );
}
