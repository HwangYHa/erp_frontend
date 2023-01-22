import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login'
import Main from './Main'
import ClientRegister from './page/ClientRegister'
import WarehouseRegister from './page/WarehouseRegister'
import ItemRegister from './page/ItemRegister'
import Dashboard from './Dashboard';
import Register from "./Register";

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
