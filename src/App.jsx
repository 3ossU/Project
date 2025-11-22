import { useState } from 'react'

import './App.css'
import Stat from './page/Admin page/stat'
// import BuyerList from './page/buyerlist'
import Sellerlist from './page/Admin page/sellerlist'
import Verify from './page/Admin page/verify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAppLayout from './layouts/AdminAppLayout'
import Home from './page/Home'
import Propertie from './page/Propertie'
import TradingGuide from './page/TradingGuide'
import Login from './page/Login'
import UserAppLayout from './layouts/UserAppLayout'
import ForwardToLogin from './page/ForwardToLogin'

function App() {

  return (

    <BrowserRouter basename="/multipages">
      <Routes>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminAppLayout />}>
          <Route path="sellerlist" element={<Sellerlist />} /> {/* เปลี่ยนเป็นหน้า userlist รวมทั้ง buyer และ seller */}
          <Route path="stat" element={<Stat />} />
          <Route path="verify" element={<Verify />} />
        </Route>

        {/* buyer */}
        <Route path="/buyer" element={<UserAppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="propertie" element={<Propertie />} />
          <Route path="tradingguide" element={<TradingGuide />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* seller */}
        <Route path="/buyer" element={<UserAppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="propertie" element={<Propertie />} />
          <Route path="tradingguide" element={<TradingGuide />} />
          <Route path="login" element={<Login />} />
        </Route>
    {/* <Route path="*" element={<ForwardToLogin />} /> */}
      </Routes>
    </BrowserRouter>



  )
}

export default App
