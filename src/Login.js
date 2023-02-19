import React, { useState, useReducer  } from 'react'
import axios from 'axios';
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// axios를 쓰는 목적에 서버에 데이터를 요청할때 비동기적으로 요청하려고

function reducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}


const initialState = {
  email: '',
  password: '',
  error: ''
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: state.email,
        password: state.password
      });
      navigate("/erp");
    } catch (error) {
      if (error.response) {
        dispatch({ type: 'SET_ERROR', payload: error.response.data.msg });
      } else {
        dispatch({ type: 'SET_ERROR', payload: '서버와 연결할 수 없습니다.' });
      }
    }
  };

  const accountCreate = () => {
    navigate("/Register");
  };

  return (
    <>
      <div className="login-frame">
      
        <div className="uiContextualLayerParent">
          <div className="fb_content clearfix">
            <div>
            
              <div className="container _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka">
                <div className="_8esk">
                  <div className="_8esl">
                    <div className="_8ice">
                      <img src="/img/gursungLogo.png" className="fb_logo _8ilh img" alt="logo" />
                    </div>
                    <h2 className="title">재고관리 시스템</h2>
                  </div>
             
                  <div className="form-wrapper">
                    <div className="_8iep _8icy _9ahz _9ah-">
                      <div className="_6luv _52jv">
                        <section>
                          <form className="form" onSubmit={Auth}>

                      
                            <div>

                              <div className="input-wrapper">
                                <input type="text" className="inputtext _55r1 _6luy" name="email" id="email" placeholder="이메일 또는 전화번호" value={state.email}  onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} />
                              </div>
                              <div className="input-wrapper">
                                <input type="password" className="inputtext _55r1 _6luy" name="pass" id="pass" placeholder="비밀번호" value={state.password} onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })} />
                                <div className="_9ls7 hidden_elem">
                                  <a href="#" role="button">
                                    <div className="_9lsa">
                                      <div className="_9lsb">
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='login_error_wrap'>
                              <div className="error_message">{state.error}</div>
                            </div>
                            <div className="button-wrapper">
                              <button type="submit" className="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" id="u_0_5_Hl">로그인</button>
                            </div>
                          </form>
                        </section>
                        <div className="_6ltj">
                          <a href="#">비밀번호를 잊으셨나요?</a>
                        </div>
                        <div className="_8icz">
                        </div>
                        <div className="button-wrapper">
                          <button className="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" onClick={accountCreate}>새 계정 만들기</button>
                        </div>
                       

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
        </div>

            <Footer />
          </div>

        </>
        );
}
