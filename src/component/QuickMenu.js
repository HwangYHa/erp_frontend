import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwtDecode from "jwt-decode";
import {useNavigate} from 'react-router-dom';
import './QuickMenu.css';

export default function QuickMenu() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      if (error.response) {
        navigate.push("/");
      }
    }
  }

  const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/logout');
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
      <div className="quick-menu show-call-center" id="quick-menu">
        <div className="qm-company-logo">
          <a href="/">
            <img src="/img/gursungLogo.png"/>
          </a>
        </div>

        <div className="qm-company-info">AA5 / G1080-108</div>

        <div className="qm-ecount-search">
          <div className="input-group">
            <input type="text" className="form-control" id="inputecSearch" placeholder="무엇이든 검색하세요 !! (품목, 거래처, 매뉴얼, Q&amp;A, 전표바코드)" />
            <div className="input-group-btn">
              <button className="btn btn-default" />
            </div>
          </div>
        </div>

        <div className="qm-btn-customer-center">
          <div id="customerBtnGroup" className="btn-group">
            <button className="btn btn-default btn-call-center dropdown-toggle" data-toggle="dropdown" id="ecCustomerSearch">
              고객센터
              <span className="caret"></span>
              
            </button>

            <h1 className='user-name'>{name} 님 환영합니다!</h1>
            
            <div id="customerDropdown" className="customer-menu hidden">
              <ul>
                <li id="ecQABoard"><span className="customer-support-icon customer-support-icon-qna" />온라인/동영상 문의</li>
                <li id="callBackRequest"><span className="customer-support-icon customer-support-icon-faq" />전화상담요청</li>
                <li id="ecManual"><span className="customer-support-icon customer-support-icon-manual" />도움말</li>
                <li id="ecRemote"><span className="customer-support-icon customer-support-icon-remote"></span>원격지원</li>
                <li id="movie"><span className="customer-support-icon customer-support-icon-movie"></span>동영상 강좌</li>
                <li id="ecBrowserOptimization"><span className="customer-support-icon customer-support-icon-browser-optimization"></span>브라우저 최적화</li>
                <li id="trainingService"><span className="customer-support-icon customer-support-icon-visit-edu"></span>방문교육</li>
                <li id="trainingSession"><span className="customer-support-icon customer-support-icon-collective-edu"></span>집체교육</li>
                <li id="feeInformation"><span className="customer-support-icon customer-support-icon-wallet"></span>서비스<br />신청/조회/결제</li>
                <li id="personalInfo"><span className="customer-support-icon customer-support-icon-info"></span>정보변경</li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="qm-link" id="ecMenuFunction" style={{ visibility: "visible" }}>
        
          <li id="ecRemoteService" className="qm-link-remote">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header">원격지원</div>
            </div>
          </li>
          <li id="ecnwindow" className="qm-link-new-window">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header">새창열기</div>
              <div className="qm-link-dropdown-contents text-center">
                <ul id="ecnwindowList">
                  <li><a href="#">새탭열기</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li id="ecMenuView" className="qm-link-menu-toggle">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header">My메뉴로 전환</div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecMenuViewList"></ul>
              </div>
            </div>
          </li>
          <li id="ecMemo" className="qm-link-memo">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header">E Note</div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecMemoList">
                  <li><a href="#">To Do</a></li>
                  <li><a href="#">Memo</a></li>
                  <li><a href="#">개인파일함</a></li>
                  <li><a href="#">이미지파일함</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li id="ecNotification" className="qm-link-notification">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header">알림</div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecNotificationList"></ul>
              </div>
            </div>
            <span id="ecNotificationCount" className="badge" />
          </li>
          <li id="ecMsg" className="qm-link-msg">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header">쪽지</div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecMsgList"></ul>
              </div>
            </div>
            <span id="ecMsgCount" className="badge hidden"></span>
          </li>
          <li id="ecMessenger" className="qm-link-messenger">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> 메신저 </div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecMessengerList"></ul>
              </div>
            </div>
            <span id="ecMessengerCount" className="badge">7</span>
          </li>
          <li id="ecsms" className="qm-link-sms">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> SMS </div>
            </div>
          </li>
          <li id="ecMail" className="qm-link-email">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> Email </div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecMailList"></ul>
              </div>
            </div>
            <span id="ecMailCount" className="badge"></span>
          </li>
          <li id="ecUserPay" className="qm-link-userpay">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> UserPay </div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecUserPayList"></ul>
              </div>
            </div>
          </li>
          <li id="ecTimeline" className="qm-link-timeline">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> 타임라인 </div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecTimelineList"></ul>
              </div>
            </div>
          </li>
          <li id="ecBookmark" className="qm-link-favourite">
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> 북마크 </div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecBookmarkList"></ul>
              </div>
            </div>
          </li>
          <li id="ecPersonal" className="qm-link-personalization">
          </li>
          <li id="ecLogout" className="qm-link-logout" onClick={Logout}>
            <div className="qm-link-dropdown">
              <div className="qm-link-dropdown-header"> 로그아웃 </div>
              <div className="qm-link-dropdown-contents">
                <ul id="ecLogoutList">
                  <li><a href="#"><span>퇴근 &amp; 로그아웃</span></a></li>
                </ul>
              </div>
            </div>
          </li>

          <li id="ecqmgroup" className="qm-link-group" />
        </ul>
      </div>
    </>
  );
}

