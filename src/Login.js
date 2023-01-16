import React, { useState } from 'react'
import axios from 'axios';
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';
import './Login.css';
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
    <>
      <div className="_li" id="u_0_1_DE">
        <div id="globalContainer" className="uiContextualLayerParent">
          <div className="fb_content clearfix " id="content" role="main">
            <div>
              <div className="_8esj _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka">
                <div className="_8esk">
                  <div className="_8esl">
                    <div className="_8ice">
                      <img src="/img/gursungLogo.png" className="fb_logo _8ilh img" alt="logo" />
                    </div>
                    <h2 className="_8eso">재고관리 시스템</h2>
                  </div>
                  <div className="_8esn">
                    <div className="_8iep _8icy _9ahz _9ah-">
                      <div className="_6luv _52jv">
                        <section>
                          <form className="_9vtf" id="u_0_2_fs" onSubmit={Auth}>
                            <input type="hidden" name="jazoest" value="21058" />
                            <input type="hidden" name="lsd" value="AVqgkgz_qVA" />
                            <div>
                              <p className="has-text-centered">{msg}</p>
                              <div className="_6lux">
                                <input type="text" className="inputtext _55r1 _6luy" name="email" id="email" placeholder="이메일 또는 전화번호" value={email} onChange={(e) => setEmail(e.target.value)} />
                              </div>
                              <div className="_6lux">
                                <input type="password" className="inputtext _55r1 _6luy" name="pass" id="pass" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="_9ls7 hidden_elem" id="u_0_3_y1">
                                  <a href="#" role="button">
                                    <div className="_9lsa">
                                      <div className="_9lsb" id="u_0_4_Dc">
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <input type="hidden" name="login_source" />
                            <input type="hidden" name="next" />
                            <div className="_6ltg">
                              <button type="submit" className="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" id="u_0_5_Hl">로그인</button>
                            </div>
                            <div className="_6ltj">
                              <a href="#">비밀번호를 잊으셨나요?</a>
                            </div>
                            <div className="_8icz">
                            </div>
                            <div className="_6ltg">
                              <a role="button" className="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" href="#" id="u_0_0_rv">새 계정 만들기</a>
                            </div>
                          </form>
                        </section>
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
