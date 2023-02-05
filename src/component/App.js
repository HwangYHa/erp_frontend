import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login'
import Main from './Main'
import ClientRegister from './page/ClientRegister'
import WarehouseRegister from './page/WarehouseRegister'
import ItemRegister from './page/ItemRegister'
import Dashboard from './Dashboard';
import Register from "./Register";
import NotFound from "./NotFound";

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
      <Main />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/erp/client-Register' element={<ClientRegister />} />
          <Route path='/erp/Warehouse-Register' element={<WarehouseRegister />} />
          <Route path='/erp/Item-Register' element={<ItemRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
