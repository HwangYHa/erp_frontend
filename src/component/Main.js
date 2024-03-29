import React, { useState, useEffect } from 'react';
import LNB from './LNB';
import Sidebar from './Sudebar';
// import FrameBody from './page/FrameBody';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { useNavigate, Routes, Route } from 'react-router-dom';

import ClientRegister from './page/ClientRegister'
import WarehouseRegister from './page/WarehouseRegister'
import Item from './page/Item';
export default function Main() {
  const [sideMenuId, setSideMenuId] = useState(-1);
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // 추후 NextJs의 next-auth-useSession 이용해서 Protected Route 개발하기
  return (

    <>
      <LNB handleChangeMenuId={setSideMenuId} />
      <Sidebar sideMenuId={sideMenuId} />
        {/* 메인 컨텐츠 영역 css 처리하기 230206 미해결 */}
        <div className='wrapper-frame-body'>
          <div style={{display: 'block'}}>
          <Routes>
            <Route path='client-Register' element={<ClientRegister />} />
            <Route path='Warehouse-Register' element={<WarehouseRegister />} />
            <Route path='Item' element={<Item />} />
          </Routes>
          </div>
        </div>
    </>
  );
}
