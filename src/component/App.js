import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login'
import Main from './Main'
import ClientRegister from './page/ClientRegister'
import WarehouseRegister from './page/WarehouseRegister'
import ItemRegister from './page/Item'
import Dashboard from './Dashboard';
import Register from "./Register";
import NotFound from "./NotFound";

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/erp" element={<Main />} >
            <Route path='client-Register' element={<ClientRegister />} />
            <Route path='Warehouse-Register' element={<WarehouseRegister />} />
            <Route path='Item' element={<ItemRegister />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>


  )
}


export default App
