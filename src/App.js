import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Main from './component/Main'
import ClientRegister from './component/page/ClientRegister'
import WarehouseRegister from './component/page/WarehouseRegister'
import ItemRegister from './component/page/ItemRegister'
import Dashboard from './component/Dashboard';
import Register from "./component/Register";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/erp' element={<Main />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/client-Register'  element={<ClientRegister />} />
          <Route path='/Warehouse-Register'  element={<WarehouseRegister />} />
          <Route path='Item-Register'  element={<ItemRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
