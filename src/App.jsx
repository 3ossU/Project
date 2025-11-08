import { useState } from 'react'

import './App.css'
import Stat from './page/stat'
// import BuyerList from './page/buyerlist'
import Sellerlist from './page/sellerlist'
import Verify from './page/verify'
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
    
    <BrowserRouter basename='/multipages/'>
    <Routes>
      {/* ดึงlayout */}
      <Route element={<AdminAppLayout/>}> 
      {/* <Route path='buyerlist' element={<BuyerList/>}/> */}
      <Route path='sellerlist' element={<Sellerlist/>}/>
      <Route path='stat' element={<Stat/>}/>
      <Route path='verify' element={<Verify/>}/>
      {/* <Route path='*' element={<ForwardToLogin />} /> */}
      </Route>
      <Route element={<UserAppLayout/>}> 
      <Route path='home' element={<Home/>}/>
      <Route path='propertie' element={<Propertie/>}/>
      <Route path='tradingguide' element={<TradingGuide/>}/>
      <Route path='login' element={<Login/>}/>
      {/* <Route path='*' element={<ForwardToLogin />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
     
     
    
  )
}

export default App
